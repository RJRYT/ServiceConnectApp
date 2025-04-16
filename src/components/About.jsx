import { useState } from 'react';
import React from 'react'
import headerimg from "../assets/providerprofile/headerimg.png"
import Filll from "../assets/providerprofile/Filll.png"
const About = () => {

  const [isExpanded, setIsExpanded] = useState(false);



  return (
    <div className=' bg-white p-4 rounded-xl shadow-3xl relative'>
        <img className='w-24 absolute sm:left-165  sm:bottom-28 left-73 bottom-80' src={headerimg} />
        <img className='w-10 absolute sm:left-172 sm:bottom-37 left-80 bottom-89' src={Filll} />
      <h2 className="font-semibold text-[#202244] ">About</h2>
      <p className="text-sm text-[#A0A4AB] font-semibold font-mulish">{isExpanded ?
        " Graphic Design now a popular profession graphic design by off your carrer about tantas regiones barbarorum pedibus obiit."
        : "Graphic Design now a popular profession graphic design by off your carrer about tantas regiones barbarorum pedibus obiit Graphic Design now a popular profession. Our tutors create lessons on core skills. Graphic Design is a popular profession. Our tutors create lessons on practical skills, with real-time industry-relevant projects."
      }
        <span onClick={() => setIsExpanded(!isExpanded)} className="text-black underline underline-offset-1 ">{isExpanded ? " Read More" : " Read Less"}</span></p>
    </div>
  )
}

export default About
