const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { authenticate } = require('../middleware/auth');

// POST /contact - public (no authentication required)
router.post('/', async (req, res) => {
  try {
    const contact = new Contact({
      ...req.body
    });
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully', contact });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /contact - admin only, get all contact messages with user details
router.get('/', authenticate, async (req, res) => {
  try {
    // Optionally, check if req.user.isAdmin
    const contacts = await Contact.find().populate('user', 'name email profileImage');
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE /contact/:id - admin only, delete a contact message
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
