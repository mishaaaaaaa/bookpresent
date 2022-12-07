import React, { useState } from "react";
import "./App.css";
import StoreFront from "./components/StoreFront";
import Sidebar from "./components/Sidebar";
import { board, table, info, chat, settings } from "./assets/icons";

function App() {
  const [open, setOpen] = useState(true);
  function handleToggleMenu(open: boolean) {
    setOpen(!open);
  }

  return (
    <div className="app flex min-h-full border border-blue-300">
      <Sidebar isOpen={open} onMenuToggle={handleToggleMenu} />
      <div
        className={` ${
          open ? "invisible md:visible container" : "container"
        } border-blue-600 h-screen`}
      >
        <StoreFront />
      </div>
    </div>
  );
}

export default App;
