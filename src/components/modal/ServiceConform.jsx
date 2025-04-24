import React, { useState } from 'react'
import coursecompleted from "../../assets/coursecompleted.png"
import goldstar from "../../assets/goldstar.png"
import slatestar from "../../assets/slatestar.png"
import { IoMdArrowRoundForward } from "react-icons/io";

const ServiceConform = ({ rating = 4 }) => {

  return (
    <div className="flex items-center flex-col justify-center  h-screen bg-[#1D1F2A]">
      <div className="h-[100dvh] w-100 flex flex-col bg-[#1D1F2A] items-center justify-center ">
        <div className="min-h-[60%] w-[80%] bg-[#f5f8ff] rounded-4xl p-2 ">
          <div className=' relative min-h-[40%] w-[100%] flex justify-center items-center mt-3'>
            <img
              src={coursecompleted}
              className='w-[90%] h-[100%] '
              alt="course"
            />
          </div>
          <div className='h-[40%] w=[100%]  rounded-4xl '>
            <p className='w-[100%] h-[20%] flex justify-center items-center text-xl font-bold text-[#202244] tracking-wide'>
              Services Completed
            </p>
            <p className=' h-[40%] w-[80%] ml-8  flex text-[13px] text-center items-center font-semibold text-[#545454]'>
              Complete your Course. Please Write a Review </p>
            <div className="flex gap-2 pl-20">
              {[...Array(5)].map((_, index) => (
                <img
                  src={index < rating ? goldstar : slatestar}
                  key={index}
                  className='mt-2'
                  alt="service rating star"

                />
              ))}

            </div>
            <div className='w-full flex justify-center '>
              <button className="bg-slate-900 text-white  py-3 pr-3 rounded-full mt-5 flex justify-center items-center w-[230px]
                                                 hover:bg-blue-950 transition-all duration-300 ease-in-out 
                                                 relative max-w-[360px] min-w-[30px] shadow-lg hover:shadow-xl 
                                                 transform hover:scale-105 active:scale-95">
                Write a Review
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

export default ServiceConform
