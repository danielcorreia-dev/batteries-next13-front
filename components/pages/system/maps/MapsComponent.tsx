"use client";

import {
  GoogleMap,
  MapContext,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";

type Props = {};

const MapsComponent = (props: Props) => {
  const [location, setLocation] = useState({} as any);
  const [mapRef, setMapRef] = useState();
  const markers = useMemo(
    () => [
      {
        address: "R. Cel. Paranhos, 855 - Jacintinho",
        lat: -9.650716256975604,
        lng: -35.721226597804495,
      },
      {
        address: "R. Cleto Campelo - Jacintinho, Maceió - AL, 57041-000",
        lat: -9.640493808683356,
        lng: -35.717743215372124,
      },
    ],
    [],
  );
  useEffect(() => {
    const location = async () =>
      await fetch(
        "https://api.ipgeolocation.io/ipgeo?apiKey=5793f710c1e740988a2c22a252b0a704",
      );

    location().then((response) => {
      response.json().then((data) => {
        const { latitude, longitude } = data;
        setLocation({ lat: Number(latitude), lng: Number(longitude) });
      });
    });
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCZd0JhS__TQIPisvMdn3vuP9tDtoE6a48",
  });

  const center = useMemo(
    () => ({ lat: -9.645856578352305, lng: -35.728981360019795 }),
    [],
  );

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  return (
    <div className="absolute left-0 right-0 top-0 h-screen w-full">
      {isLoaded && location ? (
        <GoogleMap
          onLoad={onMapLoad}
          zoom={14}
          center={center}
          mapContainerClassName="absolute h-screen w-full"
        >
          {markers.map(({ lat, lng, address }, index) => (
            <Marker key={index} position={{ lat, lng }} />
          ))}
        </GoogleMap>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MapsComponent;
