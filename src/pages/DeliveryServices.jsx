import React from "react";
import Footermenu from "../components/footermenu";
import Mainheader from "../components/mainheader";
import MenuItem from "../components/MenuItem";
import { deliveryServices } from "../data";

function Allcategory() {
  return (
    <>
      <Mainheader title="DELIVERY SERVICES" />
      <section className="h-screen bg-gray-300">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-y-10place-items-center max-h-screen bg-gray-300 p-4">
          {deliveryServices.map((item) => (
            <MenuItem key={item.title} image={item.image} title={item.title} />
          ))}
        </div>
      </section>
      <Footermenu />
    </>
  );
}

export default Allcategory;
