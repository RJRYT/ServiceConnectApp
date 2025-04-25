import React from 'react'
import Header from '../components/header'
import ToggleSwitch from '../components/togglebutton'

function NotificationSettings() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header title={"NOTIFICATION SETTINGS"}/>
      <div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>Special offers</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>Sound</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>Vibrate</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>General Notification</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>Promo & Discount</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>Payment Options</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>App Update</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>New Service Available</p>
            <ToggleSwitch/>
        </div>
        <div className='flex items-center justify-between px-5 py-5'>
            <p className='font-semibold'>New Tips Available</p>
            <ToggleSwitch/>
        </div>
      </div>
    </div>
  )
}

export default NotificationSettings
