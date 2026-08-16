import { MapContainer } from "react-leaflet";
import Layers from "./Layers";
const MapHome = () => {
  return (
    <MapContainer
      className="h-[50vh]"
      center={[13.030890206370149, 101.12311706637692]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <Layers />
    </MapContainer>
  );
};
export default MapHome;
