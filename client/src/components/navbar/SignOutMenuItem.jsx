import { useClerk } from "@clerk/react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { toast } from "../ui/toast";

const SignOutMenuItem = () => {
  const { signOut } = useClerk();
  const handleSignOut = async () => {
    
    try {
      await signOut({ redirectUrl: "/" });
    } catch {
      toast.add({
        type: "error",
        title: "Sign out failed",
        description: "Please try again",
      });
    }
  };
  return (
    <DropdownMenuItem className={"cursor-pointer"} onClick={handleSignOut}>
      Sign out
    </DropdownMenuItem>
  );
};
export default SignOutMenuItem;
