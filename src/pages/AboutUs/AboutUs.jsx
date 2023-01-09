import React from "react";
import aboutUsImg from "../../assets/about-us.svg";
import "./style/_index.scss";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>A Propos de Nous</h1>
      <img src={aboutUsImg} alt="about us" />
    </div>
  );
}
