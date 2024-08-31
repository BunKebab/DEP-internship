import React, { useState } from "react";
import socket from "../socket";

const MessageBox = ({ userName }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("message", { text: message, sender: userName });
      setMessage("");
    }
  };

  return (
    <div className="flex p-4 border-t border-gray-300 bg-gray-100">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="flex-1 p-2 border border-gray-300 rounded-l-md"
      />
      <button
        onClick={sendMessage}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default MessageBox;
