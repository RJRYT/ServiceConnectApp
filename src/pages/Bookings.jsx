import React from "react";
import Mainheader from "../components/mainheader";
import provider from "../assets/booking-details/provider.png";

import BookingProfile from "../components/BookingProfile";
import InvoiceTable from "../components/InvoiceTable";
import Submitbutton from "../components/submitbutton";
import BookingImagesUpload from "../components/BookingImagesUpload";
import { BsExclamationOctagon } from "react-icons/bs";
import Availability from "../components/Availability";

function Bookings() {
  const items = [
    { description: "Bulb", quantity: 2, price: 50 },
    { description: "Wiring", quantity: 1, price: 100 },
    { description: "Sockets", quantity: 3, price: 25 },
  ];

  return (
    <>
      <Mainheader title="BOOKING DETAILS" />
      {/* main div */}
      <div className="p-4 min-h-screen bg-[#D9D9DB] ">
        <div>
          <BookingProfile
            name="Nazrul Islam"
            service="Electrification"
            image={provider}
          />
          <p className="">Booking Id: 12aa21w</p>
          {/* title */}
          <div className="relative my-2 shadow-lg shadow-gray-700 max-w-[360px]  bg-white rounded-xl ">
            <p className="absolute text-gray-400  top-1 left-6">Title</p>
            <input
              className="px-6 pt-8 pb-2 w-full rounded-xl placeholder-gray-400 placeholder-opacity-80 text-xl "
              type="text"
              placeholder="Change bulb"
            />
          </div>
          {/* description */}
          <div className="relative my-2 shadow-lg shadow-gray-700 max-w-[360px]  bg-white rounded-xl ">
            <p className="absolute top-1 left-6 text-sm text-gray-400">
              Description
            </p>
            <textarea
              className="px-6 pt-6 pb-2 w-full rounded-xl border border-gray-300  placeholder-gray-400 text-xl min-h-[110px]"
              placeholder="Add a description..."
            ></textarea>
          </div>
          {/* image upload */}
          <BookingImagesUpload />
        </div>
        {/* Availability */}
        <Availability />
        {/* appointment */}
        <div>
          <div className="p-3 rounded-3xl bg-white text-gray-700">
            <h3 className="text-black font-medium">Appointment</h3>
            <div className="flex my-2 self-center gap-2 justify-self-center text-black font-medium font-mulish">
              <span className="p-2 rounded-lg bg-gray-200 shadow-sm shadow-gray-700">
                {" "}
                Jun 10, 2024
              </span>
              <span className="px-4 py-2 rounded-lg bg-gray-200 shadow-sm shadow-gray-700">
                9:30 AM
              </span>
            </div>
            <h3 className="font-medium">Invoice</h3>
            <InvoiceTable items={items} />
            <div>
              <h3 className="font-medium">Terms and conditions</h3>
              <p className="ml-4">valid upto 1 month</p>
            </div>
            <div>
              <h3 className="text-red-500 flex flex-nowrap items-center ">
                Additional requirements{" "}
                <BsExclamationOctagon className="mx-2" color="red" size={20} />
              </h3>
              <p className="ml-4">provide ladder</p>
              <p className="ml-4">provide bulb</p>
            </div>
          </div>

          <div className="w-full my-3 flex justify-center self-center">
            <Submitbutton title="Accept & Pay Full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookings;
