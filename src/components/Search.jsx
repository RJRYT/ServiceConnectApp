import React, { useState } from "react";
import fill from "../assets/fill.png";
import search from "../assets/search.png";
import Filter from "../assets/FILTER.png";
import right from "../assets/right.png";

function Search({ setIsSearchOpen }) {
  const [input, setInput] = useState("");
  const [value, setValue] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onAdd = () => {
    if (input.trim() === "") {
      alert("please enter something");
      return;
    }
    setValue([...value, input]);
    setInput("");
    setShowAll(false);
  };

  const removeRecent = (item) => {
    setValue(value.filter((i) => i !== item));
  };

  const seeAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className=" md:max-w-3xl min-h-screen  mx-auto max-w-md  bg-grey-800 py-5">
      <div className="w-full max-w-3x1 flex items-center justify-start mb-4 ">
        <img className="w-6" src={fill} alt="search" />
        <button
          onClick={() => {
            setIsSearchOpen(false);
          }}
          className="text-[#202244] font-semibold text-lg ml-2 cursor-pointer"
        >
          SEARCH
        </button>
      </div>

      <div className="w-full max-w-3x1 relative">
        <img
          className="absolute mx-3 my-5 w-6 cursor-pointer"
          src={search}
          alt="search icon"
        />
        <input
          onChange={onChange}
          value={input}
          type="text"
          placeholder="Search for.."
          className="bg-[#736A68] w-full font-mulish placeholder-white p-5 pl-25 rounded-2xl  bg- shadow-md"
        />
        <img
          onClick={onAdd}
          className="absolute right-2 top-3  w-10"
          src={Filter}
          alt="filter icon"
        />
      </div>

      <div class="flex justify-between items-center text-lg font-semibold mt-9 ">
        <h2 class="font-Jost text-[#202244]  text-lg">Recents Search</h2>

        <div class="flex items-center space-x-2 cursor-pointer ">
          <p onClick={seeAll} classname="text-[#1D1F2A] text-sm font-medium">
            {showAll ? " Close" : "SEE ALL"}
          </p>
          <img src={right} alt="Arrow" class="w-2 h-4" />
        </div>
      </div>

      <div className="mt-6">
        {showAll && (
          <ul>
            {value.length === 0 ? (
              <li className="text-gray-500">No recent searches</li>
            ) : (
              value.map((item, index) => (
                <li
                  className="text-[#A0A4AB] text-lg font-mulish font-bold bg-white  pt-5 flex justify-between items-center"
                  key={index}
                >
                  {item}
                  <span
                    onClick={() => removeRecent(item)}
                    className="text-[#472D2D] font-bold text-lg cursor-pointer "
                  >
                    X
                  </span>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
