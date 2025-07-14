'use client';

import { useState, useEffect } from 'react';
import { logAuthState, clearAuthData, fixTokenExpiration, checkAuthConnection } from '@/utils/authDebug';

const AuthDebugger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authState, setAuthState] = useState<{
    token: boolean;
    expiration: string | null;
    expired: boolean;
    userData: boolean;
  }>({
    token: false,
    expiration: null,
    expired: false,
    userData: false,
  });
  
  const [connectionStatus, setConnectionStatus] = useState<{
    checked: boolean;
    success: boolean;
    message: string;
  }>({
    checked: false,
    success: false,
    message: '',
  });

  // Load auth state
  useEffect(() => {
    if (isOpen) {
      refreshAuthState();
    }
  }, [isOpen]);

  const refreshAuthState = () => {
    // Get token info
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('tokenExpiration');
    const userData = localStorage.getItem('user');
    
    let expired = false;
    let expirationDate: string | null = null;
    
    if (expiration) {
      const expiresAt = new Date(parseInt(expiration, 10));
      expirationDate = expiresAt.toLocaleString();
      expired = Date.now() > parseInt(expiration, 10);
    }
    
    setAuthState({
      token: !!token,
      expiration: expirationDate,
      expired,
      userData: !!userData,
    });
    
    // Log to console for more details
    logAuthState();
  };

  const handleClearAuth = () => {
    clearAuthData();
    refreshAuthState();
  };

  const handleFixExpiration = () => {
    const result = fixTokenExpiration();
    refreshAuthState();
    
    if (result.success) {
      alert(`Token expiration fixed. New expiration: ${result.expiresAt}`);
    } else {
      alert(result.message);
    }
  };

  const handleCheckConnection = async () => {
    setConnectionStatus({
      checked: true,
      success: false,
      message: 'Checking connection...',
    });
    
    try {
      const result = await checkAuthConnection();
      setConnectionStatus({
        checked: true,
        success: result.success,
        message: result.message,
      });
    } catch (error) {
      setConnectionStatus({
        checked: true,
        success: false,
        message: `Error: ${error instanceof Error ? error.message : String(error)}`,
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg"
        title="Auth Debugger"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>

      {/* Debug Panel */}
      {isOpen && (
        <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-4 mt-2 w-80">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg">Auth Debugger</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
          
          <div className="space-y-3 mb-4">
            <div>
              <span className="font-medium">Token Present:</span>{' '}
              <span className={authState.token ? 'text-green-600' : 'text-red-600'}>
                {authState.token ? 'Yes' : 'No'}
              </span>
            </div>
            
            <div>
              <span className="font-medium">Token Expiration:</span>{' '}
              <span className={authState.expired ? 'text-red-600' : 'text-green-600'}>
                {authState.expiration || 'Not set'}
                {authState.expiration && (
                  <span> ({authState.expired ? 'Expired' : 'Valid'})</span>
                )}
              </span>
            </div>
            
            <div>
              <span className="font-medium">User Data:</span>{' '}
              <span className={authState.userData ? 'text-green-600' : 'text-red-600'}>
                {authState.userData ? 'Present' : 'Missing'}
              </span>
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <button
              onClick={refreshAuthState}
              className="w-full bg-gray-200 hover:bg-gray-300 py-1 px-3 rounded text-sm"
            >
              Refresh Auth State
            </button>
            
            <button
              onClick={handleFixExpiration}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm"
              disabled={!authState.token}
            >
              Fix Token Expiration
            </button>
            
            <button
              onClick={handleClearAuth}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
            >
              Clear Auth Data
            </button>
            
            <button
              onClick={handleCheckConnection}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-sm"
              disabled={!authState.token}
            >
              Test API Connection
            </button>
          </div>
          
          {connectionStatus.checked && (
            <div className={`p-2 rounded text-sm ${
              connectionStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {connectionStatus.message}
            </div>
          )}
          
          <div className="text-xs text-gray-500 mt-4">
            Note: Check browser console for more detailed information.
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthDebugger; 