import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { SignIn } from "../../firebase/googleAuth";
import { LogOut } from "../../firebase/googleAuth";

export default function SidemenuProfileSection(props) {
  const { setSidemenuActive } = props;
  const { user } = useContext(UserContext);
  const hasUser = user != null && user.displayName != null;

  const SignInBtn = (
    <li>
      <button
        onClick={() => {
          SignIn();
          setSidemenuActive(false);
        }}
        className="sign-up-btn"
      >
        S'inscrire
      </button>
    </li>
  );

  const profileElement = (
    <>
      <li>
        <Link onClick={() => setSidemenuActive(false)} to="/Dashboard">
          Met Tickets
        </Link>
      </li>
      <li>
        <button
          className="sign-up-btn"
          onClick={() => {
            LogOut();
            setSidemenuActive(false);
          }}
        >
          Log Out
        </button>
      </li>
    </>
  );

  return hasUser ? profileElement : SignInBtn;
}
