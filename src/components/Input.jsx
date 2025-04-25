import React, { useRef, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function Input({
  type,
  placeholder,
  value,
  onChange,
  icon,
  id,
  className = "",
  options = [],
  bgColor='bg-[#736A68]',
  textColor="text-white",
  placeholderColor='placeholder-white'
}) {
  const dateInputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleDateClick = () => {
    dateInputRef.current?.showPicker();
  };
  return (
    <div className="relative max-w-[360px] h-16">
      {icon}
      {type === "dropdown" ? (
        <select
          value={value}
          onChange={onChange}
          id={id}
          className={` ${bgColor} px-4 ${textColor} rounded-xl h-full w-full ${placeholderColor} font-mulish focus:outline-none ${className}`}
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
          className={` ${bgColor} px-${
            icon ? "12" : "4"
          } ${textColor} rounded-xl h-full w-full ${placeholderColor} font-mulish focus:outline-none`}
          style={{ colorScheme: "dark" }}
        />
      ) : type === "password" ? (
        <div className="relative w-full h-full">
          <input
            type={showPassword ? "text" : "password"}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={` ${bgColor} px-${
              icon ? "12" : "4"
            } ${textColor} rounded-xl h-full w-full ${placeholderColor} font-mulish focus:outline-none ${className}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={` ${bgColor} px-${
            icon ? "12" : "4"
          } ${textColor} rounded-xl h-full w-full ${placeholderColor} font-mulish focus:outline-none ${className}`}
        />
      )}
    </div>
  );
}

export default Input;
