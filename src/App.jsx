import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/react.svg";
import {
  FiLock,
  FiLogIn,
  FiLogOut,
  FiPhone,
  FiX,
  FiXCircle,
  FiUser,
  FiUpload,
  FiUserCheck,
  FiUserPlus,
  FiUserX,
  FiThumbsUp,
  FiThumbsDown,
  FiToggleLeft,
  FiToggleRight,
  FiSun,
  FiShoppingCart,
  FiShoppingBag,
  FiSettings,
  FiSearch,
  FiMail,
  FiUsers,
} from "react-icons/fi";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import Login from "./views/login";

function App() {
  return (
    <div className="App ">
      {/* create navbar responsive  */}
      <nav className="flex  items-start flex-col justify-start  md:flex-row  md:justify-between md:items-center  p-4 bg-gray-50 shadow-lg">
        <div className="flex items-start ml-3 md:ml-0  md:items-center ">
          <img
            src={logo}
            alt=""
            className="h-8 w-8  flex items-center justify-center"
          />
          <h1 className="ml-2 text-xl font-bold">React + Firebase</h1>
        </div>
        <div className="flex items-start flex-col md:flex-row md:items-center">
          <Link to="/" className="px-4 py-2 text-gray-500">
            Home
          </Link>
          <Link to="/blog" className="text-gray-500 px-4 py-2">
            Blog
          </Link>
          <Link to="/about" className="px-4 py-2 text-gray-500">
            About
          </Link>
          <Link
            to="/login"
            className="flex gap-1 items-center flex-row px-4 py-1 bg-slate-100 
            text-blue-500 rounded-md shadow-md border ml-3 md:ml-0 border-gray-200"
          >
            <FiUsers className="text-blue-500 font-extrabold text-xl" />
            signin / signup
          </Link>
        </div>
      </nav>
      {/* create routes */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route
            path="*"
            element={
              <div className="text-5xl my-10 font-extrabold text-red-500">
                404 Not Found
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
