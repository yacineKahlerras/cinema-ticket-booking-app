import React, { useContext } from "react";
import { UserContext } from "../../App";
import { SignIn } from "../../firebase/googleAuth";

export default function ProfileSection() {
  const { user } = useContext(UserContext);
  const hasUser = user != null && user.displayName != null;

  console.log(hasUser);

  const SignInBtn = (
    <button onClick={SignIn} className="sign-up-btn">
      S'inscrire
    </button>
  );

  const profileElement =
    hasUser == true ? (
      <div className="profile-element-container">
        <img src={user.photoURL} alt={user.displayName} />
      </div>
    ) : (
      ""
    );

  return hasUser ? profileElement : SignInBtn;
}
