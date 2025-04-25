// import React, {useState} from 'react'
// import Mainheader from '../components/mainheader'
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { FaFacebook, FaTwitter, FaInstagram, FaHeadphones } from "react-icons/fa";
// import { BsWhatsapp } from "react-icons/bs";



// const faqs = {
//     General: [
//       {
//         question: "How do I manage my notifications?",
//         answer:
//           'To manage notifications, go to "Settings," select "Notification Settings," and customize your preferences.',
//       },
//       {
//         question: "How do I start a guided meditation session?",
//         answer: "",
//       },
//       {
//         question: "How do I join a support group?",
//         answer: "",
//       },
//       {
//         question: "Is my data safe and private?",
//         answer: "",
//       },
//     ],
//     Account: [
//         {
//             question: "How do I start a guided meditation session?",
//             answer: "",
//           },
//           {
//             question: "How do I join a support group?",
//             answer: "",
//           },
//     ],
//     Payment: [
//         {
//             question: "Is my data safe and private?",
//             answer: "",
//           },
//     ],
//     Service: [
//         {
//             question: "How do I start a guided meditation session?",
//             answer: "",
//           },
//     ],
//   };
  
// //   const tabs = ["General", "Account", "Payment", "Service"];

// const HelpCenter = () => {
//     const [activeTab, setActiveTab] = useState("General");
//     // const [activeView, setActiveView] = useState("faq"); // "faq" or "contact"
//     const [openIndex, setOpenIndex] = useState(null);
//     const [tab, setTab] = useState("faq");

//     // const toggleIndex = (index) => {
//     //     setOpenIndex(openIndex === index ? null : index);
//     //   };

//         const contactContent = (
//     <div className="space-y-3 p-4">
//       <ContactItem icon={<FaHeadphones />} text="Customer Services" />
//       <ContactItem icon={<BsWhatsapp />} text="WhatsApp" />
//       <ContactItem icon={<FaFacebook />} text="Facebook" />
//       <ContactItem icon={<FaTwitter />} text="Twitter" />
//       <ContactItem icon={<FaInstagram />} text="Instagram" />
//     </div>
//   );

//   return (
//     // faqFAQ
//     <div className='min-h-[100dvh] w-full bg-[#d9d9d9]'>
//        <Mainheader title="HELP CENTER" />
//        <div className="flex ">
//          <button
//            onClick={() => setTab("faq")}
//            className={`flex-1 text-center py-3 font-semibold ${
//              tab === "faq" ? "bg-white text-black border-b-2 border-purple-500" : "bg-gray-200"
//            }`}
//          >
//            faqFAQ
//          </button>
//          <button
//            onClick={() => setTab("contact")}
//            className={`flex-1 text-center py-3 font-semibold ${
//              tab === "contact" ? "bg-white text-black border-b-2 border-purple-500" : "bg-gray-200"
//            }`}
//          >
//            CONTACT US
//          </button>
//          {tab === "faq" ? faqs : contactContent}
//   </div>

//        {/* Filter Buttons */}
//        <div className="flex justify-center items-center mt-4 gap-2 mb-6 flex-wrap ">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-full border ${
//               activeTab === tab
//                 ? "bg-black text-white"
//                 : "border-black text-black"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//         {/* Accordion */}
//       <div className="space-y-4 p-3">
//         {faqs[activeTab].map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow px-4 py-3 cursor-pointer"
//             onClick={() => toggleIndex(index)}
//           >
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-semibold">{item.question}</span>
//               {openIndex === index ? (
//                 <FaChevronUp className="text-gray-600 text-xs" />
//               ) : (
//                 <FaChevronDown className="text-gray-600 text-xs" />
//               )}
//             </div>

//             {openIndex === index && item.answer && (
//               <p className="text-sm text-gray-900 font-semibold mt-2">{item.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
      


      
//     </div>
//   )
// }

// function ContactItem({ icon, text }) {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
//       <div className="text-xl">{icon}</div>
//       <div className="font-medium">{text}</div>
//     </div>
//   );
// }

// export default HelpCenter



// // import React, { useState } from "react";
// // import { FaFacebook, FaTwitter, FaInstagram, FaHeadphones } from "react-icons/fa";
// // import { BsWhatsapp } from "react-icons/bs";

// // export default function SupportPage() {
// //   const [tab, setTab] = useState("faq");

// //   const faqContent = (
// //     <div className="space-y-3 p-4">
// //       {[
// //         {
// //           question: "How do I manage my notifications?",
// //           answer:
// //             'To manage notifications, go to "Settings," select "Notification Settings," and customize your preferences.',
// //         },
// //         {
// //           question: "How do I start a guided meditation session?",
// //           answer: "",
// //         },
// //         {
// //           question: "How do I join a support group?",
// //           answer: "",
// //         },
// //         {
// //           question: "How do I manage my notifications?",
// //           answer: "",
// //         },
// //         {
// //           question: "Is my data safe and private?",
// //           answer: "",
// //         },
// //       ].map((item, index) => (
// //         <div key={index} className="bg-white p-4 rounded-xl shadow">
// //           <div className="font-medium">{item.question}</div>
// //           {item.answer && <div className="text-sm text-gray-600 mt-2">{item.answer}</div>}
// //         </div>
// //       ))}
// //     </div>
// //   );

// //   const contactContent = (
// //     <div className="space-y-3 p-4">
// //       <ContactItem icon={<FaHeadphones />} text="Customer Services" />
// //       <ContactItem icon={<BsWhatsapp />} text="WhatsApp" />
// //       <ContactItem icon={<FaFacebook />} text="Facebook" />
// //       <ContactItem icon={<FaTwitter />} text="Twitter" />
// //       <ContactItem icon={<FaInstagram />} text="Instagram" />
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gray-200">
// //       {/* Tabs */}
// //       <div className="flex">
// //         <button
// //           onClick={() => setTab("faq")}
// //           className={`flex-1 text-center py-3 font-semibold ${
// //             tab === "faq" ? "bg-white text-black border-b-2 border-purple-500" : "bg-gray-200"
// //           }`}
// //         >
// //           faqFAQ
// //         </button>
// //         <button
// //           onClick={() => setTab("contact")}
// //           className={`flex-1 text-center py-3 font-semibold ${
// //             tab === "contact" ? "bg-white text-black border-b-2 border-purple-500" : "bg-gray-200"
// //           }`}
// //         >
// //           CONTACT US
// //         </button>
// //       </div>

// //       {/* Content */}
// //       {tab === "faq" ? faqContent : contactContent}
// //     </div>
// //   );
// // }

// // function ContactItem({ icon, text }) {
// //   return (
// //     <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
// //       <div className="text-xl">{icon}</div>
// //       <div className="font-medium">{text}</div>
// //     </div>
// //   );
// // }


import React, { useState } from "react";
import Mainheader from "../components/mainheader";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaHeadphones,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function SupportScreen() {
  const [tab, setTab] = useState("faq");
  const [faqCategory, setFaqCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ["General", "Account", "Payment", "Service"];

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
        question: "How do I manage my notifications?",
        answer: "",
      },
      {
        question: "Is my data safe and private?",
        answer: "",
      },
    ],
    Account: [
        {
            question: "How do I start a guided meditation session?",
            answer: "",
          },
    ],
    Payment: [
        {
            question: "Is my data safe and private?",
            answer: "",
          },
    ],
    Service: [
        {
            question: "How do I manage my notifications?",
            answer: "",
          },
    ],
  };

  const contacts = [
    { icon: <FaHeadphones />, label: "Customer Services" },
    { icon: <BsWhatsapp />, label: "WhatsApp" },
    { icon: <FaFacebook />, label: "Facebook" },
    { icon: <FaTwitter />, label: "Twitter" },
    { icon: <FaInstagram />, label: "Instagram" },
  ];

  return (
    <div className="min-h-screen bg-gray-200 font-sans">
         <Mainheader title="HELP CENTER" />
      {/* Header Tabs */}
      <div className="flex">
        <button
          onClick={() => setTab("faq")}
          className={`flex-1 py-3 pt-6 text-center font-semibold text-sm ${
            tab === "faq"
              ? "bg-white border-b-2 border-purple-500"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          FAQ
        </button>
        <button
          onClick={() => setTab("contact")}
          className={`flex-1 py-3 pt-6 text-center font-semibold text-sm ${
            tab === "contact"
              ? "bg-white border-b-2 border-purple-500"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          CONTACT US
        </button>
      </div>

      {tab === "faq" ? (
        <div className="p-4">
          {/* Category Filter Buttons */}
          <div className="flex justify-center items-center  gap-2 overflow-x-auto pb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFaqCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-4 py-3 rounded-full text-sm font-medium border ${
                  faqCategory === cat
                    ? "bg-black text-white"
                    : "border-black text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mt-4">
            {faqs[faqCategory].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">{item.question}</p>
                  {openIndex === index ? (
                    <FaChevronUp className="text-gray-500 text-xs" />
                  ) : (
                    <FaChevronDown className="text-gray-500 text-xs" />
                  )}
                </div>
                {openIndex === index && item.answer && (
                  <p className="text-sm text-gray-600 mt-2">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4 space-y-4">
          {contacts.map((c, index) => (
            <div
              key={index}
              className="bg-white flex items-center gap-4 p-4 rounded-xl shadow"
            >
              <div className="text-xl">{c.icon}</div>
              <p className="font-medium text-sm">{c.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

