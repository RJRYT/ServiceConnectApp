import React from 'react'
import Header from '../components/header'
import { useState } from "react";
import paymentcard from "../assets/payment type/paymentcard.png"
import Submitbutton from '../components/submitbutton';

const PaymentType = () => {

  const [cardDetails, setCardDetails] = useState({
    name: "Belinda C. Cullen",
    number: "**** **65 8765 3456",
    expiry: "12/28",
    cvv: "***",
  });
  return (

    <div className="min-h-screen  w-full bg-gray-300  font-sans ">
      {/* Header */}
      <Header title="ADD CARD" />

      {/* Card Preview */}
      <div className="sm:flex flex-col justify-center items-center p-2">


        <div className="bg-[#191a24] h-[31vh]  sm:w-1/2 text-white rounded-3xl  sm:p-5 p-4 shadow-md">
          <img src={paymentcard} className='w-10 mb-5' />
          <div className="text-xl tracking-widest font-semibold pt-5">1234 5678 8765 0876</div>
          <div className="flex text-sm mt-3 gap-1">
            <div className="w-10 text-white">VALID THRU</div>
            <div className='mt-1 text-xl'>{cardDetails.expiry}</div>
          </div>
          <div className="mt-2 text-sm tracking-wider">{cardDetails.name.toUpperCase()}</div>
        </div>

        {/* Form Fields */}
        <div className="sm:w-1/2 p-3 space-y-3 ">
          <div>
            <label className="text-sm text-[#202244]  font-mulish  font-bold">Card Name*</label>
            <input
              type="text"
              value={cardDetails.name}
              onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
              className="w-full mt-1 p-3 rounded-xl shadow bg-white"
            />
          </div>

          <div>
            <label className="text-sm text-[#202244] font-mulish  font-bold">Card Number*</label>
            <input
              type="text"
              value={cardDetails.number}
              onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
              className="w-full mt-1 p-3 rounded-xl shadow bg-white"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-sm text-[#202244] font-mulish  font-bold">Expiry Date*</label>
              <input
                type="text"
                value={cardDetails.expiry}
                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                className="w-full mt-1 p-3 rounded-xl shadow bg-white"
              />
            </div>

            <div className="flex-1">
              <label className="text-sm text-[#202244] font-mulish font-bold">CVV*</label>
              <input
                type="password"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                className="w-full mt-1 p-3 rounded-xl shadow bg-white"
              />
            </div>
          </div>
        </div>


      </div>


      {/* Button */}
      <div className="flex justify-center ">
        <Submitbutton title="Add New Card" />
      </div>

    </div>


  )
}

export default PaymentType
