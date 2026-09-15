import useCampingStore from "@/store/camping-store";
import { CardSignInButtons, CardSubmitButtons } from "./CardButtons";
import { useForm } from "react-hook-form";
import { useAuth } from "@clerk/react";
import { createNotify } from "@/utils/createAlert";

const FavoriteToggleButton = ({ campingId, isFavorite }) => {
  // Zustand
  const actionAddorRemoveFavorite = useCampingStore(
    (state) => state.actionAddorRemoveFavorite,
  );

  // Clerk
  const { getToken, isSignedIn } = useAuth();

  // Hook-Form
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const hdlSubmit = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await getToken();

    const res = await actionAddorRemoveFavorite(token, {
      campingId,
      isFavorite,
    });

    res.success
      ? createNotify("success", res.message)
      : createNotify("error", res.message);
  };

  if (!isSignedIn) return <CardSignInButtons />;

  return (
    <form onSubmit={handleSubmit(hdlSubmit)}>
      <CardSubmitButtons isPending={isSubmitting} isFavorite={isFavorite} />
    </form>
  );
};
export default FavoriteToggleButton;
