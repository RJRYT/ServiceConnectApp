import React from 'react'
import Header from '../components/header'
import ToggleSwitch from '../components/togglebutton'
import { IoIosArrowForward } from "react-icons/io";

function Security() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header title={"SECURITY"}/>
      <div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>Remember Me</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>Biometric ID</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>Face ID</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>Google Authenticator</p>
            <p className='text-3xl'><IoIosArrowForward /></p>
        </div>

        <div className='w-full h-[300px] md:h-[200px] flex flex-col md:flex-row items-center md:items-end justify-end md:justify-around gap-3'>
            <button className='font-semibold p-4 bg-white border-2 border-gray-200 shadow-md shadow-gray-400 w-[90%] mb-2 md:mb-0 md:w-[30%] rounded-4xl transform hover:scale-103 duration-300'>Change PIN</button>
            <button className='font-semibold p-4 bg-slate-900 text-white shadow-md shadow-gray-400 w-[90%] mb-3 md:mb-0 md:w-[30%] rounded-4xl transform hover:scale-103 duration-300'>Change Password</button>
        </div>  
        
      </div>
    </div>
  )
}

export default Security