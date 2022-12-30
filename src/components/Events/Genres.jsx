import React from "react";

export default function Genres(props) {
  const { genres } = props;

  const genreElements = genres.map((element, index) => {
    return (
      <span key={index} className="genre-element">
        {element.name}
      </span>
    );
  });

  return (
    <div className="genres-container">
      <h3>Genres</h3>
      <div className="genre-elements-container">{genreElements}</div>
    </div>
  );
}
