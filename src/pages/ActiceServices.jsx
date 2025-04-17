import React from 'react'
import Statusbox from '../components/statusbox'
import Mainheader from '../components/mainheader'
import Footermenu from '../components/footermenu'
import NearBy from '../components/nearby'
import StausChangeFilter from '../components/stausChangeBox'

function ActiceServices() {
  return (
    <div className='bg-gray-300 h-screen'>
      <Mainheader/>
      <div className='flex justify-center'>      
        <StausChangeFilter 
        options={['Ongoing', 'Completed']} 
      />
      </div>
      <div className='lg:flex'>
      <Statusbox title={"Complete Payment"}/>
      <Statusbox title={"Complete Payment"}/>
      </div>
      <Footermenu/>
    </div>
  )
}

export default ActiceServices
