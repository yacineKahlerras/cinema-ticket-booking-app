import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidemenu(props) {
  const { sidemenuActive } = props;
  const [showRooms, setShowRooms] = useState(false);

  function ToggleShowRooms() {
    setShowRooms(!showRooms);
  }

  return (
    <aside className={`${!sidemenuActive ? "hide-sidemenu" : ""}`}>
      <div className="sidemenu-center">
        <ul className="sidemenu-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <div
              className={`sidemenu-dropdown ${
                showRooms ? "show-sidemenu-rooms" : ""
              }`}
            >
              <button
                onClick={ToggleShowRooms}
                className="sidemenu-dropdown-btn"
              >
                Rooms
              </button>
              <ul className="dropdown-content">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </div>
          </li>
          <li>
            <Link to={"/"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/"}>About Us</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
