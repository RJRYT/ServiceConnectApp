import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { BiSearchAlt } from "react-icons/bi";

function Mainheader({ title }) {
  return (
    <div>
      <div className="bg-slate-900 w-full  h-[80px] flex justify-between items-center px-2 lg:px-8">
        <div className=" flex items-center lg:gap-4 gap-2">
          <div className="border-2 border-white w-10 h-10 lg:w-13 lg:h-13 rounded-full flex justify-center items-center pr-1">
            <IoIosArrowBack className="text-white text-3xl" />
          </div>
          <div className="">
            <h1 className="text-lg lg:text-2xl font-bold text-white">
              {title}
            </h1>
          </div>
        </div>
        <div className="flex lg:gap-5 gap-2">
          <div className="hover:border-1 hover:border-gray-500 duration-300 w-10 h-10 rounded-full flex justify-center items-center pr-1 cursor-pointer lg:w-13 lg:h-13">
            <VscSettings className="text-white text-3xl lg:text-4xl" />
          </div>
          <div className="hover:border-1 hover:border-gray-500 w-10 h-10 duration-300 rounded-full flex justify-center items-center  cursor-pointer lg:w-13 lg:h-13">
            <BiSearchAlt className="text-white text-3xl lg:text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainheader;
