import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ title, image, link }) {
  console.log("title:", title);
  console.log("target:", link);
  return (
    <Link
      to={link}
      className="p-3 h-34 w-28 sm:w-34 flex flex-col justify-center items-center bg-white rounded-2xl shadow-2xl cursor-pointer transition-all hover:bg-white/80"
    >
      <img src={image} className="w-20" alt="image" />
      <h2 className="text-xs font-mulish text-center font-bold uppercase">
        {title}
      </h2>
    </Link>
  );
}

export default MenuItem;
