import React from "react";
import topimg from "../assets/ICON (2).png";
import Input from "../components/Input";
import Submitbutton from "../components/submitbutton";
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { MdLockOutline } from "react-icons/md";

function Register() {
  return (
    <div className="min-h-screen w-full  bg-gray-300 px-5">
      <div className="flex justify-center pt-15">
        <img src={topimg} className="w-23" alt="" />
        <h1 className="pt-5 text-2xl font-semibold ml-2">Service Connect</h1>
      </div>

      <div className="py-1 flex flex-col justify-center items-center gap-2">
        <div>
          <h1 className="font-semibold text-xl my-3 lg:my-1 lg:text-2xl mr-42 sm:mr-48 lg:mr-42">
            Getting Started...!
          </h1>
        </div>
<<<<<<<<< Temporary merge branch 1
        <h3 className="text-slate-800 text-2xl mb-6 font-semibold flex mr-22 lg:mr-47">Getting Started..!</h3>
        
=========
        <h3 className="text-2xl mb-6 font-bold flex mr-22 lg:mr-47">
          Getting Started..!
        </h3>

>>>>>>>>> Temporary merge branch 2
        <div className="w-full flex flex-col gap-5 relative">
          <div className="relative shadow-sm">
            <img
              className="w-5 absolute left-4 top-1/2 -translate-y-1/2"
              src={email}
              alt="email icon"
            />
          }
          className="min-w-[360px]"
          type="text"
          placeholder="Email"
        />
        <Input
          icon={
            <MdLockOutline
              className="absolute left-4 top-5 z-10"
              size={25}
              color="white"
            />
          }
          className="min-w-[360px]"
          type="password"
          placeholder="Password"
        />
        <Input
          icon={
            <MdLockOutline
              className="absolute left-4 top-5 z-10"
              size={25}
              color="white"
            />
            <input
              className="w-full h-14 bg-stone-500 text-white rounded-lg px-12 py-3 placeholder-white focus:outline-none"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={""}
              name=""
              id=""
              onFocus={() => setShowPassword(false)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            >
              {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <div className="flex justify-between text-sm mt-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" className="w-4 h-4" /> Agree to Terms &
              Conditions
            </label>
          </div>
          <button className="bg-slate-900 text-white py-3 rounded-full h-14  flex justify-center items-center w-full hover:bg-slate-700 transition relative">
            Sign in
            <div className="absolute flex justify-center items-center right-2">
              <img className="w-12" src={Oval} alt="oval decoration" />
              <img className="w-5 absolute" src={arrow} alt="arrow icon" />
            </div>
          </button>
          <p className="text-center mt-1">Or Continue With</p>
          <div className="flex justify-center mt-1 cursor-pointer">
<<<<<<<<< Temporary merge branch 1
            <div className="mr-26 cursor-pointer"> 
               <img className="ml-27 w-40" src={socialmedia}/>
            </div>
          </div>
          <p className="text-center">
            Don’t have an Account? <a className="underline font-bold hover:text-gray-400" href="#">SIGN IN</a>
=========
            <div className="bg-gray-400 w-12 h-12 flex justify-center items-center rounded-4xl text-2xl">
              <FcGoogle />
            </div>
          </div>
          <p className="text-center">
            Don’t have an Account?{" "}
            <a className="underline font-bold hover:text-gray-400" href="#">
              SIGN UP
            </a>
>>>>>>>>> Temporary merge branch 2
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
