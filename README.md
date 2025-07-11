# Event Management System

A comprehensive event management application with frontend built in Next.js and backend built with Express.js.

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://user:praveendon@cluster0.5lhxcry.mongodb.net/event-mng
   JWT_SECRET=sdjfhkjsadfahsdfaskhdjfgasjhdfgajsdfaskdlasdka
   CLOUDINARY_CLOUD_NAME=dvrma5ioz
   CLOUDINARY_API_KEY=339951371635724
   CLOUDINARY_API_SECRET=ljn8EhW4uUR6Ua1iyF1KHy2wVGs
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the frontend directory with:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```
   npm run dev
   ```

## Important Notes

- The backend server must be running for the frontend to work properly
- Make sure the backend is running on port 5000
- To submit enquiries, the backend server must be accessible
- If you encounter connection errors, ensure the backend server is running

## Features

- User authentication (login/register)
- User profile management
- Service exploration and details
- Enquiry submission for services
- Geolocation for address input
- WhatsApp number integration

## Troubleshooting

### Connection Refused Errors

If you see connection refused errors:

1. Ensure the backend server is running
2. Check that the backend is running on port 5000
3. Verify the frontend is using the correct API URL
4. Restart both frontend and backend servers

### Other Issues

If experiencing other issues:

1. Check browser console for detailed error messages
2. Ensure all environment variables are correctly set
3. Clear browser cache and restart the application 