![](./desktop-preview.png)

## Table of contents

- [Overview](#overview)
- [Links](#links)
- [Built with](#built-with)
- [What I Learned](#what-i-learned)

## Overview

using the [Rest Countries API](https://restcountries.com/) to get list of all the 250 countries and islands
and all the necessary information about them , the app displays the country components so you can filter
through them by continent and by searching the name of the country, also you can go to the country's page
to get additional information on it like location and its neighbouring countries...ect

### Links

- [Live Site URL](https://yacinekahlerras.github.io/rest-countries-app/)

### Built with

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Leaflet](https://react-leaflet.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [Spinner](https://mhnpd.github.io/react-loader-spinner/docs/components/oval)
- [SCSS](https://sass-lang.com/)

### What I Learned

- different ways to enhance performance with memoization and finding solutions to reduce
  renders as much as possible, also used lazy loading to make the app a little less heavy
  and doesnt' download all the images at once
- familiarizing myself more with tailwind themes and configurations
- using infinite scroller to load small shunks of the big list for performance instead of doing
  pagination
- experimenting and reading more documentation about react router dom
- familiarizing myself more with firebase with its authetications and database, it is a lot easier
  to use now
