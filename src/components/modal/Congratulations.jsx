import React from 'react'
import reload from "../../assets/reload1.png"
import congrats from "../../assets/congratsicon.jpg"



function Congratulationmodall() {
  return (
    <div className="flex items-center flex-col justify-center  h-screen bg-[#1D1F2A]">  
        <div className="h-[100dvh] w-100 flex flex-col bg-[#1D1F2A] items-center justify-center ">
            <div className="h-[58%] w-[80%] bg-[#f5f8ff] rounded-4xl p-3">
                <div className=' relative h-[50%] w-[100%] rounded-4xl flex justify-center items-center '>
                    <img src={congrats}
                        className='w-[70%] h-[90%]'
                        alt="" 
                    />
                </div>
                <div className='h-[50%] w=[100%]  rounded-4xl'>
                    <p className='w-[100%] h-[20%] flex justify-center items-center text-xl font-bold text-black'>
                        Congratulations
                    </p>
                    <p className='h-[45%] w-[90%] ml-4  flex text-[13px] text-center items-center font-semibold text-[#545454]'>
                    Your Account is Ready to Use. You will be redirected to the Home Page in a Few Seconds.
                    </p>
                    <div className='w-full h-[50px] flex justify-center items-center'>
<                   img src={reload}
                    className='w-8 h-8 p'
                     alt="" />
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Congratulationmodall;