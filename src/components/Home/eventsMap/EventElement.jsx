import React from "react";
import { Link } from "react-router-dom";
import { posterLink } from "../../../data";
import { DateDecontructor, LanguageDecontructor } from "./EventMothods";

export default function EventElement(props) {
  const {
    movie: { poster, title, langue, date, time },
  } = props;
  const { movieId, roomId, subRoomId } = props;
  const searchParams = `roomId=${roomId}&movieId=${movieId}${
    subRoomId !== undefined ? `&subRoomId=${subRoomId}` : ""
  }`;

  const dateDecontructed = DateDecontructor(date);
  const langueDeconstructed = LanguageDecontructor(langue);

  return (
    <Link className="event-element-link" to={`/EventPage/?${searchParams}`}>
      <div className="event-element-container">
        <div className="poster-container">
          <span className="language-info">{langueDeconstructed}</span>
          <img src={`${posterLink}${poster}`} alt={title} />
        </div>
        <div className="text-info-container">
          <div className="top-text-info">
            <span>
              the {dateDecontructed.day}/{dateDecontructed.month} at {time}
            </span>
          </div>
          <div className="bottom-text-info">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
