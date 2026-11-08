import { MapContainer, useMap } from "react-leaflet";
import Layers from "./Layers";
import useCampingStore from "@/store/camping-store";

const MyCenter = ()=>{
  const center = useCampingStore(state=>state.center);
  const map = useMap()

  if(!center) {
    return null
  }

  map.flyTo(center, 8.5)

  return null
}

const MapHome = () => {
  return (
    <MapContainer
      className="h-[50vh] z-0"
      center={[13.030890206370149, 101.12311706637692]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <Layers />
      <MyCenter/>
    </MapContainer>
  );
};
export default MapHome;
