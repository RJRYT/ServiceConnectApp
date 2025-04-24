import React from 'react'
import Statusbox from '../components/statusbox'
import Mainheader from '../components/mainheader'
import Footermenu from '../components/footermenu'
function ComplaintsList() {
  return (
    <div className='bg-gray-300 h-screen'>
    <Mainheader title={"Complaints"}/> 
    <div className='lg:flex'>
    <Statusbox title={"Chat / Call"}/>
    <Statusbox title={"Complete Payment"}/>
    </div>
    <Footermenu/>
  </div>
  )
}

export default ComplaintsList
