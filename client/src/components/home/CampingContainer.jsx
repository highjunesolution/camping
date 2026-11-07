import useCampingStore from "@/store/camping-store";
import MapHome from "../map/MapHome";
import CampingLists from "./CampingLists";
import { useEffect } from "react";
import { useUser } from "@clerk/react";
import CategoryLists from "./CategoryLists";
import { useSearchParams } from "react-router";

const CampingContainer = () => {
  const actionListCampings = useCampingStore(
    (state) => state.actionListCampings,
  );
  const actionFilter = useCampingStore((state) => state.actionFilter);

  const [searchParams] = useSearchParams();
  const { user } = useUser();
  const id = user?.id ?? null;

  const category = searchParams.get("category");
  const search = searchParams.get("search");

  useEffect(() => {
    if (search || category) {
      actionFilter(category, search);
    } else {
      actionListCampings(id);
    }
  }, [category, search, actionFilter, id, actionListCampings]);
  return (
    <div>
      <CategoryLists />
      <MapHome />
      <CampingLists />
    </div>
  );
};
export default CampingContainer;
