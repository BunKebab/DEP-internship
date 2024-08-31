import React, { useState, useEffect } from "react";
import socket from "../socket";
import { useNavigate } from "react-router-dom";

import Messages from "../components/Messages";
import MessageBox from "../components/MessageBox";

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) {
      setUserName(name);
    } else {
      navigate("/");
    }

    socket.on("message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 border border-gray-300 shadow-lg">
      <Messages messages={messages} />
      <MessageBox userName={userName} />
    </div>
  );
};

export default Chat;
