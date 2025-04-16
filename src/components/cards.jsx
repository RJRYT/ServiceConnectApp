import React from 'react';
import cake from "../assets/cake.jpg";
import { IoMdStar } from "react-icons/io";
import bookmark from "../assets/bookmark.png"


function Card({name,price,km,reviews,star}) {
  return (
    <div className="w-full sm:max-w-md sm:w-[48%] h-[18dvh] sm:max-h-sm sm:h-[22dvh] bg-white rounded-2xl shadow-md flex overflow-hidden">
    <img src={cake} className="w-1/3 bg-black rounded-l-2xl" alt="cake" />
    <div className="ml-[3px] sm:ml-0 w-full h-[20%] sm:h-[160px] p-1 sm:p-4 relative flex flex-col justify-between text-xs gap-0">
    <div className="flex justify-between items-start ">
        <p className="mt-2 lg:mt-0 text-[#ff6b00] text-[12px] sm:text-[14px] lg:text-[14px] font-medium">
          {km}
        </p>
        <div className="mt-[5px] sm:mt-5 lg:mt-0 mr-[6px] sm:mr-6 lg:mr-0 h-full flex flex-col sm:flex-row items-center justify-center sm:items-center sm:justify-start gap-1 sm:gap-2 text-center">
        <img src={bookmark} className="h-3 sm:h-4" />
          <span className="text-[10px] sm:text-xs text-gray-700">Booked Ones</span>
        </div>
      </div>
      <div className=" w-[60%] flex flex-col">
        <h2 className=" text-[#ff6b00] text-[14px] sm:text-[14px] lg:text-[20px] sm:text-md font-bold text-gray-900">{name}</h2>
        <p className="text-lg sm:text-lg font-bold text-gray-900">{price}</p>
      </div>
      <div className="mb-4 sm:mt-1 w-[60%] gap-2 flex items-center text-xs sm:text-sm text-gray-700">
        <div className='flex  h-full'>
          <p className='text-[18px] text-[#fac025]'><IoMdStar /></p>
        <span className=" text-[#1d1f2a] font-semibold">{star}</span>
        </div>
        <span className="text-[#1d1f2a] mx-1 sm:mx-2">|</span>
        <span className="text-[#1d1f2a] font-medium">{reviews}</span>
      </div>
    </div>
  </div>
  
  );
}

export default Card;
