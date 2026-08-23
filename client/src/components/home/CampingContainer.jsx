import useCampingStore from "@/store/camping-store";
import MapHome from "../map/MapHome";
import CampingLists from "./CampingLists";
import { useEffect } from "react";

const CampingContainer = () => {
  const actionListCampings = useCampingStore(state=>state.actionListCampings);
  useEffect(()=>{
    actionListCampings();
  },[])

  return (
    <div>
      <MapHome />
      <CampingLists />
    </div>
  );
};
export default CampingContainer;
