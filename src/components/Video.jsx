import React from 'react'
import video from "../assets/providerprofile/video.png"

const Video = () => {
  const videoImg = Array(8).fill(video)
  return (
    <div className="bg-white p-4 rounded-xl shadow-3xl ">
      <h2 className="text-lg font-semibold text-[#202244] font-Jost mb-4">Images</h2>
      <div className="grid grid-cols-4  gap-3">
        {videoImg.map((img, index) => (
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

export default Video;
