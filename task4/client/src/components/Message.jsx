import React from "react";

const Message = ({ text, sender }) => {
  return (
    <div className="mb-3 p-3 bg-white rounded-lg">
      <div className="font-semibold text-gray-600">{sender}</div>
      <div>{text}</div>
    </div>
  );
};

export default Message;
