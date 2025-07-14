/**
 * Debug utility for authentication issues
 */

/**
 * Logs the current auth state to the console
 */
export const logAuthState = () => {
  console.log('======= Auth Debug Info =======');
  
  // Check if token exists
  const token = localStorage.getItem('token');
  console.log('Token exists:', !!token);
  
  // Check token expiration
  const expiration = localStorage.getItem('tokenExpiration');
  if (expiration) {
    const expiresAt = new Date(parseInt(expiration, 10));
    const now = new Date();
    console.log('Token expires at:', expiresAt.toLocaleString());
    console.log('Current time:', now.toLocaleString());
    console.log('Token expired:', now > expiresAt ? 'Yes' : 'No');
    
    // Calculate time remaining
    const timeRemaining = Math.max(0, parseInt(expiration, 10) - Date.now());
    const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    console.log(`Time remaining: ${hoursRemaining}h ${minutesRemaining}m`);
  } else {
    console.log('No token expiration found');
  }
  
  // Check if user data exists
  const userData = localStorage.getItem('user');
  console.log('User data exists:', !!userData);
  
  if (userData) {
    try {
      const user = JSON.parse(userData);
      console.log('User ID:', user.id);
      console.log('User email:', user.email);
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }
  
  console.log('==============================');
};

/**
 * Clears auth data and provides feedback
 */
export const clearAuthData = () => {
  // Log current state before clearing
  console.log('Current auth state before clearing:');
  logAuthState();
  
  // Clear auth data
  localStorage.removeItem('token');
  localStorage.removeItem('tokenExpiration');
  localStorage.removeItem('user');
  
  console.log('Auth data cleared successfully');
  
  // Verify data was cleared
  console.log('Auth state after clearing:');
  logAuthState();
  
  return { success: true, message: 'Auth data cleared successfully' };
};

/**
 * Fix token expiration issues
 */
export const fixTokenExpiration = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return { success: false, message: 'No token found to fix' };
  }
  
  // Set a new expiration time (48 hours from now)
  const expiresAt = Date.now() + 2 * 24 * 60 * 60 * 1000;
  localStorage.setItem('tokenExpiration', expiresAt.toString());
  
  return { 
    success: true, 
    message: 'Token expiration updated successfully', 
    expiresAt: new Date(expiresAt).toLocaleString() 
  };
};

/**
 * Check backend connection with auth token
 */
export const checkAuthConnection = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return { success: false, message: 'No auth token found' };
    }
    
    // Import fetch dynamically to avoid issues
    const response = await fetch('http://localhost:5000/users/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    const status = response.status;
    
    if (status === 200) {
      const data = await response.json();
      return { 
        success: true, 
        message: 'Authentication successful',
        userData: data
      };
    } else if (status === 401) {
      return {
        success: false,
        message: 'Authentication failed: Token invalid or expired',
        status
      };
    } else {
      return {
        success: false,
        message: `Authentication check failed with status ${status}`,
        status
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Connection error: ${error instanceof Error ? error.message : String(error)}`,
      error
    };
  }
}; 