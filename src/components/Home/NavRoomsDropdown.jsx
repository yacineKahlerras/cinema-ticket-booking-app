import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavRoomsDropdown() {
  const [showRooms, setShowRooms] = useState(false);

  function toggleDropDown() {
    setShowRooms(!showRooms);
  }

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.matches(".dropbtn")) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains("show")) {
          myDropdown.classList.remove("show");
        }
      }
    });
  }, []);

  return (
    <Link className="dropdown" to={"/"}>
      <button onClick={toggleDropDown} className="dropbtn">
        Rooms
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
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
