import React, { useRef, useState } from "react";

export default function Nav() {
  const [sidemenuActive, setSidemenuActive] = useState(false);

  function ShowSidemenu() {
    setSidemenuActive(!sidemenuActive);
  }

  return (
    <nav>
      {/* logo */}
      <div className="logo"></div>

      {/* nav links */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Rooms</li>
        <li>About Us</li>
      </ul>

      {/* hamburger menu btn */}
      <button onClick={ShowSidemenu} className="hamburger">
        <div id="nav-icon2" className={`${sidemenuActive ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </nav>
  );
}
