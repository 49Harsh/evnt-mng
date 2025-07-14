'use client';

import dynamic from 'next/dynamic';

// Import AuthDebugger dynamically with SSR disabled
const AuthDebugger = dynamic(() => import('./AuthDebugger'), { 
  ssr: false 
});

export default function AuthDebuggerWrapper() {
  // Only show in development environment
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  
  return <AuthDebugger />;
} 