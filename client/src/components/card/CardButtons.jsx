import { SignInButton } from "@clerk/react";
import { Heart, RotateCw } from "lucide-react";

export const CardSubmitButtons = ({ isPending, isFavorite }) => {
  return (
    <button>
      {isPending ? (
        <RotateCw className="animate-spin" />
      ) : isFavorite ? (
        <Heart
          className="hover:scale-110 hover:duration-300"
          fill="red"
          size={34}
          stroke="white"
        />
      ) : (
        <Heart
          className="hover:scale-110 hover:duration-300"
          size={34}
          stroke="blue"
        />
      )}
    </button>
  );
};

export const CardSignInButtons = () => {
  return (
    <SignInButton mode="modal" className="hover:cursor-pointer">
      <Heart
        className="hover:scale-110 hover:duration-300"
        size={34}
        stroke="blue"
      />
    </SignInButton>
  );
};
