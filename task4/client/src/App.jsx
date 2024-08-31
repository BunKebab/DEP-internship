import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
