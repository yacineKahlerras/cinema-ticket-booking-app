import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "./firebase-config";

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export function SignIn() {
  signInWithRedirect(auth, provider);
}

export function LogOut() {
  signOut(auth);
  console.log(user);
}

export const unsubscribe = (setUser) => {
  return onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log("User", currentUser);
  });
};
