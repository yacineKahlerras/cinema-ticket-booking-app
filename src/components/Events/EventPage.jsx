import React, { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { roomsList, posterLink } from "../../data";
import RatingStars from "./RatingStars";
import Genres from "./Genres";
import Casts from "./Casts";

export default function EventPage(props) {
  // link search params
  let location = useLocation();
  let movieData = location.state;

  // room and movie infos

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
        <Link className="book-ticket-btn" to={"/"}>
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
