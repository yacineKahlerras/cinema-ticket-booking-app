import React from "react";

export default function CinemaSchedule(props) {
  const { cinemaSchedule, cinemaInfo } = props;

  function DatesMapElements() {
    return cinemaSchedule.dates.map((dateInfo, index) => {
      const dateObject = new Date(dateInfo.date.seconds * 1000);
      const month = dateObject.toDateString().match(/(\w+)/g)[1];
      const day = dateObject.toDateString().match(/(\w+)/g)[2];
      const hour = dateObject.getHours();
      const language = dateInfo.language;

      return (
        <div key={index} className="date-container">
          <span className="date">
            {day} {month}
          </span>
          <span className="hour">{hour}h</span>
          <span className="language">{language}</span>
        </div>
      );
    });
  }

  return (
    <div className="cinema-schedule">
      <div className="cinema-title-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <span className="cinema-title">Cinema</span>
      </div>
      <div className="cinema-dates-map">
        <DatesMapElements />
      </div>
    </div>
  );
}

const cinInfo = {
  location: {
    latitude: 36.7753606,
    longitude: 3.0601882,
  },
  id: "h2Qgg",
  name: "ahmed bay",
  wilaya: "constantine",
};

const ciSchedule = {
  cinemaId: "h2Qgg",
  dates: [
    {
      date: {
        seconds: 1673352000,
        nanoseconds: 0,
      },
      language: "eng",
      takenSeats: [
        {
          row: 7,
          col: 1,
        },
        {
          col: 7,
          row: 0,
        },
        {
          col: 7,
          row: 4,
        },
        {
          row: 2,
          col: 9,
        },
        {
          row: 6,
          col: 1,
        },
      ],
    },
    {
      language: "vostfr",
      takenSeats: [
        {
          row: 3,
          col: 5,
        },
        {
          col: 7,
          row: 0,
        },
        {
          col: 7,
          row: 0,
        },
        {
          col: 1,
          row: 7,
        },
        {
          row: 7,
          col: 4,
        },
      ],
      date: {
        seconds: 1672884000,
        nanoseconds: 0,
      },
    },
    {
      date: {
        seconds: 1673625600,
        nanoseconds: 0,
      },
      takenSeats: [
        {
          row: 7,
          col: 9,
        },
        {
          col: 4,
          row: 5,
        },
        {
          row: 6,
          col: 7,
        },
        {
          row: 1,
          col: 8,
        },
        {
          col: 2,
          row: 4,
        },
      ],
      language: "fr",
    },
  ],
};
