import React, { useState } from "react";
import Mainheader from "../components/mainheader";
import StatusChangeFilter from "../components/stausChangeBox";
import Footermenu from "../components/footermenu";
import InboxChatPreview from "../components/InboxChatPreview";
import InboxCallPreview from "../components/InboxCallPreview";

function InboxChat() {
  const [selectedStatus, setSelectedStatus] = useState("Ongoing");

  const inboxChatItems = [
    {
      profile: "https://randomuser.me/api/portraits/men/11.jpg",
      name: "Michael Brown",
      message: "Can we reschedule our meeting?",
      unreadMessageCount: 1,
      messageTime: "9:32 AM",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Ava Smith",
      message: "Check out this document I sent!",
      unreadMessageCount: 0,
      messageTime: "Yesterday",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/13.jpg",
      name: "Elijah Garcia",
      message: "Let’s go hiking this weekend!",
      unreadMessageCount: 4,
      messageTime: "Tue",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/14.jpg",
      name: "Amelia Martinez",
      message: "Thanks for your help yesterday.",
      unreadMessageCount: 2,
      messageTime: "Mon",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/15.jpg",
      name: "Oliver Rodriguez",
      message: "Do you have the updated files?",
      unreadMessageCount: 0,
      messageTime: "Sun",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/16.jpg",
      name: "Harper Lewis",
      message: "Meeting starts in 5 mins!",
      unreadMessageCount: 3,
      messageTime: "Sat",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/17.jpg",
      name: "William Walker",
      message: "Let's wrap this up today.",
      unreadMessageCount: 0,
      messageTime: "Fri",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/18.jpg",
      name: "Evelyn Young",
      message: "Had fun chatting earlier!",
      unreadMessageCount: 1,
      messageTime: "Thu",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/19.jpg",
      name: "James King",
      message: "Did you finish the report?",
      unreadMessageCount: 5,
      messageTime: "Wed",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/20.jpg",
      name: "Abigail Wright",
      message: "Let’s call in 10 mins.",
      unreadMessageCount: 0,
      messageTime: "Tue",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/21.jpg",
      name: "Henry Lee",
      message: "Thank you!",
      unreadMessageCount: 0,
      messageTime: "Mon",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/22.jpg",
      name: "Ella Perez",
      message: "Where did you go?",
      unreadMessageCount: 2,
      messageTime: "Sun",
    },
  ];

  const inboxCallItems = [
    {
      profile: "https://randomuser.me/api/portraits/women/21.jpg",
      name: "Emily Carter",
      callType: "incoming",
      date: "Apr 24, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/34.jpg",
      name: "James Allen",
      callType: "outgoing",
      date: "Apr 23, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Olivia Harris",
      callType: "missed",
      date: "Apr 22, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/56.jpg",
      name: "Noah Wilson",
      callType: "incoming",
      date: "Apr 21, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/67.jpg",
      name: "Sophia Martin",
      callType: "outgoing",
      date: "Apr 20, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/78.jpg",
      name: "Liam Moore",
      callType: "missed",
      date: "Apr 19, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/88.jpg",
      name: "Isabella Wright",
      callType: "incoming",
      date: "Apr 18, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/89.jpg",
      name: "Mason Hall",
      callType: "missed",
      date: "Apr 17, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/54.jpg",
      name: "Mia Turner",
      callType: "outgoing",
      date: "Apr 16, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/91.jpg",
      name: "Benjamin Scott",
      callType: "incoming",
      date: "Apr 15, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/25.jpg",
      name: "Charlotte Adams",
      callType: "missed",
      date: "Apr 14, 2025",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/35.jpg",
      name: "Logan Green",
      callType: "outgoing",
      date: "Apr 13, 2025",
    },
  ];

  return (
    <>
      <Mainheader title="CHAT" />
      <div className="bg-gray-300 min-h-screen px-8 ">
        <div className="flex justify-center">
          <StatusChangeFilter
            options={["Chat", "Call"]}
            onChange={(status) => setSelectedStatus(status)}
          />
        </div>

        <div className="h-auto w-full bg-white rounded-xl overflow-hidden">
          {selectedStatus === "Chat"
            ? inboxChatItems.map((item, index) => (
                <InboxChatPreview key={index} {...item} />
              ))
            : inboxCallItems.map((item, index) => (
                <InboxCallPreview key={index} {...item} />
              ))}
        </div>
      </div>
      <Footermenu />
    </>
  );
}

export default InboxChat;
