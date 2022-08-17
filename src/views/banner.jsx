import React from "react";
import { Link } from "react-router-dom";
const logo =
  "https://images.unsplash.com/photo-1660722130895-21f0c850dc12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

export default function banner() {
  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <div className="flex items-center h-full w-full">
          <img src={logo} alt="firebase" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
