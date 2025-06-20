import React, { useEffect } from 'react';

const OAuthCallback: React.FC = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.crossOrigin = "anonymous";
    script.type = "application/javascript";
    script.dataset.host = "https://chadmoore.us.qlikcloud.com";
    script.src = "https://cdn.jsdelivr.net/npm/@qlik/embed-web-components@1/dist/oauth-callback.js";
    
    // Append the script to the head
    document.head.appendChild(script);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <h2 className="text-xl font-bold mt-4 mb-2">Processing Authentication</h2>
        <p className="mt-2 text-gray-600">Please wait while we authenticate you...</p>
      </div>
    </div>
  );
};

export default OAuthCallback;
