import useCampingStore from "@/store/camping-store";
import MapHome from "../map/MapHome";
import CampingLists from "./CampingLists";
import { useEffect } from "react";
import { useUser } from "@clerk/react";
import CategoryLists from "./CategoryLists";

const CampingContainer = () => {
  const actionListCampings = useCampingStore(state=>state.actionListCampings);
  const { user } = useUser()
  useEffect(()=>{
    // 
    const id = user?.id ?? null;
    actionListCampings(id);
  },[user?.id, actionListCampings])

  return (
    <div>
      <CategoryLists/>
      <MapHome />
      <CampingLists />
    </div>
  );
};
export default CampingContainer;
