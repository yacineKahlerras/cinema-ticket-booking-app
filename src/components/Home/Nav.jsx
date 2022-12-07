import React, { useState } from "react";
import downArrow from "../../assets/caret-down-fill.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  const [sidemenuActive, setSidemenuActive] = useState(false);

  function ShowSidemenu() {
    setSidemenuActive(!sidemenuActive);
  }

  return (
    <nav>
      <div className="nav-center">
        {/* logo */}
        <div className="logo"></div>

        {/* nav links */}
        <ul className="nav-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>
              Rooms <img src={downArrow} alt="arrow icon" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>About Us</Link>
          </li>
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
      </div>
    </nav>
  );
}
