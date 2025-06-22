const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { authenticate } = require('../middleware/auth');

// POST /api/contact - only for authenticated users
router.post('/', authenticate, async (req, res) => {
  try {
    const userId = req.user.userId; // always present if authenticated
    const contact = new Contact({
      ...req.body,
      user: userId
    });
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully', contact });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/contact - admin only, get all contact messages with user details
router.get('/', authenticate, async (req, res) => {
  try {
    // Optionally, check if req.user.isAdmin
    const contacts = await Contact.find().populate('user', 'name email profileImage');
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
