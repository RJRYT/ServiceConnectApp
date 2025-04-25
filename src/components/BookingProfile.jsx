import React from "react";

function BookingProfile({ name, service, image }) {
  return (
<div className="my-2 flex gap-3 w-[98%] ml-0 md:ml-4">
    <img
        className="h-18 w-18 object-cover rounded-full"
        src={image}
        alt="service-provider-image"
      />
      <div className="flex flex-col justify-items-start justify-center font-mulish">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="font-bold text-neutral-600 text-xl">{service}</p>
      </div>
    </div>
  );
}

export default BookingProfile;
