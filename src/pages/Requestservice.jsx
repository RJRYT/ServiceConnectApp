import React from "react";
import provider from "../assets/booking-details/provider.png";
import BookingProfile from "../components/BookingProfile";
import Availability from "../components/Availability";
import Submitbutton from "../components/submitbutton";
import ServiceDeatails from "../components/service-details";
import Header from "../components/header";

function Requestservice() {
  return (
    <>
      <Header title="REQUEST SERVICE" />
      {/* main div */}
      <div className="p-3 min-h-screen bg-[#D9D9DB] ">
        <div className="flex flex-col items-center ">
          <BookingProfile
            name="Nazrul Islam"
            service="Electrification"
            image={provider}
          />
          <ServiceDeatails />

          {/* Availability */}
          <div className="w-[98%] mt-0 md:mt-5">
            <Availability />
          </div>
          <div className="w-full my-3 flex justify-center self-center">
            <Submitbutton title="Conform" />
          </div>

        </div>

      </div>
    </>
  );
}

export default Requestservice;
