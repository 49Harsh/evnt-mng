const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');
const { authenticate } = require('../middleware/auth');
const axios = require('axios');

// @route   POST api/enquiry
// @desc    Submit a new enquiry
// @access  Public
router.post('/', async (req, res) => {
  try {
    const {
      name,
      phoneNumber,
      whatsappNumber,
      isSameAsPhone,
      email,
      address,
      location,
      serviceType,
      message
    } = req.body;

    // Create a new enquiry
    const enquiry = new Enquiry({
      name,
      phoneNumber,
      whatsappNumber: isSameAsPhone ? phoneNumber : whatsappNumber,
      isSameAsPhone,
      email,
      address,
      location: location || { type: 'Point', coordinates: [0, 0] },
      serviceType,
      message
    });

    await enquiry.save();

    res.status(201).json({ success: true, data: enquiry });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/enquiry
// @desc    Get all enquiries
// @access  Private (admin only)
router.get('/', authenticate, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/enquiry/reverse-geocode
// @desc    Reverse geocoding - get address from coordinates
// @access  Public
router.get('/reverse-geocode', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    
    if (!lat || !lon) {
      return res.status(400).json({ msg: 'Latitude and longitude are required' });
    }
    
    // Make request to OpenStreetMap Nominatim API
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
      {
        headers: {
          'User-Agent': 'EventManagementApp/1.0'
        }
      }
    );
    
    res.json(response.data);
  } catch (err) {
    console.error('Reverse geocoding error:', err.message);
    res.status(500).json({ msg: 'Error fetching address from coordinates' });
  }
});

// @route   GET api/enquiry/:id
// @desc    Get enquiry by ID
// @access  Private
router.get('/:id', authenticate, async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    
    if (!enquiry) {
      return res.status(404).json({ msg: 'Enquiry not found' });
    }

    res.json(enquiry);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Enquiry not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/enquiry/:id
// @desc    Update enquiry status
// @access  Private
router.put('/:id', authenticate, async (req, res) => {
  try {
    const { status } = req.body;
    
    // Find and update the enquiry
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { $set: { status } },
      { new: true }
    );
    
    if (!enquiry) {
      return res.status(404).json({ msg: 'Enquiry not found' });
    }

    res.json(enquiry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/enquiry/:id
// @desc    Delete an enquiry
// @access  Private (admin only)
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    
    if (!enquiry) {
      return res.status(404).json({ msg: 'Enquiry not found' });
    }

    await enquiry.remove();
    res.json({ msg: 'Enquiry removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Enquiry not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
