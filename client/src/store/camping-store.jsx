import { listCamping } from "@/api/camping";
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
  }
});

const useCampingStore = create(campingStore);

// Step 2 Export Store
export default useCampingStore;
