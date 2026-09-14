import { addOrRemoveFavorite, listCamping } from "@/api/camping";
import { create } from "zustand";

// Step 1 Create Store
const campingStore = (set) => ({
  campings: [],
  actionListCampings: async(id)=>{
    try {
        const res = await listCamping(id);
        set({campings: res.data.result})
    } catch (error) {
        console.log(error)
    }
  },
  actionAddorRemoveFavorite: async(token, data)=>{
    const res = await addOrRemoveFavorite(token, data)
    console.log(res)
    return res
  }
});

const useCampingStore = create(campingStore);

// Step 2 Export Store
export default useCampingStore;
