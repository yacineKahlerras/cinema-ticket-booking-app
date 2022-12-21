import React, { useContext } from "react";
import { UserContext } from "../../App";
import { SignIn } from "../../firebase/googleAuth";

export default function ProfileSection() {
  const { user } = useContext(UserContext);
  const hasUser = user.displayName != null;

  const SignInBtn = (
    <button onClick={SignIn} className="sign-up-btn">
      S'inscrire
    </button>
  );

  const profileElement = (
    <div className="profile-element-container">
      <img src={user.photoURL} alt={user.displayName} />
      <span className="profile-name">{user.displayName}</span>
    </div>
  );

  return hasUser ? profileElement : SignInBtn;
}
