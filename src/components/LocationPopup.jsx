import React, { useEffect, useRef } from "react";

const LocationPopup = ({ isVisible, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg w-[90%] max-w-md flex flex-col items-center justify-center"
      >
        {children}
      </div>
    </div>
  );
};

export default LocationPopup;
