import React from "react";

function ComplaintTitle({ complaint }) {
  return (
    <div className="flex flex-col">
      <h3 className="font-medium">Title</h3>
      <p className="ml-4">{complaint.title}</p>
      <h3 className="font-medium">Description</h3>
      <p className="ml-4">{complaint.description}</p>
    </div>
  );
}

export default ComplaintTitle;
