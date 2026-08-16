"use client";

import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const start: [number, number] = [28.6128, 77.2065];

const destination: [number, number] = [
  28.6139,
  77.2090,
];

const route: [number, number][] = [
  start,
  [28.6131, 77.2072],
  [28.6135, 77.2082],
  destination,
];

const marker = (color: string) =>
  L.divIcon({
    className: "",
    html: `
      <div
        style="
          width:22px;
          height:22px;
          border-radius:50%;
          background:${color};
          border:3px solid white;
          box-shadow:0 0 18px ${color};
        "
      ></div>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });

export default function PremiumMap() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">

      <MapContainer
        center={[28.6134, 77.2078]}
        zoom={16}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
        className="h-full w-full"
      >

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
          attribution=""
        />

        <Polyline
          positions={route}
          pathOptions={{
            color: "#38bdf8",
            weight: 6,
            opacity: 0.95,
          }}
        />

        <Marker
          position={start}
          icon={marker("#22c55e")}
        />

        <Marker
          position={destination}
          icon={marker("#ff3b30")}
        />

        <Marker
          position={[28.6132, 77.2076]}
          icon={marker("#00bfff")}
        />

      </MapContainer>

      <div
        className="
          absolute
          left-4
          top-4
          z-[1000]
          rounded-full
          bg-black/70
          px-4
          py-2
          text-xs
          font-semibold
          tracking-[0.25em]
          text-cyan-300
          backdrop-blur-xl
        "
      >
        AI MONITORING
      </div>

    </div>
  );
}