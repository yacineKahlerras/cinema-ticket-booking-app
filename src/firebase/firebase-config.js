// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjUwnITnDigbEFaSv48Ag30f-pplAJsFg",
  authDomain: "cinema-ticket-booking-9d8d3.firebaseapp.com",
  projectId: "cinema-ticket-booking-9d8d3",
  storageBucket: "cinema-ticket-booking-9d8d3.appspot.com",
  messagingSenderId: "1058880476784",
  appId: "1:1058880476784:web:d50b8cbbd8c544f10806b5",
  measurementId: "G-VP5SMDS5YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
