import React, {useState} from 'react'

function Reviwenavbar() {
    const [selected, setSelected] = useState("Excellent");
    const options = ["Excellent", "Good", "Average", "Below Average"];
  return ( 
         <div className=" flex gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`px-3 p-1 text-[14px] md:text-[16px] rounded-3xl font-semibold transition 
            ${
              selected === option
                ? "bg-[#1d1f2a] text-white shadow-lg shadow-gray-700 "
                : "bg-white text-[#1C1D3A] shadow-md shadow-gray-700 "
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default Reviwenavbar