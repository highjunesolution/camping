import CampingCard from "@/components/card/CampingCard";
import useCampingStore from "@/store/camping-store";
import { useAuth } from "@clerk/react";
import { useEffect } from "react";

const MyFavorites = () => {
  const actionListFavorites = useCampingStore(
    (state) => state.actionListFavorites,
  );
  const favorites = useCampingStore((state) => state.favorites);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchFavorite = async () => {
      const token = await getToken();
      actionListFavorites(token);
    };
    fetchFavorite();
  }, [actionListFavorites, getToken]);
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {favorites.map((item) => (
        <CampingCard key={item.id} camping={item.landmark} />
      ))}
    </section>
  );
};
export default MyFavorites;
