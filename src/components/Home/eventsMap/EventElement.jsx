import React from "react";
import { posterLink } from "../../../data";

export default function EventElement(props) {
  const {
    movie: { poster, title, langue, date, time },
  } = props;

  return (
    <div className="event-element-container">
      <div className="poster-container">
        <img src={`${posterLink}${poster}`} alt={title} />
      </div>
      <div className="text-info-container">
        <div>
          <h2>{title}</h2>
          <span className="language-text">{langue}</span>
        </div>
        <div>
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
