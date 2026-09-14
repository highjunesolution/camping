import useCampingStore from "@/store/camping-store";
import { CardSubmitButtons } from "./CardButtons";
import { useForm } from "react-hook-form";
import { useAuth } from "@clerk/react";

const FavoriteToggleButton = ({ campingId, isFavorite }) => {
  // Clerk
  const { getToken } = useAuth();

  // Hook-Form
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const hdlSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await getToken();
    try {
      const res = await actionAddorRemoveFavorite(token, {
        campingId,
        isFavorite,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Zustand
  const actionAddorRemoveFavorite = useCampingStore(
    (state) => state.actionAddorRemoveFavorite,
  );
  return (
    <form onSubmit={handleSubmit(hdlSubmit)}>
      <CardSubmitButtons isPending={isSubmitting} isFavorite={isFavorite}/>
    </form>
  );
};
export default FavoriteToggleButton;
