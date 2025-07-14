const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');
const enquiryRoutes = require('./routes/enquiry');
const vendorRoutes = require('./routes/vendor');

dotenv.config();

const app = express();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://www.milanmanch.com',
    'http://localhost:5173', // Added Vite dev server
    'https://event-mng-react.netlify.app', // Netlify admin panel
    'https://event-mng-react.netlify.app/' // Netlify admin panel with trailing slash
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const fs = require('fs');
const path = require('path');
const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Health check endpoint
app.get('/health', (req, res) => {
  const mongoStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  res.status(200).json({
    success: true,
    timestamp: new Date().toISOString(),
    service: 'Milan Manch API',
    status: 'up',
    mongodb: mongoStatus,
    environment: process.env.NODE_ENV || 'development'
  });
});

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/contact', contactRoutes); // Adding /api prefix to match frontend expectation
app.use('/contact', contactRoutes); // Keep the original route too for compatibility
app.use('/enquiry', enquiryRoutes); // New enquiry route
app.use('/vendor', vendorRoutes); // Vendor registration route

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});