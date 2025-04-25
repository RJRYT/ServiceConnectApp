import React from 'react'
import edit from "../assets/profile/edit.png"
import payment from "../assets/profile/payments.png"
import notification from "../assets/profile/notification.png"
import security from "../assets/profile/security.png"
import language from "../assets/profile/language.png"
import dark from "../assets/profile/dark.png"
import term from "../assets/profile/term.png"
import help from "../assets/profile/help.png"
import invite from "../assets/profile/invite.png"
import logout from "../assets/profile/logout.png"
import { IoIosArrowForward } from "react-icons/io";


const profileitems = [
    { name: 'Edit Profile', icon: edit },
    { name: 'Payment Option', icon: payment },
    { name: 'Notifications', icon: notification },
    { name: 'Security', icon: security },
    { name: 'Language', icon: language },
    { name: 'Dark Mode', icon: dark },
    { name: 'Term & Conditions', icon: term },
    { name: 'Help Center', icon: help },
    { name: 'Invite Friends', icon: invite },
    { name: 'Logout', icon: logout },
  ];

function Profileitems() {
  return (
     <div className='h-full w-full flex justify-center relative bottom-20 '>
              <div className='h-[100%] min-h-[660px] w-[90%] md:w-[95%] min-h-[90%] rounded-3xl pb-2 bg-white'>
                <div className='w-full mt-16 flex flex-col items-center'>
                  <h1 className='text-[18px] font-bold'>James S. Hernadez</h1>
                  <p className='text-gray-800'>hernadez.redial@gamil.ac.in</p>
    
                  {profileitems.map((profile, index) => (
                    <div className='w-[95%] p-2 flex justify-center cursor-pointer hover:bg-[#d9d9db] hover:rounded-lg'>
                      <div className='w-full flex gap-3 p-2 items-center '>
                        <img src={profile.icon} alt="" className='h-5 w-5 md:h-6 md:w-5' />
                        <h1 className='font-semibold'>{profile.name}</h1>
                      </div>
                      <p className='text-2xl p-2'><IoIosArrowForward /></p>
    
                    </div>
                  ))}
    
    
    
    
                </div>
              </div>
    
            </div>
    
  )
}

export default Profileitems