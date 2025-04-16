import React from "react";

import DateTimeInput from "./DateTimeInput";
import Submitbutton from "./submitbutton";

function Availability() {
  return (
    <div className="my-2">
      <h3 className="font-mulish font-bold">Availability</h3>
      <div>
        <p className="font-mulish font-medium text-gray-600 my-2">From</p>
        <div className="flex justify-evenly gap-2">
          <DateTimeInput type="date" label="Date" />
          <DateTimeInput type="time" label="Time" />
        </div>
        <p className="font-mulish font-medium text-gray-600 my-2">To</p>
        <div className="flex justify-evenly gap-2">
          <DateTimeInput type="date" label="Date" />
          <DateTimeInput type="time" label="Time" />
        </div>
      </div>
      <div className="w-full my-3 flex justify-center self-center">
        <Submitbutton title="Reschedule Appointment" />
      </div>
    </div>
  );
}

export default Availability;
