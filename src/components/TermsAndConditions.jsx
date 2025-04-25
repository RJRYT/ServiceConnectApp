import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#0F0F2A] text-white p-3 sm:p-4 md:p-4 lg:p-8 mb-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1C1C23] transition duration-200"
          >
            <IoIosArrowBack className="w-7 h-7 sm:w-8 sm:h-10" />
          </button>

          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">TERMS & CONDITIONS</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          <section>
            <h2 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">Condition & Attending</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded-full w-full"></div>
              <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded-full w-full"></div>
              <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
            </div>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">Terms & Use</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="h-4 bg-gray-200 rounded-full w-full"></div>
              <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
              <div className="h-4 bg-gray-200 rounded-full w-full"></div>
              <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
            </div>
          </section>

          <section>
            <div className="space-y-3 sm:space-y-4">
              <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded-full w-full"></div>
              <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
