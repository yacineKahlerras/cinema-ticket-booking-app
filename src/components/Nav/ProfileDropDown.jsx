import React from "react";
import { Link } from "react-router-dom";
import { LogOut } from "../../firebase/googleAuth";

export default function ProfileDropDown(props) {
  const { profileMenuActive, toggleProfileMenu } = props;

  return (
    <ul className={`profile-menu ${profileMenuActive ? "show-menu" : ""}`}>
      <li className="profile-menu-links" onClick={toggleProfileMenu}>
        <Link to="/Dashboard">Mes Tickets</Link>
      </li>
      <li
        className="profile-menu-links"
        onClick={() => {
          toggleProfileMenu();
          LogOut();
        }}
      >
        Log Out
      </li>
    </ul>
  );
}
