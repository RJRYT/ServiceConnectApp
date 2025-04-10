import React from "react";
import { Link } from "react-router-dom";

function LeftSidebar() {
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
    <div>
      {options.map((option) => (
        <li
          className="list-none my-1 py-1 px-7 cursor-pointer hover:bg-gray-100 hover:text-black text-white rounded-lg font-mulish font-medium"
          key={option.id}
        >
          <Link>{option.item}</Link>
        </li>
      ))}
    </div>
  );
}

export default LeftSidebar;
