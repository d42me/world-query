"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

import QueryInput from "@/ui/QueryInput";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

export default function Home() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    if (!mapContainer.current) return;
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: "mapbox://styles/reactionlinkde/cleoon4zs000q01ms4yipsg02",
      style: "mapbox://styles/reactionlinkde/cleopuzm3000201qr67lgf5ne",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.setProjection("globe");
  });

  return (
    <main className="relative w-full h-screen bg-black">
      {/* TODO: Add texture for background */}
      <QueryInput />

      <div ref={mapContainer} className="w-full h-full" />
    </main>
  );
}
