import React, { useRef } from "react";
import { BsCalendarDate, BsClock } from "react-icons/bs";

function DateTimeInput({ type, label, className = "" }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.showPicker?.();
    inputRef.current?.focus();
  };

  const isDate = type === "date";
  const Icon = isDate ? BsCalendarDate : BsClock;
  return (
    <div className={`relative h-16 min-w-1/2 ${className}`}>
      <p className="absolute left-4 top-1 text-sm text-gray-400">{label}</p>
      <Icon className="absolute right-4 top-5" size={25} color="gray" />
      <input
        type={type}
        placeholder={label.toLowerCase()}
        ref={inputRef}
        onClick={handleClick}
        className="bg-white px-4 text-gray-500 rounded-xl h-full w-full placeholder-gray-500 font-mulish focus:outline-none"
        style={{ colorScheme: "dark" }}
      />
    </div>
  );
}

export default DateTimeInput;
