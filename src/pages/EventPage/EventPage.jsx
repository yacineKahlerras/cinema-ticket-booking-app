import React, { useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { posterLink } from "../../data";
import RatingStars from "./RatingStars";
import Genres from "./Genres";
import Casts from "./Casts";
import "./style/_index.scss";

export function EventPageLoader({ params }) {
  return params.eventTitle;
}

export default function EventPage(props) {
  // link search params
  let location = useLocation();
  let { movieData, roomId } = location.state;
  const params = useLoaderData();
  const movieScheduleParams = roomId ? `roomId=${roomId}` : "";

  // scrolls to top of page on start
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="event-page-container">
      {/* poster */}
      <div className="poster-container">
        <img src={`${posterLink}${movieData.poster_path}`} alt="poster" />
      </div>

      {/* movie info */}
      <div className="text-side-container">
        <h1>{movieData.title}</h1>
        <RatingStars originalRating={movieData.vote_average} />

        {/* info */}
        <div className="info-element">
          <span className="info-element-label">Prix : </span>
          <p className="info-element-value">800Da</p>
        </div>

        {/* book ticket button */}
        <Link
          className="book-ticket-btn"
          to={`/MovieSchedule/${params}?${movieScheduleParams}`}
        >
          reserver ticket
        </Link>

        {/* genres */}
        <Genres genres={movieData.genres} />

        {/* casts */}
        <Casts id={movieData.id} />

        {/* movie synopsis */}
        <div className="synopsis">
          <h2>Synopsis</h2>
          <p>{movieData.overview}</p>
        </div>
      </div>
    </div>
  );
}
