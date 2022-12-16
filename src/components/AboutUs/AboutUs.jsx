import React from "react";
import aboutUsImg from "../../assets/about-us.svg";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <img src={aboutUsImg} alt="about us" />
    </div>
  );
}
