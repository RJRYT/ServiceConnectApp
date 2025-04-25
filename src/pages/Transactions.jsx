import React from 'react'
import Mainheader from '../components/mainheader'
import Footermenu from '../components/footermenu'
import Transaction from '../components/Transaction'


const Transactions = () => {
    return (
        <div className='min-h-screen bg-[#d9d9d9] '>
            <Mainheader title="TRANSACTIONS" />
            <Transaction/> 
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Footermenu />
        </div>
    )
}

export default Transactions;
