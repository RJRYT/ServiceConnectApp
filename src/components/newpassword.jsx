import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import email from "../assets/ICON.png";
import phoneIcon from "../assets/phoneIcon.png"
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6"
import password from "../assets/ICON (1).png";



function Newpassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-[100px] bg-slate-900 flex items-center gap-4 pl-2'>
            <div className='border-2 border-white w-13 h-13 rounded-full flex justify-center items-center pr-1'>
            <IoIosArrowBack className='text-white text-4xl' />
            </div>
            <h1 className='text-white text-2xl font-bold'>FORGOT PASSWORD</h1>
        </div>
        <div className='px-7 pt-40 lg:pt-20 lg:px-[550px]'>
            <h1 className='font-bold text-slate-900 text-2xl mb-3'>Create Your New Password</h1>
            <div className="relative mb-5">
            <img className="w-4 absolute left-4 top-1/2 -translate-y-1/2" src={password} alt="password icon" />
            <input
              className="w-full bg-stone-600 text-white rounded-lg px-12 py-3 placeholder-white focus:outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              onChange={""} name="" id=""
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <div className="relative mb-12">
            <img className="w-4 absolute left-4 top-1/2 -translate-y-1/2" src={password} alt="password icon" />
            <input
              className="w-full bg-stone-600 text-white rounded-lg px-12 py-3 placeholder-white focus:outline-none"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={""} name="" id=""
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            >
              {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
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

export default Newpassword
