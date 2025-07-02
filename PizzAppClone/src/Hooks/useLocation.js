import { useState } from "react";
import axios from "axios";

const useLocation = () => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const res = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=9bdac21c4f474c6db728afb4c25e1f78`
          );

          const address = res.data.results[0]?.formatted || "Address not found";
          setLocation(address);
        } catch (err) {
          setError("Failed to fetch location");
        }
      },
      (err) => {
        setError("Location permission denied");
      }
    );
  };

  return { location, error, fetchLocation };
};

export default useLocation;
