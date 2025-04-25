import React from "react";

function InboxChatPreview({
  profile,
  name,
  message,
  unreadMessageCount,
  messageTime,
}) {
  return (
    <a className="w-full flex p-4 items-center shadow-md shadow-gray-700 justify-between gap-4 cursor-pointer">
      {/* sender profile image */}
      <img
        className="h-14 w-14 rounded-full border-3 border-white shadow-md shadow-black object-cover"
        src={profile}
        alt="profile"
      />

      {/* sender name and message preview */}
      <div className="flex flex-col flex-grow overflow-hidden">
        <h2 className="font-jost font-bold truncate">{name}</h2>
        <p className="font-mulish font-bold text-gray-600 truncate">
          {message}
        </p>
      </div>

      {/* unread messages and message time */}
      <div className="flex flex-col justify-center items-center gap-1 flex-shrink-0">
        {unreadMessageCount > 0 && (
          <p className="rounded-full h-6 w-6 flex items-center justify-center bg-black text-white font-mulish font-bold text-sm">
            {unreadMessageCount}
          </p>
        )}
        <p className="font-jost font-bold text-gray-600 text-sm">
          {messageTime}
        </p>
      </div>
    </a>
  );
}

export default InboxChatPreview;
