'use client';

import React, { useEffect, useState } from 'react';
import { checkServerConnection, getTroubleshootingSteps, logConnectionDetails } from '@/utils/connectionHelper';

interface Props {
  onlyShowOnError?: boolean;
}

const ConnectionStatus: React.FC<Props> = ({ onlyShowOnError = true }) => {
  const [status, setStatus] = useState<{
    isConnected: boolean;
    message: string;
    checked: boolean;
  }>({
    isConnected: false,
    message: 'Checking connection to server...',
    checked: false
  });
  
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const result = await checkServerConnection();
        setStatus({
          isConnected: result.isConnected,
          message: result.message,
          checked: true
        });
        
        // Log connection details to console for debugging
        logConnectionDetails();
      } catch (error) {
        setStatus({
          isConnected: false,
          message: 'Error checking connection. Please try again.',
          checked: true
        });
      }
    };
    
    checkConnection();
  }, []);
  
  // If we should only show on error and we're connected, don't render anything
  if (onlyShowOnError && status.isConnected) {
    return null;
  }
  
  // Don't show anything until we've checked the connection
  if (!status.checked) {
    return null;
  }
  
  const troubleshootingSteps = getTroubleshootingSteps();
  
  return (
    <div className={`mt-4 p-4 rounded-md ${status.isConnected ? 'bg-green-50' : 'bg-red-50'}`}>
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full mr-2 ${status.isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <h3 className={`font-medium ${status.isConnected ? 'text-green-800' : 'text-red-800'}`}>
          {status.isConnected ? 'Connected to server' : 'Connection Issue'}
        </h3>
      </div>
      
      <p className={`mt-2 text-sm ${status.isConnected ? 'text-green-700' : 'text-red-700'}`}>
        {status.message}
      </p>
      
      {!status.isConnected && (
        <div className="mt-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm text-red-800 underline focus:outline-none"
          >
            {showDetails ? 'Hide troubleshooting steps' : 'Show troubleshooting steps'}
          </button>
          
          {showDetails && (
            <div className="mt-3 text-sm text-red-700">
              <ul className="list-disc pl-5 space-y-1">
                {troubleshootingSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
              
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConnectionStatus; 