import React from "react";
import Message from "./Message";

const Messages = ({ messages }) => {
  return (
    <div className="flex-1 p-4 bg-white border-b border-gray-300 overflow-y-auto">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))
      ) : (
        <div className="text-gray-500 text-center">No messages</div>
      )}
    </div>
  );
};

export default Messages;
