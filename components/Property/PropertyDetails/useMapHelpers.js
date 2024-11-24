import { NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY } from "@/constants";
import { useEffect, useState } from "react";
import { fromAddress, setDefaults } from "react-geocode";

const useMapHelpers = (property) => {
  const {
    location: { street, city, state, zipcode },
  } = property;
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: "100%",
    height: "500px",
  });

  const [loading, setLoading] = useState(true);
  const [geocodeError, setGeocodeError] = useState(false);

  setDefaults({
    key: NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY,
    language: "en",
    region: "us",
  });

  useEffect(() => {
    const fetchCords = async () => {
      try {
        const res = await fromAddress(`${street} ${city} ${state} ${zipcode}`);

        // Check geocode results
        if (res.results.length === 0) {
          setGeocodeError(true);
          return;
        }

        const { lat, lng } = res.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewport({ ...viewport, latitude: lat, longitude: lng });
      } catch (error) {
        console.log(error);
        setGeocodeError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCords();
  }, []);

  return { lat, lng, loading, geocodeError };
};

export { useMapHelpers };
