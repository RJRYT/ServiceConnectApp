import React from "react";
import Mainheader from "../components/mainheader";
import provider from "../assets/booking-details/provider.png";
import BookingProfile from "../components/BookingProfile";
import BookingImagesUpload from "../components/BookingImagesUpload";
import Availability from "../components/Availability";

function Requestservice() {
  return (
    <>
    <Mainheader title="REQUEST SERVICE" />
      {/* main div */}
      <div className="p-3 min-h-screen bg-[#D9D9DB] ">
        <div className="flex flex-col items-center">
          <BookingProfile
            name="Nazrul Islam"
            service="Electrification"
            image={provider}
          />
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
  <div className="relative shadow-lg shadow-gray-700 bg-white rounded-xl pb-2 h-18 w-full md:w-[48%]">
    <p className="absolute text-gray-400 top-1 left-6">Title</p>
    <input
      className="px-6 pt-8 pb-2 w-full h-full rounded-xl placeholder-gray-400 placeholder-opacity-80 text-xl border-none focus:outline-none"
      type="text"  
      placeholder="Change bulb"
    />

  </div>

  <div className="relative shadow-lg shadow-gray-700 bg-white rounded-xl min-h-45 w-full md:w-[48%]">
    <p className="absolute top-1 left-6 text-sm text-gray-400">Description</p>
    <textarea
      className="px-6 pt-6 pb-2 w-full h-full rounded-xl border border-gray-300 placeholder-gray-400 text-xl min-h-[110px] border-none focus:outline-none"
      placeholder="Add a description..."
    ></textarea>
  </div>
</div> 

{/* image upload */}
    <div className="w-[98%] ml-0 md:ml-4">
    <BookingImagesUpload />
    </div>

{/* Availability */}
    <div className="w-[98%]">
    <Availability />
    </div>
          
    </div>
        
 </div>

    </>
  )
}

export default Requestservice;