import React, {useState} from 'react'
import Mainheader from '../components/mainheader'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const tabs = ["General", "Account", "Payment", "Service"];

const faqs = {
    General: [
      {
        question: "How do I manage my notifications?",
        answer:
          'To manage notifications, go to "Settings," select "Notification Settings," and customize your preferences.',
      },
      {
        question: "How do I start a guided meditation session?",
        answer: "",
      },
      {
        question: "How do I join a support group?",
        answer: "",
      },
      {
        question: "Is my data safe and private?",
        answer: "",
      },
    ],
    Account: [],
    Payment: [],
    Service: [],
  };
  

const HelpCenter = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [activeView, setActiveView] = useState("faq"); // "faq" or "contact"
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

  return (
    <div className='min-h-[100dvh] w-full bg-[#d9d9d9]'>
       <Mainheader title="HELP CENTER" />
       <div className="flex justify-center items-center  border-gray-400 pb-3  mb-2">
        {/* <button className="text-xs font-semibold text-gray-700">faqFAQ</button>
        <button className="text-xs font-semibold text-white bg-gray-400 px-4 py-2 rounded-md">
          CONTACT US
        </button> */}
        <button
          onClick={() => setActiveView("faq")}
          className={`text-lg font-semibold py-3 ${
            activeView === "faq" ? " border-b border-violet-700 " : ""
          }`}
        >
          faqFAQ
        </button>
        <button
          onClick={() => setActiveView("contact")}
          className={`text-lg font-semibold px-4 py-2  ${
            activeView === "contact"
              ? "border-b border-violet-700 ml-30 "
              :"border-b border-violet-700  "
          }`}
        >
          CONTACT US
        </button>
      </div>

       {/* Filter Buttons */}
       <div className="flex gap-2 mb-6 flex-wrap ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full border ${
              activeTab === tab
                ? "bg-black text-white"
                : "border-black text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

        {/* Accordion */}
      <div className="space-y-4 p-3">
        {faqs[activeTab].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow px-4 py-3 cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">{item.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-600 text-xs" />
              ) : (
                <FaChevronDown className="text-gray-600 text-xs" />
              )}
            </div>

            {openIndex === index && item.answer && (
              <p className="text-sm text-gray-600 mt-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default HelpCenter
