import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import Submitbutton from './submitbutton';

function Filter({ closeFilter, filterOptions = {} }) {
  const [localFilters, setLocalFilters] = useState({});

  const handleCheckboxChange = (category, option) => {
    setLocalFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [option]: !prev[category]?.[option],
      },
    }));
  };

  return (
    <div className='bg-gray-200 lg:rounded-2xl'>
      <div className='flex justify-between items-center px-3'>
        <div className='flex items-center gap-1 cursor-pointer' onClick={closeFilter}>
          <IoIosArrowRoundBack className='text-6xl' />
          <h1 className='text-2xl font-bold'>FILTER</h1>
        </div>
        <div className='text-stone-700 cursor-pointer' onClick={() => setLocalFilters({})}>
        <p>Clear</p>
        </div>
      </div>
      <div className='bg-gray-200 lg:flex lg:justify-center lg:mt-2 lg:rounded-2xl lg:gap-6 md:flex md:flex-wrap'>
        {Object.entries(filterOptions).map(([category, options]) => (
          <div className='py-5' key={category}>
            <p className='text-xl font-semibold ml-5'>{category}</p>
            {options.map((option) => (
              <div className='flex gap-2 ml-12 mt-2' key={option}>
                <input
                  type="checkbox"
                  className='w-5'
                  checked={localFilters[category]?.[option] || false}
                  onChange={() => handleCheckboxChange(category, option)}
                />
                <p className='text-md text-stone-600'>{option}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='flex justify-center pb-5'>
        <Submitbutton title="APPLY" />
      </div>
    </div>
  );
}

export default Filter;
