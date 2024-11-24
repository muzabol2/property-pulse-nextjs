"use client";

import Image from "next/image";
import { Spinner } from "../Spinner";
import { Card } from "./Card";
import { useMapHelpers } from "./useMapHelpers";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Pin } from "@/assets";
import { NEXT_PUBLIC_MAPBOX_TOKEN } from "@/constants";

const MapLocation = ({ property }) => {
  const { lat, lng, loading, geocodeError } = useMapHelpers(property);

  if (loading) {
    return (
      <Card>
        <Spinner />
      </Card>
    );
  }

  if (geocodeError) {
    return (
      <Card>
        <div className="text-xl">No location data found.</div>
      </Card>
    );
  }

  return (
    <Card>
      <Map
        mapboxAccessToken={NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 15,
        }}
        style={{ width: "100%", height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} anchor="bottom">
          <Image src={Pin} alt="location" width={40} height={40} />
        </Marker>
      </Map>
    </Card>
  );
};

export { MapLocation };
