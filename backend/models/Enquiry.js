const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  whatsappNumber: {
    type: String,
    required: true
  },
  isSameAsPhone: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      default: [0, 0]
    }
  },
  serviceType: {
    type: String,
    enum: ['wedding', 'corporate', 'social', 'private', 'cultural', 'concerts'],
    required: true
  },
  message: {
    type: String
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed', 'cancelled'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a geospatial index for location-based queries
EnquirySchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Enquiry', EnquirySchema); 