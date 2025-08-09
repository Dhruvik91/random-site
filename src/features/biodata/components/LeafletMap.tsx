"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function LeafletMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    (async () => {
      if (typeof window === "undefined") return;
      const L = (await import("leaflet")).default;
      const iconRetinaUrl = (
        await import("leaflet/dist/images/marker-icon-2x.png")
      ).default as unknown as string;
      const iconUrl = (await import("leaflet/dist/images/marker-icon.png"))
        .default as unknown as string;
      const shadowUrl = (await import("leaflet/dist/images/marker-shadow.png"))
        .default as unknown as string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default as any).prototype._getIconUrl;
      L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });
    })();
  }, []);

  if (!mounted) return null;

  const position: [number, number] = [21.9607, 70.7929]; // Gondal, Rajkot

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full rounded-xl overflow-hidden"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Gondal, Rajkot 360311</Popup>
      </Marker>
    </MapContainer>
  );
}
