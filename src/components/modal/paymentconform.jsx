import React from 'react'
import payment from "../../assets/payment.png"
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoIosClose } from "react-icons/io";




function Paymentconformation() {
  return (
    <div className="flex items-center flex-col justify-center  h-screen bg-[#1D1F2A]">  
        <div className="h-[100dvh] w-100 flex flex-col bg-[#1D1F2A] items-center justify-center ">
            <div className="min-h-[60%] w-[80%] bg-[#f5f8ff] rounded-4xl p-2 pb-5">
            <p className='absolute right-[58px] top-[160px] text-[32px] z-10 lg:left-[788px] lg:top-[140px] lg:right-auto'>
              <IoIosClose />
            </p>
                <div className=' mt-1 relative min-h-[50%] w-[100%] flex justify-center items-center '>
                    <img 
                    src={payment}
                    className='w-[90%] h-[100%] object-cover'
                    alt="" 
                    />
                </div>
                <div className='h-[40%] w=[100%]  rounded-4xl'>
                    <p className='w-[100%] h-[20%] flex justify-center items-center text-xl font-bold text-black'>
                        Congratulations
                    </p>
                    <p className=' h-[40%] w-[90%] ml-4  flex text-[13px] text-center items-center font-semibold text-[#545454]'>
                    Your Payment is Successfully. Purchase a New Course
                    </p>
                    <a className='w-full flex justify-center font-bold underline text-[#167f71] transform hover:scale-105 duration-300' href="#"> Watch the Course</a>
                    <div className='w-full flex justify-center'>
                          <button className="bg-slate-900 text-white py-3 rounded-full mt-2 flex justify-center items-center w-[230px]
                                             hover:bg-blue-950 transition-all duration-300 ease-in-out 
                                             relative max-w-[360px] min-w-[30px] shadow-lg hover:shadow-xl 
                                             transform hover:scale-105 active:scale-95">
                            E-Receipt
                            <div className="absolute flex justify-center items-center right-2">
                              <div className='border-2 border-white w-10 h-10 rounded-full flex justify-center items-center pr-1 
                                              bg-white transform transition-transform duration-300 ease-in-out 
                                              hover:translate-x-1'>
                                <IoMdArrowRoundForward className='text-4xl text-black' />
                              </div>
                            </div>
                          </button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Paymentconformation;