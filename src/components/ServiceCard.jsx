import React from "react";
import { BsBookmarkDash } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";

function ServiceCard() {
  return (
    <div className="flex flex-col min-h-48 min-w-50 md:max-w-50 rounded-2xl shadow-lg shadow-neutral-700 cursor-pointer">
      <div className="bg-black h-1/2 rounded-tl-2xl rounded-tr-2xl">
        <img src="" alt="" />
      </div>
      <div className="p-2 h-1/2 bg-white rounded-bl-2xl rounded-br-2xl">
        <div className="flex justify-between">
          <h4 className="font-mulish text-xs font-bold text-gray-800">
            Plumbing
          </h4>
          <BsBookmarkDash color="green" />
        </div>
        <h3 className="font-mulish font-bold text-xs my-2">
          Complete Residential Plumbing
        </h3>
        <div className="font-mulish font-bold flex justify-evenly items-center text-[10px] my-2 ">
          <span>200 - 500</span>
          <RxDividerVertical size={20} />
          <span className="flex flex-nowrap gap-1">
            {" "}
            <IoMdStar size={12} color="yellow" />
            4.2
          </span>
          <RxDividerVertical size={20} />
          <span>7850 Reviews</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
