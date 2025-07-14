@echo off
echo Starting Milan Manch Backend Server...
echo.

rem Check if .env file exists, create a basic one if it doesn't
if not exist .env (
    echo Creating default .env file...
    echo MONGODB_URI=mongodb+srv://your_mongodb_uri_here > .env
    echo PORT=5000 >> .env
    echo JWT_SECRET=change_this_to_a_secure_random_string >> .env
    echo CLOUDINARY_CLOUD_NAME=your_cloud_name >> .env
    echo CLOUDINARY_API_KEY=your_api_key >> .env
    echo CLOUDINARY_API_SECRET=your_api_secret >> .env
    echo.
    echo ⚠️ Default .env file created. Please update with your actual credentials.
    echo.
)

rem Check if node_modules exists
if not exist node_modules\ (
    echo Installing dependencies...
    npm install
    echo.
)

rem Clear the uploads directory to avoid disk space issues
if exist uploads\ (
    echo Cleaning uploads directory...
    del /Q uploads\*.*
    echo.
)

rem Start the server
echo Starting server on port 5000...
echo Press Ctrl+C to stop the server
echo.
npm run dev

pause 