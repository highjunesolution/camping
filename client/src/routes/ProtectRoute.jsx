import { useAuth } from "@clerk/react";
import { Link } from "react-router";

const ProtectRoute = ({ el }) => {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  if (!isSignedIn) {
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        <h1>Access denied!! Go to <Link to={"/"}>Signin page</Link></h1>
      </div>
    );
  }

  return el;
};
export default ProtectRoute;
