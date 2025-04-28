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
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
