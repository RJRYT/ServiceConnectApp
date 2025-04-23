import React from 'react'
import paymentimg from "../assets/payment methods/paymentimg.png"
const Transaction = () => {
  return (
    <div className=''>
       <div className='max-h-screen  w-full flex justify-center items-center p-3'>
                <div className="flex bg-white h-[20vh] w-md  rounded-2xl shadow">
                    <img className='p-5' src={paymentimg} />
                    <div className="flex flex-col justify-center gap-2 ">
                        <p className='text-black font-Mulish'>Build Personal Branding</p>
                        <p className='text-[#202244] font-Jost font-semibold'>Web Designer</p>
                        <button className='h-7 w-20 bg-[#167F71] rounded shadow-xl text-white'>paid</button>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Transaction
