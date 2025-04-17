import React from "react";

import DateTimeInput from "./DateTimeInput";
import Submitbutton from "./submitbutton";
import { TbEdit } from "react-icons/tb";


function Availability() {
  return (
    <div className="my-2">
      <div className="flex gap-2 items-center" >
      <h3 className="font-mulish font-bold ml-0 md:ml-3">Availability</h3>
      <p className="text-[24px]"><TbEdit /></p>
      </div>
      
      <div>
        <p className="font-mulish font-medium text-gray-600 my-2 ml-0 md:ml-3">From</p>
        <div className="flex justify-evenly gap-2">
          <DateTimeInput type="date" label="Date" />
          <DateTimeInput type="time" label="Time" />
        </div>
        <p className="font-mulish font-medium text-gray-600 my-2 ml-0 md:ml-3">To</p>
        <div className="flex justify-evenly gap-2">
          <DateTimeInput type="date" label="Date" />
          <DateTimeInput type="time" label="Time" />
        </div>
      </div>
      <div className="w-full my-3 flex justify-center self-center">
        <Submitbutton title="Conform" />
      </div>
    </div>
  );
}

export default Availability;
