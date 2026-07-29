import { Link } from "react-router";
import { buttonVariants } from "../ui/button";

const Logo = () => {
  return (
    <Link to="/" className={buttonVariants()}>
      Logo
    </Link>
  );
};
export default Logo;
