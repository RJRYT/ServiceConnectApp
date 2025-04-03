import React, { useRef } from "react";

function ProfileInput({
  type,
  placeholder,
  value,
  onChange,
  icon,
  id,
  className = "",
  options = [],
}) {
  const dateInputRef = useRef(null);
  const handleDateClick = () => {
    dateInputRef.current?.showPicker();
  };
  return (
    <div className="relative max-w-[360px] min-w-[360px] h-16">
      {icon}
      {type === "dropdown" ? (
        <select
          value={value}
          onChange={onChange}
          id={id}
          className={`bg-[#736A68] px-4 text-white rounded-xl h-full w-full placeholder-white font-mulish focus:outline-none ${className}`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : type === "date" ? (
        <input
          type={type}
          placeholder={placeholder}
          ref={dateInputRef}
          onClick={handleDateClick}
          value={value}
          onChange={onChange}
          id={id}
          className={`bg-[#736A68] px-${
            icon ? "12" : "4"
          } text-white rounded-xl h-full w-full placeholder-white font-mulish focus:outline-none`}
          style={{ colorScheme: "dark" }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`bg-[#736A68] px-${
            icon ? "12" : "4"
          } text-white rounded-xl h-full w-full placeholder-white font-mulish focus:outline-none ${className}`}
        />
      )}
    </div>
  );
}

export default ProfileInput;
