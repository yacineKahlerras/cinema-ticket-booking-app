import React from "react";
import { useLocation } from "react-router-dom";

export default function RegisterPage(props) {
  const [location] = useLocation();
  console.log(location.state.mama);
  return <h1>yooooooooo</h1>;
}
