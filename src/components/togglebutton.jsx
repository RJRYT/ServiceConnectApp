import React from 'react';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <label className="relative inline-block w-12 h-6 cursor-pointer">
      <input
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
        className="sr-only peer"
      />
      <div className="bg-blue-100 peer-checked:bg-blue-200 rounded-full w-full h-full transition-colors duration-300 shadow"></div>
      <div className="absolute top-1/2 left-[3px] w-5 h-5 bg-black rounded-full transition-transform duration-300 transform -translate-y-1/2 peer-checked:translate-x-6"></div>
    </label>
  );
};

export default ToggleSwitch;
