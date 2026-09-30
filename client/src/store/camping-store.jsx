import { listFavorite } from "@/api/camping";
import { addOrRemoveFavorite, listCamping } from "@/api/camping";
import { create } from "zustand";

// Step 1 Create Store
const campingStore = (set, get) => ({
  campings: [],
  favorites: [],
  actionListCampings: async (id) => {
    try {
      const res = await listCamping(id);
      set({ campings: res.data.result });
    } catch (error) {
      console.log(error);
    }
  },
  actionAddorRemoveFavorite: async (token, data) => {
    try {
      const res = await addOrRemoveFavorite(token, data);

      const { campingId, isFavorite } = data;
      const camping = get().campings;

      const updatedCamping = camping.map((item) =>
        item.id == campingId ? { ...item, isFavorite: !isFavorite } : item,
      );
      set({ campings: updatedCamping });

      // update favorites
      const favorites = get().favorites
      const updatedFavorite = favorites.filter((item)=>item.landmark.id !== campingId)
      set({favorites: updatedFavorite})

      return {
        success: true,
        message: res.data?.message,
      };
    } catch (error) {
      const err = error?.response?.data?.message;
      return {
        success: false,
        message: err,
      };
    }
  },
  actionListFavorites: async (token) => {
    try {
      const res = await listFavorite(token);
      set({ favorites: res.data.result })
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});

const useCampingStore = create(campingStore);

// Step 2 Export Store
export default useCampingStore;
