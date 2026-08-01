import { RotateCcw } from "lucide-react";
import { Button } from "../ui/button";

const Buttons = ({ type, text, isPending }) => {
  return (
    <Button type={type} className={`capitalize mt-2`} disabled={isPending}>
      {isPending ? (
        <>
          <span className="animate-spin">
            <RotateCcw />
          </span>
          <span>Please wait...</span>
        </>
      ) : (
        text
      )}
    </Button>
  );
};
export default Buttons;
