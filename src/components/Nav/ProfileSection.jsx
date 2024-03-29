import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../App";
import { SignIn } from "../../firebase/googleAuth";
import LoadingSpinner from "./LoadingSpinner";
import ProfileDropDown from "./ProfileDropDown";

export default function ProfileSection() {
  const { user, isLoadingUser } = useContext(UserContext);
  const hasUser = user != null && user.displayName != null;
  const [profileMenuActive, setProfileMenuActive] = useState(false);

  const SignInBtn = (
    <button onClick={SignIn} className="sign-up-btn">
      S'inscrire
    </button>
  );

  function toggleProfileMenu() {
    setProfileMenuActive(!profileMenuActive);
  }

  const profileElement =
    hasUser == true ? (
      <button onClick={toggleProfileMenu} className="profile-element-container">
        <img src={user.photoURL} alt={user.displayName} />

        {/* profile dropdown options */}
        <ProfileDropDown
          profileMenuActive={profileMenuActive}
          toggleProfileMenu={toggleProfileMenu}
        />
      </button>
    ) : (
      ""
    );

  return hasUser ? (
    profileElement
  ) : isLoadingUser ? (
    <LoadingSpinner />
  ) : (
    SignInBtn
  );
}
