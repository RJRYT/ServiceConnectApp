import React, { useEffect, useState } from "react";
import Header from '../components/header'
import user from "../assets/default_user.jpg";
import { FaRegEdit } from "react-icons/fa";
import Input from "../components/Input";
import { BsCalendarDate } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import Submitbutton from "../components/submitbutton";
import { IoImageOutline } from "react-icons/io5";

function Editprofile() {
      const genderOptions = ["Male", "Female", "Others"];
    
      const [profilePic, setProfilePic] = useState(null);
    
  return (
    <div>
        
        <div className="flex flex-col min-h-screen bg-[#f5f9ff]">
        {/* Header */}
        <Header title='EDIT PROFILE'/>

        <div className="flex flex-col items-center justify-center px-2 sm:px-6">
          {/* pfp */}
          <div className="flex flex-col items-center justify-center relative mt-4">
            <div className="my-5">
              <img
                className="h-20 w-20 rounded-full object-cover shadow-md shadow-gray-500"
                src={profilePic ? URL.createObjectURL(profilePic) : user}
                id="file-ip-1-preview"
              />
            </div>
            <label
              htmlFor="file-ip-1"
              className="cursor-pointer absolute bottom-6 right-0 p-1 bg-white text-[#167f71] rounded-lg"
            >
              <IoImageOutline size={20} />
            </label>
            <input
              type="file"
              id="file-ip-1"
              className="hidden"
              placeholderColor="black"
              onChange={(e) => {
                setProfilePic(e.target.files[0]);
              }}
            />
          </div>
          {/* Input Boxes */}
          <div className=" my-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] gap-3">
          <Input
            type="text"
            placeholder="Full Name"
            textColor="black"
            placeholderColor="black"
            className="placeholder-black bg-white shadow-lg "
          />

            <Input type="text"
             placeholder="Nick Name" 
            textColor="black"
            placeholderColor="black"
            className="placeholder-black bg-white shadow-lg "/>

            <Input
              type="date"
              placeholder="Date of Birth"
              className="placeholder-black  shadow-lg   "
              bgColor="bg-white"
              textColor="black"
              placeholderColor="black"
              icon={
                <BsCalendarDate
                  className="absolute left-4 top-5"
                  size={25}
                  color="black"
                />
              }
            />
            <Input
              type="email"
              placeholder="Email"
              textColor="black"
              placeholderColor="black"
              className="placeholder-black bg-white shadow-lg  "
              icon={
                <TfiEmail
                  className="absolute left-4 top-5"
                  size={25}
                  color="black"
                />
              }
            />

            <Input type="number" placeholder="Phone" 
            placeholderColor="black"
            className="placeholder-black bg-white shadow-lg "/>
            <Input
              type="dropdown"
              placeholder="Gender"
              className="placeholder-black bg-white shadow-lg "
              textColor="black"
              options={genderOptions}
            />
            <Input type="text" 
            placeholder="Student"
            textColor="black"
            placeholderColor="black"
            className="placeholder-black bg-white shadow-lg " />
            
          </div>

          {/* Continue Button */}
          <Submitbutton title="Update" />
        </div>
      </div>
    </div>
  )
}

export default Editprofile