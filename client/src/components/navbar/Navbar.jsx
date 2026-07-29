import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-col sm:flex-row py-4 px-8 gap-4 justify-between">
            <Logo/>
            <Searchbar/>
            <DropdownListMenu/>
        </div>
    </nav>
  )
}
export default Navbar