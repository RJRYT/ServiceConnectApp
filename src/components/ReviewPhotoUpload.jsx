import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";

const ReviewPhotoUpload = () => {

    return (
        <div>
            <h2 className="text-md font-bold text-[#202244] mt-2 mb-2">Add Photo (or) Video</h2>
            <div className="sm:w-[60vh] ">
                <label className="bg-white w-full flex flex-col justify-center items-center p-10 rounded-2xl shadow cursor-pointer text-center">
                    <FaCloudUploadAlt size={36} className="text-gray-800 mb-2" />
                    <span className="text-gray-700 font-medium">Click here to Upload</span>
                    <input type="file" className="hidden" />
                </label>

            </div>

        </div>
    )
}

export default ReviewPhotoUpload
