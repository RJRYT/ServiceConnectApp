import React from "react";
import { useState } from "react";
import Icon from "../assets/ICON (2).png";
import email from "../assets/ICON.png";
import password from "../assets/ICON (1).png";
import arrow from "../assets/arrow.png";
import Oval from "../assets/Oval (2).png"
import socialmedia from "../assets/Social Media.png"
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function Login(){
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return <div className="h-screen px-5 w-full bg-gray-300  flex justify-center items-center py-3">
                <div className="w-full  flex  flex-col justify-center items-center  bg-grey-800 ">
                            <div className="flex gap-2">
                                    <img className="w-15" src={Icon} alt="Login page Logo"/>
                                    <h5 className="text-2xl mt-1 mr-10 font-bold">Service Connect</h5>
                                </div>
                                        <div className="flex flex-col gap-4 relative">
                                            <h3 className="text-slate-800 text-2xl mt-7  font-semibold ">Let's Sign In.!</h3>
                                            <p className="text-sm ">Login to Your Account to Continue your Courses</p>
                                            <img className="w-5 absolute mt-33 ml-4" src={email}/>
                                            <input className="text-white placeholder-white h-14 w-90 bg-stone-500 rounded-lg px-12 py-2" type="text" placeholder="Email" />
                                            <img className=" w-4 absolute mt-50 ml-4" src={password}/>
                                            <input  className="text-white  placeholder-white  h-14 rounded-lg px-11 py-2 bg-stone-500" type={showPassword ? "text" : "password"}  placeholder="Password"/>
                                             <button  onClick={togglePasswordVisibility} className="w-4 absolute mt-51 ml-81 cursor-pointer text-white">{ showPassword ? <FaRegEyeSlash/> : <FaRegEye/> }</button>
                                                <div className="flex justify-between mt-3">
                                                        <input className="w-5" type="checkbox"/>
                                                        <p className="mr-32  text-sm">Remember Me</p>
                                                        <p className="text-sm">Forgot Password?</p>
                                                </div>
                                                    <button className="text-white bg-slate-900  p-4 rounded-full cursor-pointer mt-5 realtive">Sign In</button>
                                                        <img className=" w-12 absolute mx-76 mt-82" src={Oval} />
                                                        <img className=" w-5 absolute mx-80 mt-86" src={arrow}/>

                                                        <p className="text-md ml-32">Or Continue With</p>

                                                            <div className="mt-2 cursor-pointer">
                                                                <img className="ml-27 w-40" src={socialmedia}/>
                                                            </div>
                                                        <p className="ml-20 mt-7">Don’t have an Account? <a className="underline font-bold" href="">SIGN UP</a></p>
                                                   
                                                
                                        </div>
                        </div>
             
    </div>
}

export default Login;