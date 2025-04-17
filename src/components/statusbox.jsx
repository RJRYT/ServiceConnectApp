import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiAlertOctagon } from "react-icons/fi";
import Submitbutton from './submitbutton';
import { IoMdArrowRoundForward } from "react-icons/io";



function Statusbox({title}) {
  return (
    <div>
       <div className="flex px-5 my-2 rounded-2xl items-stretch">
          <div className="bg-green-800 px-2 rounded-l-3xl flex items-stretch">
            <div className="w-2"></div>
          </div>
          <div className="py-4 px-4 rounded-r-3xl bg-white flex-1">
            <div className="flex justify-between w-full items-center">
              <div className="flex gap-5 items-end">
                <h1 className="text-xl font-bold text-blue-950">Tap Repair</h1>
                <p className="underline">view</p>
              </div>
              <div className="">
                <IoMdClose className="text-2xl" />
              </div>
            </div>
            <div className="flex items-center gap-2 my-1">
              <FaRegUserCircle className="text-2xl" />
              <h1 className="text-stone-500 text-lg">Keshavan</h1>
            </div>
            <h1 className="text-stone-500 text-xl">Booked</h1>
            <div className="flex justify-between items-center my-2 gap-1 lg:gap-5">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt className="text-xl text-red-500" />
                <p className="text-sm">March 20 2021</p>
              </div>
              <div className="flex items-center gap-1">
                <FaRegClock className="text-xl text-amber-300" />
                <p className="text-sm">9:00 AM - 10:00 AM</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Amount: 300/-</p>
              <div className="flex items-center">
                <FiAlertOctagon className="text-red-500" />
                <p className="text-sm">Additional Requirments</p>
              </div>
            </div>
            <button className="bg-green-800 text-white py-2 rounded-full mt-2 flex justify-center items-center
                         hover:bg-blue-950 transition-all duration-300 ease-in-out 
                         relative max-w-[300px] min-w-[300px] shadow-lg hover:shadow-xl 
                         transform hover:scale-105 active:scale-95">
        {title}
        <div className="absolute flex justify-center items-center right-2">
          <div className='border-2 border-white w-7 h-7 rounded-full flex justify-center items-center pr-1 
                          bg-white transform transition-transform duration-300 ease-in-out 
                          hover:translate-x-1'>
            <IoMdArrowRoundForward className='text-xl text-black' />
          </div>
        </div>
      </button>          </div>
        </div>
    </div>
  )
}

export default Statusbox
