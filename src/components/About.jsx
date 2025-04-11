import { useState } from 'react';
import React from 'react'

const About = () => {

  const [isExpanded, setIsExpanded] = useState(false);



  return (
    <div className=' bg-white p-4 rounded-xl shadow-3xl'>
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
