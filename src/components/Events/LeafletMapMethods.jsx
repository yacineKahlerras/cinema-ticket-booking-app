/** leafelet map */
let map, marker, myIcon;
export const getMap = (lat, lng) => {
  // creates the map
  map = L.map("map", { zoomControl: false }).setView([lat, lng], 13);
  layer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  // when moving to another location
  map.addEventListener("moveend", () => {
    if (isFlying) {
      submitButton.classList.remove("waiting-submit-btn");
    }
  });

  // custom icon
  myIcon = L.icon({
    iconUrl: "./images/icon-location.svg",
    iconSize: [46, 55],
    iconAnchor: [23, 55],
  });

  // marker
  marker = L.marker([lat, lng], { icon: myIcon }).addTo(map);

  submitButton.classList.remove("waiting-submit-btn");
};
