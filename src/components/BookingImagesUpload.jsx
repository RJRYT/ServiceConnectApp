import React, { useEffect, useState } from "react";
import { BiImages } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";

function BookingImagesUpload() {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  // Generate preview URLs when images change
  useEffect(() => {
    const newPreviews = images.map((image) => URL.createObjectURL(image));
    setPreviews(newPreviews);

    // Clean up previews on unmount
    return () => {
      newPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  const handleImageChange = (e) => {
    if (!e.target.files) return;
    const fileList = Array.from(e.target.files);
    setImages((prev) => [...prev, ...fileList]);
  };
  return (
    <>
      <div className="relative my-2 shadow-lg shadow-gray-700 max-w-[360px] bg-white rounded-xl">
        <label
          htmlFor="file-upload"
          className="block w-full p-6 text-xl text-gray-400 cursor-pointer rounded-xl hover:bg-gray-100 transition"
        >
          <BiImages
            color="black"
            size={28}
            className="absolute top-1/2 right-4 -translate-y-1/2"
          />
          Upload Images & Videos
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      {/* images preview */}
      <div className="flex my-5 items-center gap-4 flex-wrap">
        {previews.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Uploaded ${index}`}
            className="w-16 h-16 object-cover rounded-xl shadow-md"
          />
        ))}
        <label htmlFor="file-upload" className="cursor-pointer">
          <IoAddOutline size={30} className="text-gray-800" />
        </label>
      </div>
    </>
  );
}

export default BookingImagesUpload;
