import React from 'react'
import { useState, useEffect } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";

const ReviewPhotoUpload = () => {
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    
    // Generate preview URLs when images change
    useEffect(() => {
        const newPreviews = files.map((file) => ({
            url: URL.createObjectURL(file),
            type: file.type.startsWith('image') ? 'image' : 'video',
        }));
        setPreviews(newPreviews);

        // Clean up previews on unmount
        return () => {
            newPreviews.forEach((preview) => URL.revokeObjectURL(preview.url));
        };
    }, [files]);

    const handleImageChange = (e) => {
        if (!e.target.files) return;
        const fileList = Array.from(e.target.files);
        setFiles((prev) => [...prev, ...fileList]);
    };
    return (
        <div>
            <h2 className="text-md font-bold text-[#202244] mt-2 mb-2">Add Photo (or) Video</h2>
            <div className="sm:w-[60vh] ">
                <label className="bg-white w-full flex flex-col justify-center items-center p-10 rounded-2xl shadow cursor-pointer text-center">
                    <FaCloudUploadAlt size={36} className="text-gray-800 mb-2" />

                    {/* Upload Images & Videos */}
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*,video/*"
                        multiple
                        onChange={handleImageChange}
                        className="hidden"
                    />
                    <div className="flex gap-2">
                      {previews.map((preview, index) => (
                        <div key={index} className=" rounded-lg shadow overflow-hidden mb-2">
                            {preview.type === 'image' ? (
                                <img src={preview.url} alt={`preview-${index}`} className=" w-16 h-25 object-cover" />
                            ) : (
                                <video controls className=" w-[150px] sm:h-25 sm:w-[200px] h-25 object-cover ">
                                    <source src={preview.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    ))}   
                    </div>
                   
                    <span className="text-gray-700 font-medium">Click here to Upload</span>
                    <input type="file" className="hidden" />
                </label>


            </div>

        </div>
    )
}

export default ReviewPhotoUpload;

