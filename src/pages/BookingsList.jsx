import React from "react";
import Footermenu from "../components/footermenu";
import { IoMdClose } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Mainheader from "../components/mainheader";
import { FiAlertOctagon } from "react-icons/fi";

function Bookings() {
  return (
    <div className="bg-gray-300 h-screen">
      <Mainheader title="BOOKINGS" />
      <div className="lg:flex flex-wrap">
        <div className="flex px-5 my-2 rounded-2xl items-stretch">
          <div className="bg-black px-2 rounded-l-3xl flex items-stretch">
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
            <div className="bg-black text-center rounded-2xl text-white py-1 mt-8">
              <p className="font-bold">Waiting for response</p>
            </div>
          </div>
        </div>

        <div className="flex px-5 my-2 rounded-2xl items-stretch">
          <div className="bg-green-500 px-2 rounded-l-3xl flex items-stretch">
            <div className="w-2"></div>
          </div>
          <div className="py-4 px-4 rounded-r-3xl bg-white flex-1">
            <div className="bg-black w-10"></div>
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
            <h1 className="text-stone-500 text-xl">Scheduled</h1>
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
            <div className="bg-green-600 text-center rounded-2xl text-white py-1">
              <p className="font-bold">Accept and Pay Advance</p>
            </div>
          </div>
        </div>
      </div>
      <Footermenu />
    </div>
  );
}

export default Bookings;
