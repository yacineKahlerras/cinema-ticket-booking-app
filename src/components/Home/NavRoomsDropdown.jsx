import React, { useEffect, useState } from "react";
import downArrow from "../../assets/caret-down-fill.svg";
import { Link } from "react-router-dom";

export default function NavRoomsDropdown() {
  const [showRooms, setShowRooms] = useState(false);

  function toggleDropDown() {
    setShowRooms(!showRooms);
  }

  useEffect(() => {
    window.onclick = (e) => {
      if (!e.target.matches(".dropbtn")) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains("show")) {
          myDropdown.classList.remove("show");
        }
      }
    };
  }, []);

  return (
    <Link className="dropdown" to={"/"}>
      <button onClick={toggleDropDown} className="dropbtn">
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
