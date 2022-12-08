import React from "react";
import { posterLink } from "../../../data";

export default function EventElement(props) {
  const { imgSrc, title } = props;

  return (
    <div className="event-element-container">
      <div className="poster-container">
        <img src={`${posterLink}${imgSrc}`} alt={title} />
      </div>
      <div className="text-info-container"></div>
    </div>
  );
}
