import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../App";
import { SignIn } from "../../firebase/googleAuth";

export default function ProfileSection() {
  const { user } = useContext(UserContext);
  const hasUser = user != null && user.displayName != null;
  const profileBtn = useRef();
  const [profileMenuActive, setProfileMenuActive] = useState(false);

  const SignInBtn = (
    <button onClick={SignIn} className="sign-up-btn">
      S'inscrire
    </button>
  );

  const profileMenuDropdown = (
    <ul className="profile-menu">
      <li>Dashboard</li>
      <li>Log Out</li>
    </ul>
  );

  const profileElement =
    hasUser == true ? (
      <button
        onClick={showProfileMenu}
        ref={profileBtn}
        className="profile-element-container"
      >
        <img src={user.photoURL} alt={user.displayName} />

        {/* profile dropdown options */}
        {profileMenuDropdown}
      </button>
    ) : (
      ""
    );

  function showProfileMenu() {}

  return hasUser ? profileElement : SignInBtn;
}
