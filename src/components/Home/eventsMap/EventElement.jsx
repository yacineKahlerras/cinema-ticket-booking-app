import React from "react";
import { posterLink } from "../../../data";

export default function EventElement(props) {
  const { imgSrc, title, language, date, time } = props;

  return (
    <div className="event-element-container">
      <div className="poster-container">
        <img src={`${posterLink}${imgSrc}`} alt={title} />
      </div>
      <div className="text-info-container">
        <div>
          <h2>{title}</h2>
          <span className="language-text">{language}</span>
        </div>
        <div>
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
