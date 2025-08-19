import React from 'react';

const YesButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-green-400 hover:bg-green-500 px-6 py-3 rounded-xl text-white font-semibold shadow-md min-w-[120px] text-lg transition-colors ${className}`}
      {...props}
    >
      {children || 'Yes'}
    </button>
  );
};

export default YesButton;
