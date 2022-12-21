import React, { useContext } from "react";
import { UserContext } from "../../App";
import { SignIn } from "../../firebase/googleAuth";

export default function ProfileSection() {
  const { user } = useContext(UserContext);
  console.log(user.displayName);

  const SignInBtn = (
    <button onClick={SignIn} className="sign-up-btn">
      S'inscrire
    </button>
  );

  return SignInBtn;
}
