import React from 'react'
import { IoIosStar } from "react-icons/io";
import completedicom from '../assets/completedIcon.png'
import img from '../assets/servicesimage.jpg'

function CompletedList({Deaprtment,Details,Rating}) {
  return (
    <div className='relative mx-5 mb-6'>
      <img 
        src={completedicom} 
        alt="Completed Icon" 
        className="absolute -top-3 right-6 w-7 h-7 z-10" 
      />

      <div className='flex rounded-2xl shadow-2xl bg-white'>
        <div className='bg-black w-24 rounded-l-2xl'>
        <img src={img} className='rounded-l-2xl' alt="" />
        </div>

        <div className='pb-10 pt-3 pl-3 lg:pt-5 pr-10'>
          <p className='text-orange-500 text-sm font-semibold'>{Deaprtment}</p>
          <h1 className='font-semibold'>{Details}</h1>
          <div className='flex items-center gap-1 mt-1'>
            <IoIosStar className='text-yellow-400' />
            <p className='font-semibold text-sm'>{Rating}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompletedList
