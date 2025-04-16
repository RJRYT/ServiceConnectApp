import React, { useState } from "react";
import ImageCarousel from "../components/Carousel";
import { allCategories } from "./../data";
import HomeMenuItems from "../components/HomeMenuItems";
import ServiceCard from "../components/ServiceCard";
import Search from "../components/Search";
import search from "../assets/search.png";
import Filter from "../assets/FILTER.png";

function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleInputClick = () => {
    setIsSearchOpen(true);
  };

  const popularServices = ["All", "Plumbing", "Electrical", "Health"];

  if (isSearchOpen) {
    return (
      <div className="col-span-12 md:col-span-8 px-3 sm:px-8 md:px-12 lg:px-22">
        <Search setIsSearchOpen={setIsSearchOpen} />
      </div>
    );
  } else {
    return (
      <main className="col-span-12 md:col-span-8 bg-gray-100 sm:bg-[#D9D9D9] flex flex-col items-center px-3 sm:px-8 md:px-12 lg:px-22 py-5">
        {/* search bar */}
        <div className=" max-w-3x1 relative mb-5">
          <img
            className="absolute mx-3 my-5 w-6 cursor-pointer"
            src={search}
            alt="search icon"
          />
          <input
            onClick={handleInputClick}
            type="text"
            placeholder="Search for.."
            className="bg-[#736A68] w-full font-mulish placeholder-white p-5 pl-25 rounded-2xl  bg- shadow-md"
          />
          <img
            className="absolute right-2 top-3  w-10"
            src={Filter}
            alt="filter icon"
          />
        </div>
        <div className="w-full grid grid-cols-3 rounded-2xl border-4 border-[#1D1F2A] bg-white">
          <div className="flex items-center justify-center rounded-2xl bg-[#1D1F2A] text-white">
            Near By
          </div>
          <div className="flex items-center justify-center">10 km</div>
          <div className="flex items-center justify-center">All</div>
        </div>
        {/* carousel */}
        <div className="my-4 rounded-2xl w-full bg-[#1D1F2A]">
          <ImageCarousel />
        </div>
        {/* services category */}
        <div className="w-full my-4">
          <div className="flex w-full items-center justify-between mb-4">
            <h2 className="font-jost font-bold text-2xl text-[#1D1F2A]">
              Services Category
            </h2>
            <a
              href=""
              className="font-mulish font-bold text-sm md:text-lg uppercase"
            >
              see all
            </a>
          </div>
          <div className="w-full flex gap-0 sm:gap-2 justify-evenly overflow-x-auto   ">
            {allCategories.slice(0, 7).map((item) => (
              <HomeMenuItems image={item.image} title={item.title} />
            ))}
          </div>
        </div>
        {/* popular services */}
        <div className="w-full">
          <div className="flex w-full items-center justify-between mb-4">
            <h2 className="font-jost font-bold text-2xl text-[#1D1F2A]">
              Popular services
            </h2>
            <a
              href=""
              className="font-mulish font-bold text-sm md:text-lg uppercase"
            >
              see all
            </a>{" "}
          </div>
          <div className="w-full overflow-x-auto flex flex-nowrap">
            {popularServices.map((item) => (
              <button className="py-1 mx-2 px-6 bg-gray-500 rounded-3xl text-white hover:bg-gray-800 ">
                {item}
              </button>
            ))}
          </div>
          <div
            className="w-full h-auto py-2 my-4 flex flex-nowrap overflow-x-auto gap-3 justify-evenly
            sm:flex-wrap sm:overflow-x-visible
            md:justify-evenly md:[&>*]:basis-[32%]
            lg:[&>*]:basis-[24%] "
          >
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
        {/* Top service providers */}
        <div className="w-full my-4">
          <div className="flex w-full items-center justify-between mb-4">
            <h2 className="font-jost font-bold text-2xl text-[#1D1F2A]">
              Top service providers
            </h2>
            <a
              href=""
              className="font-mulish font-bold text-sm md:text-lg uppercase"
            >
              see all
            </a>{" "}
          </div>{" "}
        </div>
      </main>
    );
  }
}

export default Home;
