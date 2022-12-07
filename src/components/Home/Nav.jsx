import React, { useState } from "react";
import downArrow from "../../assets/caret-down-fill.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  const [sidemenuActive, setSidemenuActive] = useState(false);

  function ShowSidemenu() {
    setSidemenuActive(!sidemenuActive);
  }

  function RoomsNavLink() {
    const [showRooms, setShowRooms] = useState(false);

    function toggleDropDown() {
      setShowRooms(!showRooms);
    }

    return (
      <Link className="dropdown" to={"/"}>
        <button
          onClick={toggleDropDown}
          className="dropbtn"
          onclick="myFunction()"
        >
          Rooms
          <img src={downArrow} alt="down arrow icon" />
        </button>
        <div
          className={`dropdown-content ${showRooms ? "show" : ""}`}
          id="myDropdown"
        >
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </Link>
    );
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
            <RoomsNavLink />
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
