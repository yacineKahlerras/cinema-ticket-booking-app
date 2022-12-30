export const posterLink = "https://image.tmdb.org/t/p/w500";
export const api_key = "982f680fcfc113f532f791142a6598c1";

export const roomsList = [
  {
    id: "h2Qgg",
    title: "ahmed bay",
    wilaya: "constantine",
    seats: 300,
    movies: [
      {
        poster: "/vWx3Hi7DZ7VWyjWVf9gySG6Lbq4.jpg",
        title: "jack mimoun",
        date: "ven 02-12",
        time: "15h",
        price: "800",
        langue: "eng",
      },
      {
        poster: "/w3s6XEDNVGq5LUlghqs6VlvsvL6.jpg",
        title: "la proie diable",
        date: "dim 04-12",
        time: "20h",
        price: "800",
      },
    ],
  },
  {
    id: "ri-rG",
    title: "ibn zeydoun",
    wilaya: "alger",
    seats: 494,
    movies: [],
  },
  {
    id: "Rvmff",
    title: "cosmos",
    wilaya: "constantine",
    subRooms: [
      {
        name: "beta",
        seats: 440,
        movies: [
          {
            poster: "/1CHp8QQjGwqWaPZWjzcRidlt5Xs.jpg",
            title: "violent night",
            date: "mer 07-12",
            time: "13h30",
            price: "800",
            langue: "eng",
          },
          {
            poster: "/ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
            title: "black panther 2",
            date: "jeu 08-12",
            time: "13h",
            price: "800",
          },
        ],
      },
      {
        name: "alpha",
        seats: 320,
        movies: [],
      },
    ],
  },
  {
    id: "NKy7N",
    title: "ibn khaldoun",
    wilaya: "alger",
    seats: 698,
    movies: [
      {
        poster: "/1CHp8QQjGwqWaPZWjzcRidlt5Xs.jpg",
        title: "violent night",
        date: "mer 07-12",
        time: "13h30",
        price: "800",
        langue: "eng",
      },
      {
        poster: "/v31MsWhF9WFh7Qooq6xSBbmJxoG.jpg",
        title: "le menu",
        date: "jeu 09-12",
        time: "13h30",
        price: "800",
      },
    ],
  },
  {
    id: "Tldge",
    title: "es sahel",
    wilaya: "alger",
    seats: 337,
    movies: [],
  },
  {
    id: "n4pdv",
    title: "cinegold",
    wilaya: "oran",
    subRooms: [
      {
        name: "mega",
        seats: 286,
        movies: [
          {
            poster: "/1tzERH50P5c2mFWtLbgixzLZS1L.jpg",
            title: "ticket to paradise",
            date: "ven 02-12",
            time: "16h",
            price: "800",
            langue: "vf",
          },
          {
            poster: "/ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
            title: "wakanda forever",
            date: "ven 02-12",
            time: "20h30",
            price: "800",
            langue: "vf",
          },
        ],
      },
      {
        name: "mira",
        seats: 100,
        movies: [
          {
            poster: "/wMDUDwAArpfGdtTTZ25SfwngGwt.jpg",
            title: "samourai academy",
            date: "ven 02-12",
            time: "16h",
            price: "800",
            langue: "vf",
          },
          {
            poster: "/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
            title: "smile",
            date: "ven 02-12",
            time: "22h10",
            price: "800",
            langue: "vf",
          },
        ],
      },
      {
        name: "vip",
        seats: 54,
        movies: [
          {
            poster: "/ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
            title: "wakanda forever",
            date: "ven 02-12",
            time: "16h",
            price: "800",
            langue: "vf",
          },
          {
            poster: "/v31MsWhF9WFh7Qooq6xSBbmJxoG.jpg",
            title: "le menu",
            date: "ven 02-12",
            time: "19h",
            price: "800",
            langue: "vf",
          },
        ],
      },
    ],
  },
];

const fireStoreDBTemplate = {
  movie1: {
    id: "5f2g1s4",
    title: "Avengers",
    price: 800,
    scheduel: {
      "28-01": {
        cinema1: {
          time: "14h",
          language: "vostfr",
        },
        cinema2: {
          time: "9h",
          language: "eng",
        },
      },
      "10-01": {
        cinema3: {
          time: "12h",
          language: "vostar",
        },
        cinema2: {
          time: "9h",
          language: "eng",
        },
      },
    },
  },
};

const docWithMovieId = {
  schedule: [
    {
      cinemaId: "KgVhN",
      dates: [
        {
          date: "December 5 2023, 15h",
          language: "fr",
          takenSeats: [
            { col: 3, row: 5 },
            { col: 0, row: 2 },
            { col: 4, row: 0 },
          ],
        },
        {
          date: "January 2 2023, 15h",
          language: "vostfr",
          takenSeats: [
            { col: 3, row: 5 },
            { col: 0, row: 2 },
            { col: 4, row: 0 },
          ],
        },
      ],
    },
    {
      cinemaName: "cinegold",
      dates: [
        {
          date: "December 3 2023, 18h",
          language: "vostfr",
          takenSeats: [
            { col: 4, row: 0 },
            { col: 3, row: 5 },
            { col: 0, row: 2 },
          ],
        },
        {
          date: "December 3 2023, 18h",
          language: "fr",
          takenSeats: [
            { col: 4, row: 0 },
            { col: 3, row: 5 },
            { col: 0, row: 2 },
          ],
        },
      ],
    },
  ],
};

export const moviesListObject = {
  list: [
    {
      id: "893369",
      title: "jack mimoun",
      price: 800,
    },
    {
      id: "676547",
      title: "la proie diable",
      price: 800,
    },
    {
      id: "899112",
      title: "violent night",
      price: 800,
    },
    {
      id: "505642",
      title: "black panther 2",
      price: 800,
    },
    {
      id: "800939",
      title: "ticket to paradise",
      price: 800,
    },
    {
      id: "366672",
      title: "samourai academy",
      price: 800,
    },
    {
      id: "882598",
      title: "smile",
      price: 800,
    },
  ],
};

export const movieSchedule = {
  schedule: [
    {
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
    },
    {
      cinemaId: "ri-rG",
      dates: [
        {
          takenSeats: [
            {
              col: 4,
              row: 0,
            },
            {
              row: 4,
              col: 8,
            },
            {
              col: 7,
              row: 2,
            },
            {
              row: 3,
              col: 6,
            },
            {
              col: 1,
              row: 3,
            },
          ],
          date: {
            seconds: 1673488800,
            nanoseconds: 0,
          },
          language: "eng",
        },
        {
          takenSeats: [
            {
              row: 0,
              col: 9,
            },
            {
              col: 3,
              row: 2,
            },
            {
              row: 1,
              col: 8,
            },
            {
              col: 5,
              row: 0,
            },
            {
              row: 2,
              col: 6,
            },
          ],
          date: {
            seconds: 1672916400,
            nanoseconds: 0,
          },
          language: "vostfr",
        },
        {
          takenSeats: [
            {
              col: 4,
              row: 1,
            },
            {
              row: 1,
              col: 9,
            },
            {
              row: 7,
              col: 1,
            },
            {
              row: 6,
              col: 9,
            },
            {
              col: 6,
              row: 3,
            },
          ],
          language: "fr",
          date: {
            seconds: 1673197200,
            nanoseconds: 0,
          },
        },
      ],
    },
    {
      dates: [
        {
          takenSeats: [
            {
              col: 2,
              row: 2,
            },
            {
              col: 5,
              row: 6,
            },
            {
              row: 6,
              col: 4,
            },
            {
              col: 7,
              row: 4,
            },
            {
              col: 1,
              row: 0,
            },
          ],
          date: {
            seconds: 1673128800,
            nanoseconds: 0,
          },
          language: "eng",
        },
        {
          language: "vostfr",
          takenSeats: [
            {
              row: 6,
              col: 6,
            },
            {
              col: 3,
              row: 5,
            },
            {
              col: 5,
              row: 7,
            },
            {
              col: 4,
              row: 1,
            },
            {
              col: 9,
              row: 6,
            },
          ],
          date: {
            seconds: 1673474400,
            nanoseconds: 0,
          },
        },
        {
          date: {
            seconds: 1673636400,
            nanoseconds: 0,
          },
          language: "fr",
          takenSeats: [
            {
              col: 7,
              row: 5,
            },
            {
              col: 6,
              row: 7,
            },
            {
              row: 4,
              col: 6,
            },
            {
              col: 8,
              row: 4,
            },
            {
              row: 1,
              col: 2,
            },
          ],
        },
      ],
      cinemaId: "Rvmff",
    },
    {
      cinemaId: "NKy7N",
      dates: [
        {
          date: {
            seconds: 1672696800,
            nanoseconds: 0,
          },
          language: "eng",
          takenSeats: [
            {
              row: 4,
              col: 5,
            },
            {
              col: 3,
              row: 0,
            },
            {
              col: 4,
              row: 7,
            },
            {
              col: 2,
              row: 5,
            },
            {
              row: 2,
              col: 2,
            },
          ],
        },
        {
          date: {
            seconds: 1673553600,
            nanoseconds: 0,
          },
          takenSeats: [
            {
              row: 3,
              col: 6,
            },
            {
              col: 6,
              row: 1,
            },
            {
              col: 1,
              row: 0,
            },
            {
              row: 5,
              col: 1,
            },
            {
              row: 2,
              col: 5,
            },
          ],
          language: "vostfr",
        },
        {
          date: {
            seconds: 1673110800,
            nanoseconds: 0,
          },
          takenSeats: [
            {
              col: 1,
              row: 3,
            },
            {
              col: 4,
              row: 3,
            },
            {
              col: 7,
              row: 3,
            },
            {
              col: 7,
              row: 2,
            },
            {
              col: 7,
              row: 1,
            },
          ],
          language: "fr",
        },
      ],
    },
    {
      dates: [
        {
          language: "eng",
          takenSeats: [
            {
              col: 3,
              row: 5,
            },
            {
              col: 8,
              row: 0,
            },
            {
              col: 5,
              row: 6,
            },
            {
              row: 5,
              col: 5,
            },
            {
              col: 1,
              row: 5,
            },
          ],
          date: {
            seconds: 1673236800,
            nanoseconds: 0,
          },
        },
        {
          takenSeats: [
            {
              col: 3,
              row: 0,
            },
            {
              row: 1,
              col: 6,
            },
            {
              row: 0,
              col: 8,
            },
            {
              col: 2,
              row: 4,
            },
            {
              row: 2,
              col: 9,
            },
          ],
          language: "vostfr",
          date: {
            seconds: 1673560800,
            nanoseconds: 0,
          },
        },
        {
          takenSeats: [
            {
              row: 2,
              col: 9,
            },
            {
              col: 7,
              row: 3,
            },
            {
              row: 0,
              col: 5,
            },
            {
              col: 3,
              row: 7,
            },
            {
              row: 2,
              col: 6,
            },
          ],
          language: "fr",
          date: {
            seconds: 1672884000,
            nanoseconds: 0,
          },
        },
      ],
      cinemaId: "Tldge",
    },
    {
      cinemaId: "n4pdv",
      dates: [
        {
          takenSeats: [
            {
              row: 3,
              col: 5,
            },
            {
              col: 0,
              row: 3,
            },
            {
              row: 1,
              col: 9,
            },
            {
              row: 3,
              col: 2,
            },
            {
              col: 4,
              row: 0,
            },
          ],
          date: {
            seconds: 1672743600,
            nanoseconds: 0,
          },
          language: "eng",
        },
        {
          date: {
            seconds: 1673420400,
            nanoseconds: 0,
          },
          language: "vostfr",
          takenSeats: [
            {
              col: 0,
              row: 1,
            },
            {
              col: 0,
              row: 6,
            },
            {
              col: 4,
              row: 6,
            },
            {
              row: 2,
              col: 4,
            },
            {
              row: 2,
              col: 4,
            },
          ],
        },
        {
          language: "fr",
          date: {
            seconds: 1672855200,
            nanoseconds: 0,
          },
          takenSeats: [
            {
              row: 6,
              col: 3,
            },
            {
              row: 3,
              col: 5,
            },
            {
              col: 9,
              row: 5,
            },
            {
              row: 7,
              col: 9,
            },
            {
              row: 3,
              col: 6,
            },
          ],
        },
      ],
    },
  ],
  title: "ticket to paradise",
};
