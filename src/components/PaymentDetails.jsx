import React from 'react'
import paymentimg from "../assets/payment methods/paymentimg.png"

const PaymentDetails = () => {
    return (
        <div className='max-h-screen w-full sm:p-3 flex justify-center items-center'>
            <div className="flex bg-white h-[20vh] w-md  rounded-2xl shadow-4xl">
                <img className='p-5' src={paymentimg} />
                <div className="flex flex-col justify-center gap-2">
                    <p className='text-[#FF6B00] font-Mulish'>Graphic Design</p>
                    <p className='text-[#202244] font-Jost font-semibold'>Setup your Graphic Desig..</p>
                </div>

            </div>
        </div>
    )
}

export default PaymentDetails;
