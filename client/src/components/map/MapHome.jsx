import { listCamping } from "@/api/camping";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const MapHome = () => {
  const [landmarks, setLandmarks] = useState([]);
  const hdlGetLandmark = () => {
    // code
    listCamping()
      .then((res) => setLandmarks(res.data.result))
      .catch((err) => console.log(err.response ?? err.message));
  };

  useEffect(() => {
    // code first time render
    hdlGetLandmark();
  }, []);

  useEffect(() => {
    console.log(landmarks);
  }, [landmarks]);
  return (
    <MapContainer
      className="h-[50vh]"
      center={[13.030890206370149, 101.12311706637692]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {landmarks.map((item) => (
        <Marker key={item.id} position={[item.lat, item.lng]}>
          <Popup>
            {item.title} <br />
            {item.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default MapHome;
