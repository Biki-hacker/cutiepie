import React from 'react';

const PageWrapper = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden">
      <div className="w-full h-full max-w-[95vw] max-h-[95vh] mx-auto p-2 md:p-4">
        <div className="w-full h-full bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
          {/* Left side - Content Area */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4 md:p-8">
            <div className="w-full h-full flex items-center justify-center">
              {React.Children.toArray(children).filter((_, i) => i === 0)}
            </div>
          </div>
          
          {/* Right side - Buttons Area */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4 md:p-8 bg-pink-50">
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
              {React.Children.toArray(children).filter((_, i) => i > 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
