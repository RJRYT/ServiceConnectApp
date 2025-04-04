import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import email from "../assets/ICON.png";
import phoneIcon from "../assets/phoneIcon.png"
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6"
import password from "../assets/ICON (1).png";
import Header from './header';
import Submitbutton from './submitbutton';



function Newpassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className='w-full h-screen'>
      <Header title="RESET PASSWORD"/>
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
            <Submitbutton title="Continue"/>
        </div>
      
    </div>
  )
}

export default Newpassword
