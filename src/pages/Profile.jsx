import Header from '../components/header';
import React, { useEffect, useState } from "react";
import user from "../assets/default_user.jpg";
import Footermenu from '../components/footermenu';
import { IoImageOutline } from "react-icons/io5";
import Profileitems from '../components/profileitem';




function Profile() {
  const [profilePic, setProfilePic] = useState(null);

  return (
    <div className='h-screen '>
      <Header title='PROFILE' />
      <div className='w-full min-h-[300px] flex flex-col justify-center pb-3 md:pb-0  bg-[#d9d9db]'>

        {/* pfp */}
        <div className="flex flex-col items-center justify-center  z-10 ">
          <div className=' relative'>
          <div className="my-5">
            <img
              className="h-26 w-26 rounded-full  border-3 border-[#167f71] object-cover"
              src={profilePic ? URL.createObjectURL(profilePic) : user}
              id="file-ip-1-preview"
            />
          </div>
          <label
            htmlFor="file-ip-1"
            className="cursor-pointer absolute bottom-5 right-1 border-3 p-1 bg-white shadow-md rounded-lg text-[#167f71] text-[20px] hover:bg-gray-100"
          >
            <p className=''><IoImageOutline /></p>
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
        </div>       
        <Profileitems/>
        <Footermenu />
      </div>




    </div>
  )
}

export default Profile;