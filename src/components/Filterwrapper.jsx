import React from 'react';
import useIsDesktop from '../utils/useIsDesktop';

function FilterWrapper({ children, onClose }) {
  const isDesktop = useIsDesktop();

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isDesktop ? 'bg-black/30 backdrop-blur-sm' : 'bg-white'
      }`}
      onClick={onClose}
    >
      {/* Prevent click from closing if inside the modal */}
      <div
        className={`${
          isDesktop
            ? 'bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto'
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
