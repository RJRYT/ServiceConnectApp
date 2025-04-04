import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import email from "../assets/ICON.png";
import phoneIcon from "../assets/phoneIcon.png"
import arrow from "../assets/arrow.png";
import round from "../assets/oval.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import Header from './header';
import Submitbutton from './submitbutton';


function Forgotpassword() {
  return (
    <div className='w-full h-screen'>
      <Header title="FORGOT PASSWORD"/>
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
          <Submitbutton title="Continue"/>
        </div>
      
    </div>
  )
}

export default Forgotpassword
