import { useSearchParams } from "react-router";
import { Input } from "../ui/input";
import { useDebouncedCallback } from "use-debounce";

const Searchbar = () => {
  const [searchParams, setSeachParams] = useSearchParams();

  const updateSearch = useDebouncedCallback((value)=>{
    console.log(value)
    const params = new URLSearchParams(searchParams);
    if(value) {
      params.set("search", value)
    } else {
      params.delete("search")
    }
    setSeachParams(params)
  }, 500)


  const hdlSearch = (e) => {
    updateSearch(e.target.value)
  };

  return <Input onChange={hdlSearch} placeholder="Search..." className={"max-w-xs"} />;
};
export default Searchbar;
