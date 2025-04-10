import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { BiBookBookmark } from "react-icons/bi";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import timer from "../assets/timer.png";
import booklist from "../assets/booklist.png";
import vector from "../assets/Vectorr.png";

function Footermenu() {
  return (
    <div className=" fixed bottom-0 left-0 mb-5 sm:hidden h-[55px] w-[400px] flex justify-center ">
      <div className="w-[80%] h-full bg-[#736a68] flex items-center justify-center gap-8 rounded-2xl p-2">
        <AiFillAppstore className=" text-white text-[22px] cursor-pointer transform hover:scale-150 trasition-all duration-500 active:scale-[0.9]" />
        <img
          src={booklist}
          className="text-white h-5 w-4 cursor-pointer transform hover:scale-150 trasition-all duration-500 active:scale-[0.9]"
        />
        <img
          src={timer}
          className="text-white  h-5 w-5 cursor-pointer transform hover:scale-150 trasition-all duration-500 active:scale-[0.9]"
        />
        <img
          src={vector}
          className="text-white  h-5 w-5 cursor-pointer transform hover:scale-150 trasition-all duration-500 active:scale-[0.9]"
        />
        <FaPlus className="text-white text-[20px] cursor-pointer transform hover:scale-150 trasition-all duration-500 active:scale-[0.9]" />
        <HiMiniQuestionMarkCircle className="text-white text-2xl   cursor-pointer transform hover:scale-150 trasition-all duration-500 active:scale-[0.9]" />
      </div>
    </div>
  );
}

export default Footermenu;
