import { useDispatch, useSelector } from "react-redux";
import { selectLocation, SET_LOCATION } from "../store/location/LocationSlice";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import useDeviceInfo from "../hooks/useDeviceInfo";

const TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;

const InitializeGA4 = () => {
  ReactGA.initialize(TRACKING_ID);
  const { type, model, os } = useDeviceInfo();

  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        const locationData = {
          ip: data.ip,
          city: data.city,
          region: data.region,
          country: data.country_name,
          isp: data.org,
        };

        dispatch(SET_LOCATION(locationData));

        ReactGA.set({
          type: type,
          model: model,
          os: os,
          ip: locationData.ip,
          city: locationData.city,
          region: locationData.region,
          country: locationData.country,
          isp: locationData.isp,
        })

        ReactGA.event("User Data", {
          type: type,
          model: model,
          os: os,
          ip: locationData.ip,
          city: locationData.city,
          region: locationData.region,
          country: locationData.country,
          isp: locationData.isp,
        });

      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };

    if (!location.ip) {
      fetchLocation();
    }
  }, [dispatch, location.ip]);

  return null;
}

export default InitializeGA4