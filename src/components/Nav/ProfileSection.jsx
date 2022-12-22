import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../App";
import { SignIn } from "../../firebase/googleAuth";

export default function ProfileSection() {
  const { user } = useContext(UserContext);
  const hasUser = user != null && user.displayName != null;
  const profileBtn = useRef();
  const [profileMenuActive, setProfileMenuActive] = useState(false);

  function hideProfileMenu(e) {
    const classList = e.target.classList;
    console.log(profileMenuActive);

    if (
      profileMenuActive &&
      !classList.contains("profile-element-container") &&
      !classList.contains("profile-menu-links") &&
      !classList.contains("profile-menu")
    ) {
      setProfileMenuActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", hideProfileMenu);
    return () => window.removeEventListener("click", hideProfileMenu);
  }, []);

  const SignInBtn = (
    <button onClick={SignIn} className="sign-up-btn">
      S'inscrire
    </button>
  );

  function toggleProfileMenu() {
    setProfileMenuActive(!profileMenuActive);
  }

  const profileMenuDropdown = (
    <ul className={`profile-menu ${profileMenuActive ? "show-menu" : ""}`}>
      <li className="profile-menu-links" onClick={toggleProfileMenu}>
        Dashboard
      </li>
      <li className="profile-menu-links" onClick={toggleProfileMenu}>
        Log Out
      </li>
    </ul>
  );

  const profileElement =
    hasUser == true ? (
      <button
        onClick={toggleProfileMenu}
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

  return hasUser ? profileElement : SignInBtn;
}
