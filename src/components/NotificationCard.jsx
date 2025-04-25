import React, { useState } from "react";
import { TbCategory2, TbWallet } from "react-icons/tb";
import { IoTicketOutline } from "react-icons/io5";
import { RiUser6Line } from "react-icons/ri";

function NotificationCard({ title, description, type }) {
  const [expanded, setExpanded] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      case "alert":
        return <TbCategory2 size={32} />;
      case "financial":
        return <TbWallet size={32} />;
      case "offers":
        return <IoTicketOutline size={32} />;
      case "system":
        return <RiUser6Line size={32} />;
      default:
        return <TbCategory2 size={32} />;
    }
  };

  return (
    <div
      className="px-4 py-5 flex items-center gap-3 bg-white rounded-2xl shadow-lg shadow-gray-700 mb-4 cursor-pointer transition-all duration-300 ease-in-out"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-3 rounded-full bg-blue-100">{getIcon(type)}</div>
      <div className="flex flex-col">
        <h2 className="font-jost text-lg font-bold">{title}</h2>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-32 opacity-100 mt-1" : "max-h-0 opacity-0"
          }`}
        >
          <p className="font-mulish font-semibold text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
