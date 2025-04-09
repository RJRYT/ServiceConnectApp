import React from 'react';
import useIsDesktop from '../utils/useIsDesktop';

function FilterWrapper({ children, onClose }) {
  const isDesktop = useIsDesktop();

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isDesktop ? 'bg-black/30 backdrop-blur-sm' : 'bg-gray-200'
      }`}
      onClick={onClose}
    >
      <div
        className={`${
          isDesktop
            ? 'bg-gray-200 rounded-2xl shadow-xl p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto'
            : 'w-full h-full overflow-y-auto'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default FilterWrapper;
