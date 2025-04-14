import React from "react";

function HomeMenuItems({ image, title }) {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <img
        className="h-16 w-16 md:h-24 md:w-24 rounded-full md:rounded-3xl p-1 sm:p-2 border-4 contain"
        src={image}
        alt=""
      />
      <h4 className="flex justify-center items-center w-24 text-sm font-mulish font-bold">
        {title.split(" ")[0]}
      </h4>
    </div>
  );
}

export default HomeMenuItems;
