import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { BiSearchAlt } from "react-icons/bi";
import FilterWrapper from './Filterwrapper';
import Filter from './filter';

function Mainheader({ title }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterOpen(true);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  //placeholder ---  Pass in this filter options whem calling
  const filterOptions = {
    "SubCategories": ["Design", "Development", "Marketing", "Business", "AI & Data Science"],
    "Price": ["Free", "Paid"],
    "Rating": ["4.5 & Up Above", "4.0 & Up Above", "3.5 & Up Above", "3.0 & Up Above"],
    "Duration": ["0-2 Hours", "3-6 Hours", "7-16 Hours", "17+"]
  };

  return (
    <>
      <div className='bg-slate-900 w-full h-[80px] flex justify-between items-center px-2 lg:px-8'>
        <div className='flex items-center lg:gap-4 gap-2'>
          <div className='border-2 border-white w-13 h-13 rounded-full flex justify-center items-center pr-1'>
            <IoIosArrowBack className='text-white text-4xl' />
          </div>
          <h1 className='text-lg lg:text-2xl font-bold text-white'>{title}</h1>
        </div>
        <div className='flex lg:gap-5 gap-2'>
          <div
            className='hover:border-1 hover:border-gray-500 duration-300 w-10 h-10 rounded-full flex justify-center items-center pr-1 cursor-pointer lg:w-13 lg:h-13'
            onClick={handleFilterClick}
          >
            <VscSettings className='text-white text-3xl lg:text-4xl' />
          </div>
          <div className='hover:border-1 hover:border-gray-500 w-10 h-10 duration-300 rounded-full flex justify-center items-center cursor-pointer lg:w-13 lg:h-13'>
            <BiSearchAlt className='text-white text-3xl lg:text-4xl' />
          </div>
        </div>
      </div>

      {isFilterOpen && (
        <FilterWrapper onClose={closeFilter}>
          <Filter closeFilter={closeFilter} filterOptions={filterOptions} />
        </FilterWrapper>
      )}
    </>
  );
}

export default Mainheader;
