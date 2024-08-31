import React, { useState } from "react";
import socket from "../socket";

const MessageBox = ({ userName }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", { text: message, sender: userName });
      setMessage("");
    }
  };

  return (
    <form className="flex p-3 bg-gray-100 gap-3">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="flex-1 p-3 border border-gray-600 rounded-lg text-gray-600"
      />
      <button
        onClick={sendMessage}
        className="p-3 bg-blue-600 text-white rounded-lg"
      >
        Send
      </button>
    </form>
  );
};

export default MessageBox;
