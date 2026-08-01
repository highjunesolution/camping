import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function LocationMarker({ position, setPosition, setValue }) {
  const map = useMapEvents({
    click(e) {
      map.locate();
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      if (setValue) {
        setValue("lat", e.latlng.lat);
        setValue("lng", e.latlng.lng);
      }
    },
    // locationfound(e) {
    //   setPosition(e.latlng);
    //   map.flyTo(e.latlng, map.getZoom());
    //   console.log(e);
    // },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const MainMap = ({ register, location, setValue }) => {
  const [position, setPosition] = useState(null);
  const DEFAULT_LOCATION = [13.030890206370149, 101.12311706637692];
  return (
    <div>
      {register && (
        <>
          <input
            type="text"
            {...register("lat")}
            value={position ? position.lat : ""}
            hidden
          />
          <input
            type="text"
            {...register("lng")}
            value={position ? position.lng : ""}
            hidden
          />
        </>
      )}
      <h1 className="font-semibold mt-4">Where are you?</h1>
      {position && (
        <p className="text-sm text-slate-600 my-1.5">
          Coordinates : {position.lat.toFixed(6)}, {position.lat.toFixed(6)}
        </p>
      )}
      <MapContainer
        center={location || DEFAULT_LOCATION}
        zoom={13}
        scrollWheelZoom={true}
        className="h-[50vh] rounded-md z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          position={position}
          setPosition={setPosition}
          setValue={setValue}
        />
      </MapContainer>
    </div>
  );
};
export default MainMap;
