import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "./firebase-config";

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export function SignIn() {
  localStorage.setItem("isSignInLoading", true);
  signInWithRedirect(auth, provider);
}

export function LogOut() {
  signOut(auth);
}
