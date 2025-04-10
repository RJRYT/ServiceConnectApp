import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/header/Logo.png";
import profile from "../assets/header/profile.png";
import UserProfileMenu from "./UserProfileMenu";
import { IoLogOutOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function HomeHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const options = [
    { id: 1, item: "My profile" },
    { id: 2, item: "Home" },
    { id: 3, item: "Bookings" },
    { id: 4, item: "Active Services" },
    { id: 5, item: "Services" },
    { id: 6, item: "Complaints" },
    { id: 7, item: "Message" },
    { id: 8, item: "Settings" },
    { id: 9, item: "Transaction" },
    { id: 10, item: "History" },
    { id: 11, item: "Terms & Conditions" },
    { id: 12, item: "About Us" },
    { id: 13, item: "Invite a Friend" },
  ];

  return (
    <header className="relative">
      {/* Top Navbar */}
      <div className=" w-full bg-[#1D1F2A] flex items-center justify-between px-4 py-6 md:px-24 md:py-6 text-white">
        <div className="flex">
          {/* Hamburger menu */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? (
              <IoMdClose size={28} />
            ) : (
              <IoMenuOutline size={28} />
            )}
          </button>
          <div className="flex justify-center items-center gap-4">
            <img className="h-8 hidden md:flex" src={Logo} alt="logo" />
            <div className="text-xl md:text-2xl font-semibold uppercase min-w-fit mx-2">
              service connect
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex gap-4 md:gap-6 md:justify-center items-center justify-end">
          <a className="flex md:hidden" href="">
            <IoNotificationsOutline size={36} />
          </a>
          {/* user profile*/}
          <UserProfileMenu
            name="Stone Stellar"
            membership="prime member"
            profilePic={profile}
          />

          <a
            href="#"
            className="hidden md:flex justify-center items-center gap-3"
          >
            logout
            <IoLogOutOutline size={28} />
          </a>
        </nav>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-1/2 left-1/2 h-auto z-50 w-76 bg-black/80 backdrop-blur-sm text-white rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
          isSidebarOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-4 flex-col items-center">
          <button
            className="flex w-full justify-end self-end"
            onClick={toggleSidebar}
          >
            <IoMdClose size={18} />
          </button>
          <div className="px-4 flex self-start">
            {/* user profile on sidebar */}
            <UserProfileMenu
              isSidebarOpen={isSidebarOpen}
              name="Stone Stellar"
              status="online"
              id="cui02"
              profilePic={profile}
            />
          </div>
        </div>

        <div className="px-6">
          {options.map((option) => (
            <li
              className="list-none my-1 py-1 px-2 cursor-pointer hover:bg-gray-400 text-white rounded-lg font-mulish font-medium"
              key={option.id}
            >
              <Link>{option.item}</Link>
            </li>
          ))}
          <Link to="/" className=" my-4 flex justify-center items-center gap-3">
            logout
            <IoLogOutOutline size={28} />
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-white/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
    </header>
  );
}

export default HomeHeader;
