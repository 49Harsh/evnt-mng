const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  businessName: {
    type: String,
    required: true
  },
  services: {
    type: String,
    required: true
  },
  cities: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/
  },
  reason: {
    type: String
  },
  // Certificate uploads
  msmeCertificate: {
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  gstCertificate: {
    public_id: String,
    url: String
  },
  fssaiCertificate: {
    public_id: String,
    url: String
  },
  // Bank details
  bankDetails: {
    accountHolder: {
      type: String,
      required: true
    },
    bankName: {
      type: String,
      required: true
    },
    accountNumber: {
      type: String,
      required: true
    },
    ifscCode: {
      type: String,
      required: true
    },
    cancelledCheque: {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
    upiId: {
      type: String
    }
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Vendor', VendorSchema); 