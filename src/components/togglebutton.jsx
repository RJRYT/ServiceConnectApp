import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div onClick={handleToggle} className="relative inline-block w-12 h-6 cursor-pointer">
      <div
        className={`rounded-full w-full h-full transition-colors duration-300 shadow ${
          isOn ? 'bg-blue-200' : 'bg-blue-100'
        }`}
      ></div>

      <div
        className={`absolute top-1/2 w-5 h-5 bg-black rounded-full transition-transform duration-300 transform -translate-y-1/2 ${
          isOn ? 'translate-x-6' : 'translate-x-[3px]'
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
