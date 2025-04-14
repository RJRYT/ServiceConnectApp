import React from "react";

function UserProfileMenu({
  name,
  membership,
  profilePic,
  isSidebarOpen,
  id,
  status,
}) {
  return (
    <a
      href="#"
      className={`${
        isSidebarOpen
          ? " flex flex-row-reverse justify-center items-center gap-3"
          : "flex justify-center items-center gap-3"
      }`}
    >
      <div
        className={`${
          isSidebarOpen
            ? "flex flex-col justify-center items-start"
            : "hidden md:flex md:flex-col justify-center items-center"
        }`}
      >
        <h2 className="text-lg text-pink-600">{name}</h2>
        {isSidebarOpen ? (
          <p className="text-sm uppercase text-yellow-300">Uid: {id}</p>
        ) : (
          <p className="text-[12px]">{membership}</p>
        )}
        {isSidebarOpen && (
          <p className="text-sm uppercase text-green-500">{status}</p>
        )}
      </div>

      {/* Profile Picture */}
      <img
        className={`${
          isSidebarOpen
            ? "border-2 rounded-full border-pink-600 h-12"
            : "border-2 rounded-full border-pink-600 h-10 md:h-12"
        }`}
        src={profilePic}
        alt="Profile"
      />
    </a>
  );
}

export default UserProfileMenu;
