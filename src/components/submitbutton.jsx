import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";


function Submitbutton({title}) {
  return (
    <div>
          <button className="bg-slate-900 text-white py-3 rounded-full mt-2 flex justify-center items-center w-full hover:bg-slate-700 transition relative">
            {title}
            <div className="absolute flex justify-center items-center right-2">
            <div className='border-2 border-white w-10 h-10 rounded-full flex justify-center items-center pr-1 bg-white'>
            <IoMdArrowRoundForward className='text-4xl text-black' />
            </div>
            </div>
          </button>
    </div>
  )
}

export default Submitbutton
