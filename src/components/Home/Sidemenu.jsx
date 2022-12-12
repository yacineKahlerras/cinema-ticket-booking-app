import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidemenu(props) {
  const { sidemenuActive, setSidemenuActive } = props;
  const [showRooms, setShowRooms] = useState(false);

  function ToggleShowRooms() {
    setShowRooms(!showRooms);
  }

  useEffect(() => {
    document
      .querySelector(".sidemenu-container")
      .addEventListener("click", (e) => {
        if (e.target.classList.contains("sidemenu-container")) {
          setSidemenuActive(false);
        }
      });
  }, []);

  return (
    <aside
      className={`sidemenu-container ${!sidemenuActive ? "hide-sidemenu" : ""}`}
    >
      <div className="sidemenu-center">
        <ul className="sidemenu-links">
          <li>
            <Link onClick={() => setSidemenuActive(false)} to={"/"}>
              Home
            </Link>
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
            <Link onClick={() => setSidemenuActive(false)} to={"/"}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link onClick={() => setSidemenuActive(false)} to={"/"}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
