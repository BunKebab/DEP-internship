import React, { useRef, useEffect } from "react";
import Message from "./Message";

const Messages = ({ messages }) => {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 p-3 bg-gray-100 overflow-y-auto">
      {messages.length > 0 ? (
        <>
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} sender={msg.sender} />
          ))}
          <div ref={endOfMessagesRef} />
        </>
      ) : (
        <div className="text-gray-600 text-center">No messages</div>
      )}
    </div>
  );
};

export default Messages;
