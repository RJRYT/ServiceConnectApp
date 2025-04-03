import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";

function Submitbutton({ title }) {
  return (
    <div>
      <button className="bg-slate-900 text-white py-4 rounded-full mt-2 flex justify-center items-center w-full 
                         hover:bg-blue-950 transition-all duration-300 ease-in-out 
                         relative max-w-[360px] min-w-[360px] shadow-lg hover:shadow-xl 
                         transform hover:scale-105 active:scale-95">
        {title}
        <div className="absolute flex justify-center items-center right-2">
          <div className='border-2 border-white w-10 h-10 rounded-full flex justify-center items-center pr-1 
                          bg-white transform transition-transform duration-300 ease-in-out 
                          hover:translate-x-1'>
            <IoMdArrowRoundForward className='text-4xl text-black' />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Submitbutton;
