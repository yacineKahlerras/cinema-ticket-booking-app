import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import geoIcon from "../../assets/geo-alt-fill.svg";
import "leaflet/dist/leaflet.css";

export default function LeafeletMap(props) {
  // Berlin coordinates
  const position = [36.7753606, 3.0601882];

  return (
    <div className="map" id="map">
      <MapContainer
        center={position}
        Icon={geoIcon}
        zoom={16}
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
