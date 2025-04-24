import React from 'react'
import design from "../assets/design.jpg"
const Transaction = () => {
  return (
   
       <div className='max-h-screen  w-full flex justify-center items-center sm:p-2  p-2 '>
                <div className="flex bg-white h-[20vh] w-md   rounded-2xl shadow">
                    <img className='h-23 w-25 rounded-2xl mx-4 my-6 shadow-2xl ' src={design} />
                    <div className="flex flex-col justify-center p-2 gap-2 ">
                        <p className='text-[#202244] font-Jost  font-bold'>Build Personal Branding</p>
                        <p className='text-[#202244] font-Jost font-semibold'>Web Designer</p>
                        <button className='h-7 w-20 bg-[#167F71] rounded shadow-xl mt-2 text-white'>paid</button>
                    </div>

                </div>
            </div>
   
  )
}

export default Transaction
