import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import "./styles/style.scss";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/googleAuth";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <main>
        <Nav />
        <Outlet />
      </main>
    </UserContext.Provider>
  );
}

const userTemplate = {
  uid: "1fERsyMvCcMf9mbAiKxYWVdgfDj2",
  email: "kahlerasse@gmail.com",
  emailVerified: true,
  displayName: "Yacine Kahlerras",
  isAnonymous: false,
  photoURL:
    "https://lh3.googleusercontent.com/a/AEdFTp473TvSccC5YE47J_IcmMNvzk7hwuuPwnGeHSn-AEA=s96-c",
  providerData: [
    {
      providerId: "google.com",
      uid: "116779504360470073339",
      displayName: "Yacine Kahlerras",
      email: "kahlerasse@gmail.com",
      phoneNumber: null,
      photoURL:
        "https://lh3.googleusercontent.com/a/AEdFTp473TvSccC5YE47J_IcmMNvzk7hwuuPwnGeHSn-AEA=s96-c",
    },
  ],
  stsTokenManager: {
    refreshToken:
      "AOkPPWSNHiQ0Mufw3gH8PWr2mzyDtTZA5fXyP32hKMRkpGTz1nO3c5eeVNU7__bBnB_nrAOVTZOudgs4T2BveOz9wlDAQ58-9NHSagh9G--KTLZZNbcE6o4TkIZc-36ek4PcJjazNLsx9UxriH_5YzyAkQBOD-CmvekdEoldHgT1S2GsQlKYLKQlSqYjdju4ehkxA5wCZ6HFsmCnj3hqS5ydqOjdLtF_sXrIonz6Z0j6ecbG6PHYmwOYEd0EBfhn6NtLp7WRLFjpvTHYvJNTjF6Vxg_haGoHTY7Oy2O-R2IsW4e_XRfUfC1B2xNWSJQDGCKdc_AVSSSJZIq6qwwbrnrgHNyKLfNdpP2X2jLhzzaMNy31EPnB9QgpPrshB-x5yKtaWFVmxsGn9M7kNaUSlgU58QGd4l8zbxur2Al9Et96WEYH6ld2YmMJVgVcWfkuLLR-oh0QwrKCSNm50GnMH3j1_CYk5myw_A",
    accessToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFmZjFlNDJlNDE0M2I4MTQxM2VjMTI1MzQwOTcwODUxZThiNDdiM2YiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiWWFjaW5lIEthaGxlcnJhcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA0NzNUdlNjY0M1WUU0N0pfSWNtTU52ems3aHd1dVB3bkdlSFNuLUFFQT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9jaW5lbWEtdGlja2V0LWJvb2tpbmctOWQ4ZDMiLCJhdWQiOiJjaW5lbWEtdGlja2V0LWJvb2tpbmctOWQ4ZDMiLCJhdXRoX3RpbWUiOjE2NzE2NTI3NDEsInVzZXJfaWQiOiIxZkVSc3lNdkNjTWY5bWJBaUt4WVdWZGdmRGoyIiwic3ViIjoiMWZFUnN5TXZDY01mOW1iQWlLeFlXVmRnZkRqMiIsImlhdCI6MTY3MTY1Mjc0MSwiZXhwIjoxNjcxNjU2MzQxLCJlbWFpbCI6ImthaGxlcmFzc2VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTY3Nzk1MDQzNjA0NzAwNzMzMzkiXSwiZW1haWwiOlsia2FobGVyYXNzZUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.F0uWwlYd83XWoADx6ZHDeGAqG9jBxJiv7q1PP4-7nN80h-rMYRyCVJPd7_gurcVHqvS5EQcZWbcN8z-TtgQtOh7gNVxXKWpgk7FnHqGObRPNMgrjWSmlJiEkixRM4_4JkYN2A_mE40ug3egaJW9Wpce8KWKccf4KYHh277EJpVnMXI6FAlQRjiiYlrSSxQKQqK3oW0XTYdJJXWYO09GXyxfrU64SEX1HeO3dr2_KLmuhJaaT8WqTCdOdss8jOIoHtak5v1KhJYhYUQG2UUpbsmepstmxeKKyHk76hzuq7GiNC9qzhkpjOC_FByN7NvyTwb5XBpsLrsvYMrJMwZN_Bg",
    expirationTime: 1671656342288,
  },
  createdAt: "1671632877448",
  lastLoginAt: "1671652659765",
  apiKey: "AIzaSyBjUwnITnDigbEFaSv48Ag30f-pplAJsFg",
  appName: "[DEFAULT]",
};
