import React, { useEffect, useState } from "react";
import axios from "axios";
import { api_key } from "../../data";

export default function Casts(props) {
  const [castList, setCastList] = useState([]);
  const { id } = props;
  const castNumberLimit = 20;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=fr`
      )
      .then((res) => {
        const fetchedCastList = res.data.cast;
        const castNames = [];
        for (let i = 0; i < 10; i++) {
          if (castNames.length >= castNumberLimit) break;
          castNames.push(fetchedCastList[i].name);
        }
        setCastList(castNames);
      });
  }, []);

  const castElements = castList.map((element, index) => {
    return (
      <span key={index} className="cast-element">
        {element}
      </span>
    );
  });

  return (
    <div className="casts-container">
      <h3>Acteurs</h3>
      <div className="cast-elements-container">{castElements}</div>
    </div>
  );
}
