import React from "react";
import Footermenu from "../components/footermenu";
import Mainheader from "../components/mainheader";
import MenuItem from "../components/MenuItem";
import { allCategories } from "../data";

function Allcategory() {
  return (
    <>
      <Mainheader title="ALL CATEGORY" />
      <section className="h-screen bg-gray-300">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-y-10 place-items-center max-h-screen bg-gray-300 p-4">
          {allCategories.map((item) => (
            <MenuItem
              key={item.title}
              image={item.image}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </section>
      <Footermenu />
    </>
  );
}

export default Allcategory;
