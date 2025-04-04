import React, { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import user from "../assets/default_user.jpg";
import { TfiEmail } from "react-icons/tfi";
import { BsCalendarDate } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import LocationPopup from "../components/LocationPopup";
import Input from "../components/Input";
import Header from "../components/header";
import Submitbutton from "../components/submitbutton";

function FillYourProfile() {
  const genderOptions = ["Male", "Female", "Others"];

  const [profilePic, setProfilePic] = useState(null);

  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true); // Show modal when page loads
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* popup */}
      <LocationPopup isVisible={isModalVisible} onClose={closeModal}>
        <h1 className=" text-center text-2xl font-medium  font-aldrich">
          Allow Location
        </h1>
        <button className="text-white bg-[#1D1F2A] py-4 px-12 rounded-full cursor-pointer relative flex gap-4 justify-center font-bold my-4 active:bg-[#32364f]">
          Allow
        </button>
        <div>
          <p className="my-1">Manually Enter Location</p>
          <Input type="text" placeholder="Location" />
        </div>
      </LocationPopup>
      <div className="flex flex-col min-h-screen bg-gray-300">
        {/* Header */}
        <Header title="FILL YOUR PROFILE" />

        <div className="flex flex-col items-center justify-center px-2 sm:px-6">
          {/* pfp */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="my-5">
              <img
                className="h-32 rounded-full"
                src={profilePic ? URL.createObjectURL(profilePic) : user}
                id="file-ip-1-preview"
              />
            </div>
            <label
              htmlFor="file-ip-1"
              className="cursor-pointer absolute bottom-6 right-0 p-2 bg-gray-500 rounded-full hover:bg-gray-800"
            >
              <FaRegEdit size={16} color="white" />
            </label>
            <input
              type="file"
              id="file-ip-1"
              className="hidden"
              onChange={(e) => {
                setProfilePic(e.target.files[0]);
              }}
            />
          </div>
          {/* Input Boxes */}
          <div className=" my-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
            <Input type="text" placeholder="Full Name" />
            <Input type="text" placeholder="Address" />

            <Input
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
            <Input
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

            <Input type="number" placeholder="Phone" />
            <Input
              type="dropdown"
              placeholder="Gender"
              options={genderOptions}
            />
            <Input type="text" placeholder="House Name" />
            <Input type="text" placeholder="Land Mark" />
            <Input type="text" placeholder="Pin code" />
            <Input type="text" placeholder="District" />
            <Input type="text" placeholder="State" />
          </div>

          {/* Continue Button */}
          <Submitbutton title="Continue" />
        </div>
      </div>
    </>
  );
}

export default FillYourProfile;
