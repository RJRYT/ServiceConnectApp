import React from 'react'
import Header from '../components/header';
import PaymentDetails from '../components/PaymentDetails';
import PaymentOptions from '../components/PaymentOptions';
import Addnewcard from "../assets/payment methods/Addnewcard.png"
import Submitbutton from '../components/submitbutton';

const PaymentMethod = () => {
    return (
        <div className='h-screen w-full bg-gray-300'>
            <Header title="PAYMENT METHODS" />
            <div className="max-h-screen w-full  grid grid-cols-1 sm:p-1 p-4 gap-4 ">
                <PaymentDetails />
                <PaymentOptions />
                <div className="sm:flex justify-center items-center flex flex-col">
                    <img className='cursor-pointer  sm:ml-75 ml-65 ' src={Addnewcard} />
                    <Submitbutton title="Enroll Course - $55" />   
                </div>
              
            </div>

        </div>
    )
}

export default PaymentMethod;
