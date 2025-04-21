import React, { useState } from 'react'
import Statusbox from '../components/statusbox'
import Mainheader from '../components/mainheader'
import Footermenu from '../components/footermenu'
import StausChangeFilter from '../components/stausChangeBox'
import CompletedList from '../components/CompletedList'

function ActiceServices() {
  const [selectedStatus, setSelectedStatus] = useState('Ongoing')

  return (
    <div className='bg-gray-300 min-h-screen'>
      <Mainheader title={"Jobs"} />
      <div className='flex justify-center'>
        <StausChangeFilter
          options={['Ongoing', 'Completed']}
          onChange={(status) => setSelectedStatus(status)}
        />
      </div>

      {selectedStatus === 'Completed' ? (
                  <div className='lg:flex'>
        <CompletedList
        Deaprtment={"Graphic Design"}
        Details={"Graphic Design Advan"}
        Rating={"4.2"}
        />
                <CompletedList
        Deaprtment={"Graphic Design"}
        Details={"Advance Diploma in G"}
        Rating={"4.2"}
        />      
          <CompletedList
        Deaprtment={"Digital Marketing"}
        Details={"Setup your Graphic D"}
        Rating={"4.2"}
        />     
           <CompletedList
        Deaprtment={"Web Development"}
        Details={"Web Developer conce. "}
        Rating={"4.2"}
        />
        </div>
      ) : (
        <>
          <div className='lg:flex'>
            <Statusbox title={"Complete Payment"} />
            <Statusbox title={"Complete Payment"} />
          </div>
        </>
      )}

      <Footermenu />
    </div>
  )
}

export default ActiceServices
