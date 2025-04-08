import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import Submitbutton from './submitbutton';

function Filter({ closeFilter }) {
  return (
    <div className='bg-gray-200 lg:rounded-2xl'>
      <div className='flex justify-between h-[80px] items-center px-3'>
        <div className='flex items-center gap-1 cursor-pointer' onClick={closeFilter}>
          <IoIosArrowRoundBack className='text-6xl' />
          <h1 className='text-2xl font-bold'>FILTER</h1>
        </div>
        <div className=' text-stone-700'>
          <p>Clear</p>
        </div>
      </div>
      <div className='bg-gray-200 lg:flex lg:justify-center lg:mt-2 lg:rounded-2xl lg:gap-6 md:flex md:flex-wrap'>
        <div className='py-6'>
          <p className='text-xl font-semibold ml-5'>
            SubCategories:
          </p>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
        </div>

{/* second filter */}
<div className='py-5'>
          <p className='text-xl font-semibold ml-5'>
            SubCategories:
          </p>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
        </div>
        {/* third filter */}
        <div className='py-5'>
          <p className='text-xl font-semibold ml-5'>
            Price:
          </p>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>Paid</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>Free</p>
          </div>
        </div>
                {/* third filter */}
                <div className='py-5'>
          <p className='text-xl font-semibold ml-5'>
            SubCategories:
          </p>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>xxxxxxxxxx</p>
          </div>
        </div>

                {/* Fourth filter */}
         <div className='py-5'>
          <p className='text-xl font-semibold ml-5'>
            Rating:
          </p>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>4.5 & Up Above</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>4.0 & Up Above</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>3.5 & Up Above</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>3.0 & Up Above</p>
          </div>
        </div>
           {/* fifth filter */}
           <div className='py-5'>
          <p className='text-xl font-semibold ml-5'>
            Duration:
          </p>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>0-2 Hours</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>3-6 Hours</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>7-16 Hours</p>
          </div>
          <div className='flex gap-2 ml-12 mt-2'>
            <input type="checkbox" className='w-5' />
            <p className='text-md text-stone-600'>17+</p>
          </div>
        </div>

      </div>
      <div className='flex justify-center pb-5'>
        <Submitbutton title="APPLY"/>
      </div>
    </div>
  )
}

export default Filter



// this component is called from filter button on the mainheader wrapped in filterwrapper.jsx
// that is prompted to change view as per screen size