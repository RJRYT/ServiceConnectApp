import React from "react";
import HomeHeader from "../components/HomeHeader";
import Input from "../components/Input";
import ImageCarousel from "../components/Carousel";
import { allCategories } from "./../data";
import HomeMenuItems from "../components/HomeMenuItems";
import LeftSidebar from "../components/LeftSidebar";
import ServiceCard from "../components/ServiceCard";

function Home() {
  const popularServices = ["All", "Plumbing", "Electrical", "Health"];
  return (
    <>
      <HomeHeader />
      <div className="w-full h-screen grid grid-cols-12 ">
        {/* left sidebar */}
        <aside className="hidden md:flex md:col-span-2 bg-[#1D1F2A] py-16 px-4 opacity-90">
          <LeftSidebar />
        </aside>
        {/* main */}
        <main className="col-span-12 md:col-span-8 bg-[#D9D9D9] flex flex-col items-center px-4 sm:px-22 py-10">
          <Input
            type="text"
            placeholder="search"
            className="min-w-[320px] max-h-[48px]"
          />
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
          <div className="w-full my-4">
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
            <div className="w-full h-auto my-4 flex flex-nowrap overflow-x-auto xl:grid   xl:grid-cols-4  gap-2 gap-y-4 ">
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
        </main>
        {/* right sidebar */}
        <aside className="hidden md:flex md:col-span-2 bg-[#1D1F2A] opacity-90"></aside>
      </div>
    </>
  );
}

export default Home;
