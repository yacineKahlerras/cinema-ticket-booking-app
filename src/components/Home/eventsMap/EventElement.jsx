import React from "react";
import { Link } from "react-router-dom";
import { posterLink } from "../../../data";

export default function EventElement(props) {
  const {
    movie: { poster, title, langue, date, time },
  } = props;
  const { movieId, roomId, subRoomId } = props;
  const searchParams = `roomId=${roomId}&movieId=${movieId}${
    subRoomId !== undefined ? `&subRoomId=${subRoomId}` : ""
  }`;

  return (
    <Link to={`/EventPage/?${searchParams}`}>
      <div className="event-element-container">
        <div className="poster-container">
          <img src={`${posterLink}${poster}`} alt={title} />
        </div>
        <div className="text-info-container">
          <div>
            <span>{date}</span>
            <span>{time}</span>
            <span className="language-text">{langue}</span>
          </div>
          <div>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
