import React, { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import user from "../assets/Profile.png";
import { TfiEmail } from "react-icons/tfi";
import ProfileInput from "../components/ProfileInput";
import { BsCalendarDate } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";
import LocationPopup from "../components/LocationPopup";

function FillYourProfile() {
  const genderOptions = ["Male", "Female", "Others"];

  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true); // Show modal when page loads
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <LocationPopup isVisible={isModalVisible} onClose={closeModal}>
        <h1 className=" text-center text-2xl font-medium  font-aldrich">
          Allow Location
        </h1>
        <button className="text-white bg-[#1D1F2A] py-4 px-12 rounded-full cursor-pointer relative flex gap-4 justify-center font-bold my-4 active:bg-[#32364f]">
          Allow
        </button>
        <div>
          <p className="my-1">Manually Enter Location</p>
          <ProfileInput type="text" placeholder="Location" />
        </div>
      </LocationPopup>
      <div className="flex flex-col h-[100%] bg-gray-300">
        {/* Header */}
        <div className="w-full h-20 flex bg-[#1D1F2A] items-center  space-x-3">
          <div className="rounded-full bg-[#1D1F2A] w-10 h-10 flex justify-center items-center text-white text-xl font-bold border border-white ml-2">
            <SlArrowLeft />
          </div>
          <p className="w-[50dvh] text-white text-xl font-semibold font-sans uppercase">
            Fill your profile
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-2 sm:px-6">
          {/* pfp */}
          <div className=" my-4 md:my-10">
            <img
              className="h-28 md:h-36 w-auto"
              src={user}
              alt="default user image"
            />
          </div>
          {/* Input Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
            <ProfileInput type="text" placeholder="Full Name" />
            <ProfileInput type="text" placeholder="Address" />

            <ProfileInput
              type="date"
              placeholder="Date of Birth"
              icon={
                <BsCalendarDate
                  className="absolute left-4 top-5"
                  size={25}
                  color="white"
                />
              }
            />
            <ProfileInput
              type="email"
              placeholder="Email"
              icon={
                <TfiEmail
                  className="absolute left-4 top-5"
                  size={25}
                  color="white"
                />
              }
            />

            <ProfileInput type="number" placeholder="Phone" />
            <ProfileInput
              type="dropdown"
              placeholder="Gender"
              options={genderOptions}
            />
            <ProfileInput type="text" placeholder="House Name" />
            <ProfileInput type="text" placeholder="Land Mark" />
            <ProfileInput type="text" placeholder="Pin code" />
            <ProfileInput type="text" placeholder="District" />
            <ProfileInput type="text" placeholder="State" />
          </div>

          {/* Continue Button */}
          <button className="text-white w-[300px] bg-[#1D1F2A] py-4 rounded-full cursor-pointer relative flex gap-4 justify-center font-bold my-10 active:bg-[#32364f]">
            Continue
            <FaCircleArrowRight className="absolute top-2 right-2" size={38} />
          </button>
        </div>
      </div>
    </>
  );
}

export default FillYourProfile;
