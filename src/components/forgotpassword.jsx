import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import email from "../assets/ICON.png";
import phoneIcon from "../assets/phoneIcon.png"
import arrow from "../assets/arrow.png";
import round from "../assets/oval.png";
import { IoMdArrowRoundForward } from "react-icons/io";


function Forgotpassword() {
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-[100px] bg-slate-900 flex items-center gap-4 pl-2'>
            <div className='border-2 border-white w-13 h-13 rounded-full flex justify-center items-center pr-1'>
            <IoIosArrowBack className='text-white text-4xl' />
            </div>
            <h1 className='text-white text-2xl font-bold'>FORGOT PASSWORD</h1>
        </div>
        <div className='px-7 pt-40 lg:pt-20 lg:px-[550px]'>
            <p className='text-center  mb-9 mt-12'>Enter your regitered email or phone nunmber to recieve a OTP to reset your password</p>
            <div className="relative shadow-sm mb-5">
            <img className="w-5 absolute left-4 top-1/2 -translate-y-1/2" src={email} alt="email icon" />
            <input
              className="w-full bg-stone-500 text-white rounded-lg px-12 py-3 placeholder-white focus:outline-none"
              type="text"
              placeholder="Email"
              onChange={""} name="" id=""
            />
          </div>
          <div className="relative shadow-sm mb-5 lg:mb-15">
            <img className="w-5 absolute left-4 top-1/2 -translate-y-1/2" src={phoneIcon} alt="email icon" />
            <input
              className="w-full bg-stone-500 text-white rounded-lg px-12 py-3 placeholder-white focus:outline-none"
              type="text"
              placeholder="Phone Number"
              onChange={""} name="" id=""
            />
          </div>
          <button className="bg-slate-900 text-white py-3 rounded-full mt-2 flex justify-center items-center w-full hover:bg-slate-700 transition relative">
            Continue
            <div className="absolute flex justify-center items-center right-2">
            <div className='border-2 border-white w-10 h-10 rounded-full flex justify-center items-center pr-1 bg-white'>
            <IoMdArrowRoundForward className='text-4xl text-black' />
            </div>
            </div>
          </button>
        </div>
      
    </div>
  )
}

export default Forgotpassword
