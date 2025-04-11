import React from 'react'
import Footermenu from '../components/footermenu'
import Mainheader from '../components/mainheader';
import { MdLocationPin } from "react-icons/md";
import Card from '../components/cards';
import { MdOutlineEdit } from "react-icons/md";
import NearBy from '../components/nearby';


function Delivery() {
  
  
  return (
   
    <body class="h-screen">
  <div class="flex flex-col h-full">
    <div class="h-[80px] w-full">
      <Mainheader title="CAKE DELIVERY" />
    </div>
    <div class="flex h-full">
      <aside class="hidden md:block w-1/6 bg-[#30323c] text-white p-4">
        <h2 class="text-xl font-semibold mb-4">Left Sidebar</h2>
      </aside>

      <main class="flex-1 bg-[#d9d9d9] justify-center">
        <div class="flex w-full flex-col bg-[#d9d9db] p-2">
          <div class="mb-2 flex md:flex-row flex-col items-center md:justify-between justify-center gap-2 p-2">
            <div class="flex items-center space-x-1 w-full md:w-[70%] h-full">
              <p class="ml-3"><MdLocationPin /></p>
              <p class="border-none outline-none">[Location Name]</p>
              <p><MdOutlineEdit /></p>
            </div>
            <button class="w-full md:w-[30%] h-full bg-[#303039] text-white text-xs p-2 rounded-full">
              Open Request (Request to Random Accounts)
            </button>
          </div>
          <div class="w-full flex justify-center">
            <NearBy />
          </div>
        </div>
        <div class="h-[69dvh] w-full">
          <div class="bg-[#d9d9db] h-full max-h-[69vh] w-full ml-0 sm:ml-4 md:ml-5 flex flex-wrap gap-2 sm:gap-3 justify-start overflow-y-auto p-4">
            <Card name="Thomas" price="₹280 - 300" km="4 km away" reviews="98 reviews" star="4.0" />
            <Card name="John" price="₹350 - 400" km="4 km away" reviews="85 reviews" star="4.2" />
            <Card name="Cristy" price="₹200 - 300" km="4 km away" reviews="88 reviews" star="4.6"/>
            <Card name="Cristy" price="₹200 - 300" km="4 km away" reviews="88 reviews" star="4.4" />
            <Card name="Cristy" price="₹200 - 300" km="4 km away" reviews="88 reviews" star="4.2"/>
            <Card name="Albert" price="₹400 - 450" km="4 km away" reviews="99 reviews" star="4.3" />
            <Card name="David" price="₹380 - 400" km="4 km away" reviews="95 reviews" star="4.7"/>
            <Card name="Bella" price="₹350 - 450" km="4 km away" reviews="95 reviews" star="4.9"/>
          </div>
          <Footermenu />
        </div>
      </main>

      <aside class="hidden md:block w-1/6 bg-[#30323c] p-4">
        <h2 class="text-xl font-semibold mb-4 text-white">Right Sidebar</h2>
      </aside>
    </div>
  </div>
</body>







    
    


  )
}

export default Delivery;