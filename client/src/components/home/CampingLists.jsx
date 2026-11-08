import useCampingStore from "@/store/camping-store";
import CampingCard from "../card/CampingCard";
import EmptyList from "./EmptyList";

const CampingLists = () => {
    const campings = useCampingStore(state => state.campings);
    if(campings.length === 0){
      return <EmptyList/>
    }

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {campings.map((item) => <CampingCard key={item.id} camping={item}/>)}
    </section>
  );
};
export default CampingLists;
