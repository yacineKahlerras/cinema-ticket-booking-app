import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { SignIn } from "../../firebase/googleAuth";
import { LogOut } from "../../firebase/googleAuth";

export default function SidemenuProfileSection() {
  const { user } = useContext(UserContext);
  const hasUser = user != null && user.displayName != null;

  const SignInBtn = (
    <button onClick={SignIn} className="sign-up-btn">
      S'inscrire
    </button>
  );

  const profileElement = (
    <>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li className="profile-element-container">
        <button onClick={LogOut}>Log Out</button>
      </li>
    </>
  );

  return hasUser ? profileElement : SignInBtn;
}
