// src/components/Message.js
import React from "react";

const Message = ({ text, sender }) => {
  return (
    <div className="mb-2 p-2 bg-gray-200 rounded-md">
      <div className="font-semibold text-gray-700">{sender}</div>
      <div>{text}</div>
    </div>
  );
};

export default Message;
