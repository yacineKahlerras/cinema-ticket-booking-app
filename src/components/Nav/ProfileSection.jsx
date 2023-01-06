import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { SignIn, LogOut } from "../../firebase/googleAuth";

export default function ProfileSection() {
  const { user } = useContext(UserContext);
  const hasUser = user != null && user.displayName != null;
  const [profileMenuActive, setProfileMenuActive] = useState(false);
  const isSignInLoading = localStorage.getItem("isSignInLoading");
  console.log(isSignInLoading);

  const SignInBtn = (
    <button /**onClick={SignIn}*/ className="sign-up-btn">
      {isSignInLoading ? "Loading.." : "S'inscrire"}
    </button>
  );

  function toggleProfileMenu() {
    setProfileMenuActive(!profileMenuActive);
  }

  const profileMenuDropdown = (
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

  const profileElement =
    hasUser == true ? (
      <button onClick={toggleProfileMenu} className="profile-element-container">
        <img src={user.photoURL} alt={user.displayName} />

        {/* profile dropdown options */}
        {profileMenuDropdown}
      </button>
    ) : (
      ""
    );

  return hasUser ? profileElement : SignInBtn;
}
