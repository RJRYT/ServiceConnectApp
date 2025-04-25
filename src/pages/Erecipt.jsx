import React, { useState } from 'react'
import houseimage from '../assets/EreciptImage.png'
import barcode from '../assets/BAR CODE.png'
import Header from '../components/header'
import { FaCopy } from "react-icons/fa"
import { LuSend } from "react-icons/lu"
import { FiDownload, FiPrinter } from "react-icons/fi"

function Erecipt() {
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(prev => !prev)
  }

  return (
    <div>
      <Header title={"E-Recipt"} sideactivity={true} onDotsClick={togglePopup} />

      {showPopup && (
        <div className='absolute right-5 mt-2 w-40 bg-white shadow-md rounded-lg p-2 mr-3 lg:mr-8 space-y-2 z-50'>
          <div className='flex items-center justify-end pr-5'>
            <p className='text-black hover:bg-gray-200 px-2 py-1 rounded cursor-pointer'>Share</p>
            <LuSend className='text-xl' />
          </div>
          <div className='flex items-center justify-end pr-5'>
            <p className='text-black hover:bg-gray-200 px-2 py-1 rounded cursor-pointer'>Download</p>
            <FiDownload className='text-xl' />
          </div>
          <div className='flex items-center justify-end pr-5'>
            <p className='text-black hover:bg-gray-200 px-2 py-1 rounded cursor-pointer'>Print</p>
            <FiPrinter className='text-xl' />
          </div>
        </div>
      )}

      <div className='flex justify-center my-5'>
        <div className='space-y-5'>
          <div className='flex justify-center'>
            <img src={houseimage} alt="" />
          </div>
          <div>
            <img src={barcode} alt="" />
          </div>
        </div>
      </div>

      <div className=' flex justify-between lg:justify-center lg:gap-15 mx-8 mb-8'>
        <div className='font-bold text-stone-900 space-y-2'>
          <p>Name</p>
          <p>Email-id</p>
          <p>Course</p>
          <p>Category</p>
        </div>
        <div className='text-stone-700 space-y-2 text-right font-semibold'>
          <p>Scott R. Shoemake</p>
          <p>shoemake.redial@gmai</p>
          <p>3d Character Illustr</p>
          <p>Web Development</p>
        </div>
      </div>

      <div className=' flex justify-between lg:justify-center lg:gap-12 mx-8'>
        <div className='font-bold text-stone-900 space-y-2'>
          <p>TransactionID</p>
          <p>Price</p>
          <p>Date</p>
          <p>Status</p>
        </div>
        <div className='text-stone-700 space-y-2 text-right font-semibold'>
          <div className='flex gap-2 justify-end'>
            <p>SK345680976</p>
            <FaCopy className='text-lg' />
          </div>
          <p>$55.00</p>
          <p>Nov 20, 202X / 15:45</p>
          <button className='bg-green-800 text-white px-5 py-1'>Paid</button>
        </div>
      </div>
    </div>
  )
}

export default Erecipt
