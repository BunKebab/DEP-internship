import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col w-screen h-screen">
          <Navbar />
          <Routes></Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
