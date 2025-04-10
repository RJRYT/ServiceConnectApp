import { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const images = [
  "https://source.unsplash.com/random/800x400?nature",
  "https://source.unsplash.com/random/800x400?water",
  "https://source.unsplash.com/random/800x400?forest",
  "https://source.unsplash.com/random/800x400?city",
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Optional: auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
      <div className="w-full h-full z-10 absolute  flex  items-center justify-between text-white font-mulish p-4 md:p-10">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-sm">25% OFF*</h3>
          <h2 className=" font-bold text-2xl">Today's Special</h2>
          <p className="text-xs font-light">
            Get a Discount for Every Course only Valid for Today!
          </p>
        </div>
        <Link to="" className="text-xs sm:text-lg">
          See all
        </Link>
      </div>
      {/* Image Track */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-full flex-shrink-0 object-cover h-40 sm:h-80"
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <FaChevronLeft />
      </button> */}

      {/* <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <FaChevronRight />
      </button> */}

      {/* Dots */}
      <div className="absolute transition-all bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              current === index ? "bg-[#FAC840] w-6" : "bg-white/40 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
