import React from 'react'
import BookingImagesUpload from "../components/BookingImagesUpload";


function ServiceDeatails() {
    return (
        <div className="w-full flex flex-col mt-2 justify-center md:flex-row gap-3">

            <div className="flex flex-col gap-4 w-full md:w-[48%] justify-center">
                <div className="relative shadow-lg shadow-gray-700 bg-white rounded-xl pb-2 h-18 w-full">
                    <p className="absolute text-gray-400 top-1 left-6">Title</p>
                    <input
                        className="px-8 pt-8 pb-3 w-full h-full rounded-xl placeholder-gray-400 placeholder-opacity-80 text-xl border-none focus:outline-none"
                        type="text"
                        placeholder="Change bulb"
                    />

                </div>

                <div className="relative shadow-lg shadow-gray-700 bg-white rounded-xl min-h-35 w-full">
                    <p className="absolute top-1 left-6 text-sm text-gray-400">Description</p>
                    <textarea
                        className="px-6 pt-6 pb-2 w-full h-full rounded-xl border border-gray-300 placeholder-gray-400 text-xl min-h-[130px] border-none focus:outline-none"
                        placeholder="Add a description..."
                    ></textarea>
                </div>
            </div>

            {/* image upload */}
            <div className="w-full md:w-[48%] mt-1 md:mt-0 ">
                <BookingImagesUpload />
            </div>
        </div>
    )
}

export default ServiceDeatails