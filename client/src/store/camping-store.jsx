import { addOrRemoveFavorite, listCamping } from "@/api/camping";
import { create } from "zustand";

// Step 1 Create Store
const campingStore = (set, get) => ({
  campings: [],
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

      const { campingId, isFavorite } = data
      const camping = get().campings;

      const updatedCamping = camping.map((item) =>
        item.id == campingId
          ? { ...item, isFavorite: !isFavorite }
          : item,
      );
      set({ campings: updatedCamping });

      return { 
        success: true,
        message: res.data?.message
       }
    } catch (error) {
      const err = error?.response?.data?.message
      return {
        success: false,
        message: err
      }
    }
  },
});

const useCampingStore = create(campingStore);

// Step 2 Export Store
export default useCampingStore;
