import React from 'react'

const PaymentOptions = () => {
    return (
        <div className='max-h-screen w-full flex flex-col  justify-center items-center'>
            <p className='font-Mulish text-[#545454] font-semibold'>Select the Payment Methods you Want to Use</p>

            <div className="flex justify-end gap-2 bg-white p-4 sm:w-md w-2/2  rounded-2xl shadow-4xl mt-5">
                <p className='text-[#202244x] font-semibold text-lg font-Mulish'>Paypal</p>
                <input
                    type="radio"
                    className="w-6 h-5 mt-1 accent-blue-500"
                />
            </div>
            <div className="flex justify-end gap-2 bg-white p-4 sm:w-md w-2/2 rounded-2xl shadow-4xl mt-4">
                <p className='text-[#202244x] font-semibold text-lg font-Mulish' >Google Pay</p>
                <input
                    type="radio"
                    className="w-6 h-5 mt-1 accent-blue-500"
                />
            </div>

        </div>

    )
}

export default PaymentOptions;

