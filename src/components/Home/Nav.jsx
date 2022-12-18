import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavRoomsDropdown from "./NavRoomsDropdown";
import Sidemenu from "./Sidemenu";
import logo from "../../assets/logo300.png";

export default function Nav() {
  const [sidemenuActive, setSidemenuActive] = useState(false);

  function ShowSidemenu() {
    setSidemenuActive(!sidemenuActive);
  }

  return (
    <nav className={`${!sidemenuActive ? "hidden-sidemenu" : ""}`}>
      <div className="nav-center">
        {/* logo */}
        <Link to={"/"} className="logo-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="logo-text-container">
            <span className="logo-top-text">cinecom</span>
            <span className="logo-bottom-text">ticketing</span>
          </div>
        </Link>

        {/* nav links */}
        <ul className="nav-links">
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/Rooms"}>Cinemas</Link>
          </li>
          <li>
            <Link to={"/About-Us"}>A Propos</Link>
          </li>
          <li>
            <button className="sign-up-btn">S'inscrire</button>
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
