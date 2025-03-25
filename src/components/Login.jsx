import React from "react";
import { useState } from "react";
import Icon from "../assets/ICON (2).png";
import email from "../assets/ICON.png";
import password from "../assets/ICON (1).png";
import stroke from "../assets/Stroke 3.png";
import arrow from "../assets/arrow.png";
import oval from "../assets/oval.png";
import socialmedia from "../assets/Social Media.png"

function Login(){
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return <div className="h-[140dvh] w-full bg-gray-300 ">
                <div className="h-200 w-1/1 flex flex-col justify-center items-center bg-grey-800 text-base/10  ">
                            <div className="flex gap-2">
                                    <img className="w-15" src={Icon} alt="Login page Logo"/>
                                    <h5 className="text-2xl mt-1 mr-10 font-semibold">Service Connect</h5>
                                </div>
                                        <div className="flex flex-col gap-4 relative">
                                            <h3 className="text-slate-800 text-2xl mt-10  font-semibold ">Let's Sign In.!</h3>
                                            <p className="text-sm">Login to Your Account to Continue your Courses</p>
                                            <img className="w-5 absolute mt-36 ml-4" src={email}/>
                                            <input className="text-white w-90 bg-stone-500 rounded-lg px-11 py-2" type="text" placeholder="Email" />
                                            <img className=" w-4 absolute mt-53 ml-5" src={password}/>
                                            <img className="w-4 absolute mt-54 ml-81 cursor-pointer" src={showPassword ? stroke : stroke} onClick={togglePasswordVisibility}/>
                                            <input  className="text-white rounded-lg px-11 py-2 bg-stone-500" type={showPassword ? "text" : "password"}  placeholder="Password"/>
                                                <div className="flex justify-between mt-3">
                                                        <input className="w-4" type="checkbox"/>
                                                        <p className="mr-33  text-sm">Remember Me</p>
                                                        <p className="text-sm">Forgot Password?</p>
                                                </div>
                                                    <button className="text-white bg-slate-900  p-3 rounded-full cursor-pointer mt-10 realtive">Sign in</button>
                                                        <img className=" w-13 absolute mx-75 mt-90 " src={oval}/>
                                                        <img className=" w-6 absolute mx-79 mt-94" src={arrow}/>

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