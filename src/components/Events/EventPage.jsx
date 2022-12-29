import React, { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { roomsList, posterLink } from "../../data";
import {
  DateDecontructor,
  LanguageDecontructor,
} from "../Home/eventsMap/EventMothods";
import LeafeletMap from "./LeafeletMap";

export default function EventPage(props) {
  // link search params
  let location = useLocation();
  const id = location.state.id;

  // room and movie infos

  // scrolls to top of page on start
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="event-page-container">
      {/* poster */}
      <div className="poster-container">
        <img src={""} alt="poster" />
      </div>

      {/* movie info */}
      <div className="text-side-container">
        <h1>{"title"}</h1>
        <div className="info-element">
          <span className="info-element-label">Prix : </span>
          <p className="info-element-value">800Da</p>
        </div>

        {/* book ticket button */}
        <Link className="book-ticket-btn" to={"/"}>
          reserver ticket
        </Link>

        {/* movie synopsis */}
        <div className="synopsis">
          <h2>Synopsis</h2>
          <p>
            Set more than a decade after the events of the first film, "Avatar
            The Way of Water" begins to tell the story of the Sully family
            (Jake, Neytiri and their kids), the trouble that follows them, the
            lengths they go to keep each other safe, the battles they fight to
            stay alive and the tragedies they endure.
          </p>
        </div>
      </div>
    </div>
  );
}
