import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavRoomsDropdown from "./NavRoomsDropdown";
import Sidemenu from "./Sidemenu";
import logo from "../../assets/logo.png";

export default function Nav() {
  const [sidemenuActive, setSidemenuActive] = useState(false);

  function ShowSidemenu() {
    setSidemenuActive(!sidemenuActive);
  }

  return (
    <nav className={`${!sidemenuActive ? "hidden-sidemenu" : ""}`}>
      <div className="nav-center">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* nav links */}
        <ul className="nav-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <NavRoomsDropdown />
          </li>
          <li>
            <Link to={"/"}>About Us</Link>
          </li>
          <li>
            <button className="sign-up-btn">sign up</button>
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

      <Sidemenu
        sidemenuActive={sidemenuActive}
        setSidemenuActive={setSidemenuActive}
      />
    </nav>
  );
}
