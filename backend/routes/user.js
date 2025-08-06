const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { authenticate, requireAdmin } = require('../middleware/auth');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Get user profile
router.get('/profile', authenticate, async (req, res) => {
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
router.put('/profile', authenticate, upload.single('profileImage'), async (req, res) => {
  try {
    let user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Handle password update separately using the User model's save method
    // to trigger the password hashing middleware
    if (req.body.password) {
      user.password = req.body.password; // This will be hashed by the pre-save hook
      await user.save();
      
      // Remove password from req.body to avoid overwriting it again in the update
      delete req.body.password;
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

    // Only update other fields if there are any left to update
    if (Object.keys(req.body).length > 0) {
      // Update user with remaining fields
      user = await User.findByIdAndUpdate(
        req.user.userId,
        { $set: req.body },
        { new: true }
      ).select('-password');
    } else {
      // If we only updated the password, still need to return the user
      user = await User.findById(req.user.userId).select('-password');
    }

    res.json(user);
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete user
router.delete('/', authenticate, async (req, res) => {
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

// GET /users - admin only, get all users (for admin dashboard)
router.get('/', requireAdmin, async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // fetch all fields except password
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
