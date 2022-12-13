import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { roomsList, posterLink } from "../../data";
import {
  DateDecontructor,
  LanguageDecontructor,
} from "../Home/eventsMap/EventMothods";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafeletMap(props) {
  // Berlin coordinates
  const position = [52.51, 13.38];

  return (
    <div className="map" id="map">
      <MapContainer
        center={position}
        Icon={Icon}
        zoom={3}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>???</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
