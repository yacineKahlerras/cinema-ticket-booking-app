import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api_key, posterLink } from "../../../data";

export default function EventElement(props) {
  const {
    movie: { id, title },
  } = props;
  const [movieData, setMovieData] = useState();
  const eventPageTitle = `${id}-${title.replace(/\s+/g, "-").toLowerCase()}`;

  // gets movie detail from TMDB and updates the state
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=fr`
      )
      .then((res) => {
        const data = res.data;
        setMovieData(data);
      });
  });

  // the whole movie element that links to a single event page
  const linkElement = movieData ? (
    <Link
      className="event-element-link"
      to={`/EventPage/${eventPageTitle}`}
      state={movieData}
    >
      <div className="event-element-container">
        <div className="poster-container">
          <img src={`${posterLink}/${movieData.poster_path}`} alt={title} />
        </div>
        <div className="text-info-container">
          <div className="bottom-text-info">
            <h2>{movieData.title}</h2>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    ""
  );

  return <>{movieData ? linkElement : ""}</>;
}
