import React, { useState } from "react";
import "./App.css";
import StoreFront from "./components/StoreFront";
import Sidebar from "./components/Sidebar";

function App() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="app flex h-screen border">
      <div
        className={` ${
          open ? "w-full md:w-72" : "w-20"
        } bg-teal-400 h-screen p-5  pt-8 relative duration-300`}
      >
        <svg
          className={`absolute cursor-pointer -right-4 top-8 w-9 h-9 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
          fill="white"
          stroke="#2DD4BF"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
        <div className="flex gap-x-4 items-center">
          <img
            src={require("./assets/images/gift-filled.png")}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Bookpresent
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={` ${
          open ? "invisible md:visible container" : "container"
        } border h-screen`}
      >
        <StoreFront />
      </div>
    </div>
  );
}

export default App;
