/** -list of movies who has:
 *      -poster
 *      -title
 *      -date
 *      -time
 *      -price
 */

/** -list of rooms who has:
 *      -roomId
 *      -wilaya
 *      -seats
 *      -list of movies
 */

export const posterLink = "https://image.tmdb.org/t/p/w500";

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
