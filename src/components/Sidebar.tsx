import React, { useState } from "react";
import { board, table, info, chat, settings } from "../assets/icons";

type SidebarProps = {
  isOpen: boolean;
  onMenuToggle: any;
};
const Menus = [
  { title: "Dashboard", icon: board },
  { title: "Wishlists", icon: table },
  { title: "About Us", icon: info, gap: true },
  { title: "Contact Us ", icon: chat },
  { title: "Settings", icon: settings },
];
function Sidebar({ isOpen, onMenuToggle }: SidebarProps) {
  return (
    <div
      className={` ${
        isOpen ? "w-full md:w-72" : "w-20"
      } bg-teal-400 h-screen p-5  pt-8 relative duration-300`}
    >
      <svg
        className={`absolute cursor-pointer -right-4 top-8 w-9 h-9 ${
          !isOpen && "rotate-180"
        }`}
        onClick={() => onMenuToggle(isOpen)}
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
          src={require("../assets/images/gift-filled.png")}
          className={`cursor-pointer duration-500 ${
            isOpen && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !isOpen && "scale-0"
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
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
          >
            {Menu.icon}
            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
