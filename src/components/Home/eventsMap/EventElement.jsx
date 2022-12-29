import React from "react";
import { Link } from "react-router-dom";
import { posterLink } from "../../../data";

export default function EventElement(props) {
  const { id, title } = props;

  return (
    <Link className="event-element-link" to={`/EventPage/?${""}`}>
      <div className="event-element-container">
        <div className="poster-container">
          <img src={`${posterLink}/${id}.jpg`} alt={title} />
        </div>
        <div className="text-info-container">
          <div className="bottom-text-info">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
