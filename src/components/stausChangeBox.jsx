import React, { useState } from 'react';

function StatusChangeFilter({ options = []}) {
  const [active, setActive] = useState(options[0]);

  const handleClick = (label) => {
    setActive(label);
    if (onChange) onChange(label);
  };

  const getButtonClass = (label) => {
    const isActive = active === label;
    return `flex-1 text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer
      ${isActive ? 'bg-white' : 'text-[#1d1f2a] bg-transparent'}`;
  };

  return (
    <div className="inline-flex bg-[#736A68]  rounded-full overflow-hidden min-w-80 lg:w-3xl
    my-4 px-1 py-1">
      {options.map((label) => (
        <button
          key={label}
          onClick={() => handleClick(label)}
          className={getButtonClass(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default StatusChangeFilter;
