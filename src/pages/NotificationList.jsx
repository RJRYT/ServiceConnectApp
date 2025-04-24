import React from "react";
import Mainheader from "../components/mainheader";
import NotificationCard from "../components/NotificationCard";

function NotificationList() {
  const notifications = [
    {
      title: "Account setup successfull",
      description: "Your account has been created",
      date: "2025-04-20",
      time: "10:30 AM",
      type: "system",
    },
    {
      title: "New Category Course.....!",
      description: "The new 3D design course is available.",
      date: "2025-04-24",
      time: "01:00 AM",
      type: "alert",
    },
    {
      title: "Today's special offers",
      description: "You have made a course payment",
      date: "2025-04-23",
      time: "02:00 PM",
      type: "offers",
    },
    {
      title: "Credit card connected",
      description: "Credit card has been linked",
      date: "2025-04-23",
      time: "05:45 PM",
      type: "financial",
    },
  ];

  const getGroupedNotifications = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const formatDate = (d) => new Date(d).toDateString();
    const todayStr = today.toDateString();
    const yesterdayStr = yesterday.toDateString();

    const groups = {
      Today: [],
      Yesterday: [],
      Others: {}, // key: date string, value: array
    };

    notifications.forEach((notif) => {
      const notifDateStr = formatDate(notif.date);

      if (notifDateStr === todayStr) {
        groups.Today.push(notif);
      } else if (notifDateStr === yesterdayStr) {
        groups.Yesterday.push(notif);
      } else {
        if (!groups.Others[notifDateStr]) {
          groups.Others[notifDateStr] = [];
        }
        groups.Others[notifDateStr].push(notif);
      }
    });

    return groups;
  };

  const grouped = getGroupedNotifications();

  // Sort older dates descending
  const sortedOtherDates = Object.keys(grouped.Others).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <>
      <Mainheader title="NOTIFICATIONS" />
      <div className="p-4 min-h-screen bg-[#D9D9DB] space-y-6">
        {grouped.Today.length > 0 && (
          <div>
            <h2 className="font-jost font-bold mb-2">Today</h2>
            {grouped.Today.map((item, index) => (
              <NotificationCard
                key={index}
                title={item.title}
                description={item.description}
                type={item.type}
              />
            ))}
          </div>
        )}

        {grouped.Yesterday.length > 0 && (
          <div>
            <h2 className="font-jost font-bold mb-2">Yesterday</h2>
            {grouped.Yesterday.map((item, index) => (
              <NotificationCard
                key={index}
                title={item.title}
                description={item.description}
                type={item.type}
              />
            ))}
          </div>
        )}

        {sortedOtherDates.map((date) => (
          <div key={date}>
            <h2 className="font-jost font-bold mb-2">{date}</h2>
            {grouped.Others[date].map((item, index) => (
              <NotificationCard
                key={index}
                title={item.title}
                description={item.description}
                type={item.type}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default NotificationList;
