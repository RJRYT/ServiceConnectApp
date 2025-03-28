import React from "react";

const LoginButton = ({ icon, text, bgColor, textColor, iconBgColor }) => {
  return (
    <button
      className={`px-2 text-sm font-medium h-12 w-70 rounded-4xl flex items-center gap-3 cursor-pointer font-aldrich ${bgColor} ${textColor} transition-all hover:bg-white/50 active:scale-[0.9]`}
    >
      <div
        className={`rounded-full w-10 h-10 flex items-center justify-center ${iconBgColor}`}
      >
        {icon}
      </div>
      {text}
    </button>
  );
};

export default LoginButton;
