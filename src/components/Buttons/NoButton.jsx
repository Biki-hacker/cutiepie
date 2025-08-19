import React from 'react';

const NoButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-red-400 hover:bg-red-500 px-6 py-3 rounded-xl text-white font-semibold shadow-md min-w-[120px] text-lg transition-colors ${className}`}
      {...props}
    >
      {children || 'No'}
    </button>
  );
};

export default NoButton;
