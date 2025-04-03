import React, { useState } from "react";
import topimg from "../assets/ICON (2).png";
import email from "../assets/ICON.png";
import password from "../assets/ICON (1).png";
import arrow from "../assets/arrow.png";
import Oval from "../assets/Oval (2).png"
import socialmedia from "../assets/Social Media.png"
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen  w-full bg-gray-300 flex justify-center items-center py-3">
      <div className="w-full max-w-md bg-gray-300 p-8  rounded-xl flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <img className="w-16" src={topimg} alt="Login Logo" />
          <h5 className="text-2xl font-bold mb-5">Service Connect</h5>
        </div>
        <h3 className="text-2xl mb-6 font-bold flex mr-22 lg:mr-47">Getting Started..!</h3>
        
        <div className="w-full flex flex-col gap-5 relative">
          <div className="relative shadow-sm">
            <img
              className="w-5 absolute left-4 top-1/2 -translate-y-1/2"
              src={email}
              alt="email icon"
            />
            <input
              className="w-full h-14 bg-stone-500 text-white rounded-lg px-12 py-3 placeholder-white focus:outline-none"
              type="text"
              placeholder="Email"
              onChange={""}
              name=""
              id=""
            />
          </div>
          <div className="relative">
            <img
              className="w-4 absolute left-4 top-1/2 -translate-y-1/2"
              src={password}
              alt="password icon"
            />
            <input
              className="w-full h-14 bg-stone-500 text-white rounded-lg px-12 py-3 placeholder-white focus:outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={""}
              name=""
              id=""
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <div className="relative">
            <img
              className="w-4 absolute left-4 top-1/2 -translate-y-1/2"
              src={password}
              alt="password icon"
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
            <div className="bg-gray-400 w-12 h-12 flex justify-center items-center rounded-4xl text-2xl"> 
              <FcGoogle />
            </div>
          </div>
          <p className="text-center">
            Don’t have an Account? <a className="underline font-bold hover:text-gray-400" href="#">SIGN UP</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
