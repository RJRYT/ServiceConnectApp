import React from 'react'
import topimg from "../assets/ICON (2).png";
import Input from '../components/Input';
import Submitbutton from '../components/submitbutton';
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { MdLockOutline } from "react-icons/md";


function Register() {
  return (
    <div className='h-screen w-full  bg-gray-300 px-5'>
      <div className='flex justify-center pt-15'>
        <img src={topimg} className='w-23' alt="" />
        <h1 className='pt-5 text-2xl font-semibold ml-2'>Service Connect</h1>
      </div>
      <h1 className='font-semibold text-xl my-3 lg:my-1 lg:text-2xl lg:text-center lg:mr-40'>Getting Started...!</h1>
      <div className='py-1 flex flex-col justify-center items-center gap-2'>
            <Input  icon={<TfiEmail className="absolute left-4 top-5" size={25} color="white"/>} className='' type="text" placeholder="Email" />
           <Input  icon={<MdLockOutline className="absolute left-4 top-5" size={25} color="white"/>} className='' type="password" placeholder="Password" />
           <Input  icon={<MdLockOutline className="absolute left-4 top-5" size={25} color="white"/>} className='' type="password" placeholder="Confirm Password" />
      </div>
      <div className='flex mt-2 mb-2 lg:justify-center lg:mr-35'>
          <input type="radio"  />
          <p>Agree to Terms & Conditions</p>
      </div>
      <div className='flex justify-center'>
        <Submitbutton title="SIGN UP"/>
        </div>
        <p className='text-center mt-4 mb-4 lg:mt-7 font-semibold'>Or Continue with</p>
        <div className="flex justify-center mt-1 cursor-pointer my-2 lg:my-5">
            <div className="bg-gray-400 w-12 h-12 flex justify-center items-center rounded-4xl text-2xl"> 
              <FcGoogle />
            </div>
          </div>
          <p className='text-center'>Aldready hava an Account <span><a href="" className='font-semibold underline'>LOG IN</a></span></p>
    </div>
  )
}

export default Register
