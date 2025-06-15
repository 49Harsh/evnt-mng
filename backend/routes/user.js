const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const auth = require('../middleware/auth');
const User = require('../models/User');

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', auth, upload.single('profileImage'), async (req, res) => {
  try {
    let user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Upload new image if provided
    if (req.file) {
      // Delete old image from Cloudinary if exists
      if (user.profileImage) {
        const publicId = user.profileImage.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(`profile_images/${publicId}`);
      }

      // Upload new image
      const b64 = Buffer.from(req.file.buffer).toString('base64');
      const dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;
      const result = await cloudinary.uploader.upload(dataURI, {
        folder: 'profile_images',
      });
      req.body.profileImage = result.secure_url;
    }

    // Update user
    user = await User.findByIdAndUpdate(
      req.user.userId,
      { $set: req.body },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete user
router.delete('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete profile image from Cloudinary if exists
    if (user.profileImage) {
      const publicId = user.profileImage.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(`profile_images/${publicId}`);
    }

    await User.findByIdAndDelete(req.user.userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
