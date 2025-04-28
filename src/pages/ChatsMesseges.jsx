import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiPhone, FiPaperclip, FiMic, FiSend } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import img from '../assets/servicesimage.jpg';

function ChatsMessages() {
  const [message, setMessage] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="flex justify-between items-center bg-gray-100 sticky top-0 z-10 p-3">
        <div className="flex items-center">
          <IoIosArrowRoundBack className="text-6xl" />
          <h1 className="text-lg font-semibold ml-2">Virginia M. Patterson</h1>
        </div>
        <div className="flex items-center gap-3 pr-4">
          <FiPhone className="text-2xl" />
          <BiSearchAlt className="text-2xl" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="flex justify-center mt-5">
          <div className="px-6 py-1 rounded-lg bg-[#E8F1FF]" style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)' }}>
            <p className="font-semibold">Today</p>
          </div>
        </div>

        <div className="bg-[#736A68] px-5 py-2 rounded-r-xl shadow-xl shadow-gray-400 text-white min-w-[100px] max-w-[250px] lg:max-w-[400px] ml-3 mt-6">
          <p className="pr-9 font-semibold">Hi, Nicholeas Good evening</p>
          <div className="flex justify-end">
            <p className="text-xs font-bold">10:45</p>
          </div>
        </div>

        <div className="bg-[#736A68] px-5 py-2 rounded-r-xl shadow-xl shadow-gray-400 text-white min-w-[100px] max-w-[250px] lg:max-w-[400px] ml-3 mt-3">
          <p className="pr-9 font-semibold">How was your UI/UX course like..?</p>
          <div className="flex justify-end">
            <p className="text-xs font-bold">10:45</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#E8F1FF] px-5 py-2 rounded-l-xl shadow-xl shadow-gray-400 min-w-[100px] max-w-[250px] lg:max-w-[400px] mr-3 mt-3">
            <p className="pr-9 font-semibold">Hi Morning too Ronald</p>
            <div className="flex justify-end">
              <p className="text-xs font-bold">10:45</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-5 justify-end mr-3 mt-3">
            <div className="w-20 h-20 overflow-hidden rounded-2xl">
              <img src={img} className="w-full h-full object-cover" alt="attachment" />
            </div>
            <div className="w-20 h-20 overflow-hidden rounded-2xl">
              <img src={img} className="w-full h-full object-cover" alt="attachment" />
            </div>
          </div>
          <p className="text-end text-xs font-bold mr-4">14:30</p>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#E8F1FF] px-5 py-2 rounded-l-xl shadow-xl shadow-gray-400 min-w-[100px] max-w-[250px] lg:max-w-[400px] mr-3 mt-3">
            <p className="pr-9 font-semibold">Hello, I also just finished Sketch basic</p>
            <div className="flex justify-end">
              <p className="text-xs font-bold">10:45</p>
            </div>
          </div>
        </div>

        <div className="bg-[#736A68] px-5 py-2 rounded-r-xl shadow-xl shadow-gray-400 text-white min-w-[100px] max-w-[250px] lg:max-w-[400px] ml-3 mt-6">
          <p className="pr-9 font-semibold">OMG, This is amazing</p>
          <div className="flex justify-end">
            <p className="text-xs font-bold">10:45</p>
          </div>
        </div>
        <div className="bg-[#736A68] px-5 py-2 rounded-r-xl shadow-xl shadow-gray-400 text-white min-w-[100px] max-w-[250px] lg:max-w-[400px] ml-3 mt-6">
          <p className="pr-9 font-semibold">OMG, This is amazing</p>
          <div className="flex justify-end">
            <p className="text-xs font-bold">10:45</p>
          </div>
        </div>
        <div className="bg-[#736A68] px-5 py-2 rounded-r-xl shadow-xl shadow-gray-400 text-white min-w-[100px] max-w-[250px] lg:max-w-[400px] ml-3 mt-6">
          <p className="pr-9 font-semibold">OMG, This is amazing</p>
          <div className="flex justify-end">
            <p className="text-xs font-bold">10:45</p>
          </div>
        </div>
        <div className="bg-[#736A68] px-5 py-2 rounded-r-xl shadow-xl shadow-gray-400 text-white min-w-[100px] max-w-[250px] lg:max-w-[400px] ml-3 mt-6">
          <p className="pr-9 font-semibold">OMG, This is amazing</p>
          <div className="flex justify-end">
            <p className="text-xs font-bold">10:45</p>
          </div>
        </div>
      </div>

      {/* Message Input Box */}
      <div className="sticky bottom-0 bg-gray-100 p-3">
        <div className="flex items-center bg-[#F4F8FF] rounded-full px-4  py-2 shadow-md transition-all duration-300">
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />

          {message.trim() === '' ? (
            <div className="flex items-center gap-3">
              <FiPaperclip className="text-xl text-gray-600 cursor-pointer" />
              <div className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full cursor-pointer">
                <FiMic className="text-white text-lg" />
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full cursor-pointer">
              <FiSend className="text-white text-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatsMessages;
