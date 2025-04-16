import React from 'react'
import Image from "../assets/providerprofile/Image.png"

const Images = () => {
  const images = Array(8).fill(Image);
  return (

    <div className="bg-white p-4 rounded-xl shadow-3xl">
      <h2 className="text-lg font-semibold text-[#202244] font-Jost">Images</h2>
      <div className="grid grid-cols-4  gap-1">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="object-cover"
          />
        ))}
      </div>
    </div>



  )
}

export default Images;
