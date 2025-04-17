import React from 'react'
import Header from '../components/header'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Reviwenavbar from '../components/reviewnavbar';
import Reviewcard from '../components/reviewcards';
import Writereview from '../components/reviewbutton';

function Reviewsdetails() {
  return (
    <main className='min-h-[100dvh] w-full bg-[#d9d9d9]'>
        <Header title="REVIEWS" />
        <div className='w-full min-h-[100px] flex flex-col items-center justify-center'>
            <h1 className='w[50%] flex justify-center text-[34px] font-bold font-mulish text-[#1d1f2a]'>4.8</h1>
            <p className='w-[50%] flex justify-center gap-1 text-yellow-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </p>
            <p className='text-[12px] font-semibold text-[#545454]'>Based on 448 Reviews</p>
        </div>
        <div className='w-full flex justify-center p-1  '>
        <Reviwenavbar/>
        </div>
        <div className='w-full flex justify-center pb-14 md:pb-4'> 
        <Reviewcard/>
        </div>
        <Writereview/>
    </main>
  )
}

export default Reviewsdetails