import React from "react";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiSquarePlus, CiSquareMinus, CiSquareRemove } from "react-icons/ci";

function InboxCallPreview({ profile, name, callType, date }) {
  let CallIcon;
  let iconColor;

  switch (callType) {
    case "incoming":
      CallIcon = CiSquarePlus;
      iconColor = "blue";
      break;
    case "outgoing":
      CallIcon = CiSquareMinus;
      iconColor = "green";
      break;
    case "missed":
      CallIcon = CiSquareRemove;
      iconColor = "red";
      break;
    default:
      CallIcon = CiSquareRemove;
      iconColor = "gray";
  }

  return (
    <a className="w-full flex p-4 items-center shadow-md shadow-gray-700 justify-between gap-4 cursor-pointer">
      {/* caller profile image */}
      <img
        className="h-14 w-14 rounded-full border-3 border-white shadow-md shadow-black object-cover"
        src={profile}
        alt="profile"
      />

      {/* caller name and details */}
      <div className="flex flex-col flex-grow overflow-hidden">
        <h2 className="font-jost font-bold truncate">{name}</h2>
        <div className="flex items-center gap-2 font-jost font-medium text-gray-600 text-xs">
          <CallIcon color={iconColor} />
          <p className="capitalize">{callType}</p>
          <span>|</span>
          <p>{date}</p>
        </div>
      </div>

      <div>
        <PiPhoneCallLight size={30} />
      </div>
    </a>
  );
}

export default InboxCallPreview;
