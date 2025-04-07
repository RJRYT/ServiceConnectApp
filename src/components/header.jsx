import React from 'react'
import { IoIosArrowBack } from "react-icons/io";



function Header({title}) {
  return (
    <div>
       <div className='w-full h-[80px] bg-slate-900 flex items-center gap-4 pl-2'>
            <div className='border-2 border-white w-13 h-13 rounded-full flex justify-center items-center pr-1'>
            <IoIosArrowBack className='text-white text-4xl' />
            </div>
            <h1 className='text-white text-xl font-bold'>{title}</h1>
        </div>
    </div>
  )
}

export default Header
