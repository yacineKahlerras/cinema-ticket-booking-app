import React from "react";
import { Link } from "react-router-dom";

export default function Sidemenu() {
  return (
    <aside>
      <div className="sidemenu-center">
        <ul className="sidemenu-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Rooms</Link>
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
