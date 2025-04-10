import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import LeftSidebar from "../components/LeftSidebar";
import Footermenu from "../components/footermenu";

function DashBoard({ children }) {
  return (
    <>
      <HomeHeader />
      <div className="w-full h-screen grid grid-cols-12 ">
        {/* left sidebar */}
        <aside className="hidden md:flex md:col-span-2 bg-[#1D1F2A] py-16 px-4 opacity-90">
          <LeftSidebar />
        </aside>
        {/* Outlet */}
        <Outlet />
        <Footermenu />
        {/* right sidebar */}
        <aside className="hidden md:flex md:col-span-2 bg-[#1D1F2A] opacity-90"></aside>
      </div>
    </>
  );
}

export default DashBoard;
