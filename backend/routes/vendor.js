const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');
const cloudinary = require('cloudinary').v2;
const { authenticateToken } = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/png' || 
      file.mimetype === 'image/jpg' || 
      file.mimetype === 'image/jpeg' || 
      file.mimetype === 'application/pdf'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .pdf, .png, .jpg and .jpeg format allowed!'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Handle multiple file uploads
const uploadFields = upload.fields([
  { name: 'msmeCert', maxCount: 1 },
  { name: 'gstCert', maxCount: 1 },
  { name: 'fssaiCert', maxCount: 1 },
  { name: 'cancelledCheque', maxCount: 1 }
]);

// @route   POST api/vendor/register
// @desc    Register as vendor
// @access  Public
router.post('/register', uploadFields, async (req, res) => {
  try {
    const {
      fullName,
      businessName,
      services,
      cities,
      phone,
      email,
      reason,
      accountHolder,
      bankName,
      accountNumber,
      ifscCode,
      upiId
    } = req.body;

    // Check if vendor already exists with the same email
    let existingVendor = await Vendor.findOne({ email });
    if (existingVendor) {
      return res.status(400).json({ 
        success: false,
        message: 'A vendor with this email already exists' 
      });
    }

    // Upload files to Cloudinary
    const uploadToCloudinary = async (file, folder) => {
      if (!file) return null;
      
      try {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: folder,
          resource_type: 'auto'
        });
        return {
          public_id: result.public_id,
          url: result.secure_url
        };
      } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw new Error('File upload failed');
      }
    };

    // Process uploads
    const msmeCertificateUpload = await uploadToCloudinary(
      req.files.msmeCert?.[0],
      'vendor/msme'
    );
    
    // Check if MSME certificate was uploaded (required)
    if (!msmeCertificateUpload) {
      return res.status(400).json({
        success: false,
        message: 'MSME Certificate is required'
      });
    }

    // Process optional uploads
    const gstCertificateUpload = req.files.gstCert?.[0] ? 
      await uploadToCloudinary(req.files.gstCert[0], 'vendor/gst') : 
      null;
      
    const fssaiCertificateUpload = req.files.fssaiCert?.[0] ? 
      await uploadToCloudinary(req.files.fssaiCert[0], 'vendor/fssai') : 
      null;

    const cancelledChequeUpload = await uploadToCloudinary(
      req.files.cancelledCheque?.[0],
      'vendor/cheque'
    );
    
    // Check if cancelled cheque was uploaded (required)
    if (!cancelledChequeUpload) {
      return res.status(400).json({
        success: false,
        message: 'Cancelled Cheque is required'
      });
    }

    // Create new vendor
    const newVendor = new Vendor({
      fullName,
      businessName,
      services,
      cities,
      phone,
      email,
      reason,
      msmeCertificate: msmeCertificateUpload,
      gstCertificate: gstCertificateUpload,
      fssaiCertificate: fssaiCertificateUpload,
      bankDetails: {
        accountHolder,
        bankName,
        accountNumber,
        ifscCode,
        cancelledCheque: cancelledChequeUpload,
        upiId
      }
    });

    await newVendor.save();

    res.status(201).json({
      success: true,
      message: 'Vendor registration successful. We will review your application.',
      vendor: {
        id: newVendor._id,
        fullName: newVendor.fullName,
        businessName: newVendor.businessName,
        email: newVendor.email,
        status: newVendor.status
      }
    });

  } catch (error) {
    console.error('Vendor registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during registration',
      error: error.message 
    });
  }
});

// @route   GET api/vendor/status/:id
// @desc    Check vendor application status
// @access  Public
router.get('/status/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id).select('fullName businessName status createdAt');
    
    if (!vendor) {
      return res.status(404).json({ 
        success: false, 
        message: 'Vendor not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      vendorStatus: vendor
    });
    
  } catch (error) {
    console.error('Status check error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
});

module.exports = router; 