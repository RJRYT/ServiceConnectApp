import React, { useState } from 'react';

function NearBy() {
  const [active, setActive] = useState('Near By');
  const options = ['Near By', '10KM', 'All']; 

  const getButtonClass = (label) => {
    const isActive = active === label;
    return `w-[33%] text-sm font-bold px-4 py-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer 
      ${isActive ? 'bg-[#30323c] text-white' : 'text-[#1d1f2a] bg-transparent'}`;
  };

  return (
    <div className="h-[60%] w-[95%] bg-white flex justify-between items-center border-3 border-[#1d1f2a] rounded-full">
      {options.map((label) => (
        <button
          key={label}
          onClick={() => setActive(label)}
          className={getButtonClass(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default NearBy;
