import React from 'react'
import videos from "../assets/providerprofile/videos.png"
import time from "../assets/providerprofile/time.png"
import star1 from "../assets/providerprofile/star1.png"

const ProviderHeader = () => {
  return (
    <div className='md:max-w-3x1 bg-white p-4 rounded-xl shadow-3xl'>

      <div class="flex justify-between items-center space-x-2  ">
        <span className="text-xs text-[#FF6B00] font-mulish"> 3 km away</span>
        <div className="flex  justify-center items-center gap-1">
          <img className='w-4' src={star1} /><p className='font-Mulish font-semibold' >4.2 | 32 Reviews</p>
        </div>

      </div>

      <p className="text-[#202244] font-bold mt-1">William S. Cunningham</p>
      <div className="text-sm text-[#545454] font-mulish font-semibold">Plumber</div>
      <div className="flex items-center text-xs font-bold text-[#202244] mt-3 gap-2">
        <img className='w-5 h-4' src={videos} />21 videos & images   | <img className='w-4 h-4' src={time} /> 2 services listed
      </div>



    </div>


  )
}

export default ProviderHeader;
