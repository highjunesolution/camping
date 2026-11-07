import { categories } from "@/utils/categories";
import { useSearchParams } from "react-router";

const CategoryLists = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const hdlFilter = (category)=>{
        const params = new URLSearchParams(searchParams);
        const c = searchParams.get("category");
        if(c === category) {
            params.delete("category")
        } else {
            params.set("category", category)
        }
        setSearchParams(params)
    }

  return (
    <div className="flex justify-between">
      {categories.map((item) => {
        return (
          <button
            key={item.label}
            onClick={()=>hdlFilter(item.label)}
            className="flex flex-col items-center m-2 cursor-pointer hover:text-green-400"
          >
            <item.icon />
            <p className="capitalize font-semibold">{item.label}</p>
          </button>
        );
      })}
    </div>
  );
};
export default CategoryLists;
