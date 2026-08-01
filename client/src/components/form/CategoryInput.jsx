import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { categories } from "@/utils/categories";

const CategoryInput = ({ register, name, setValue }) => {
  return (
    <div className="mb-2 space-y-1.5">
      <input hidden {...register(name)} />
      <Label className={"capitalize"}>{name}</Label>
      <Select onValueChange={(value) => setValue(name, value)} required>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Please select ${name}`}>
            {(value) => {
              const selected = categories.find((item) => item.label === value);

              return selected ? (
                <span className="flex items-center gap-x-2 capitalize">
                  <selected.icon className="size-4" />
                  {selected.label}
                </span>
              ) : (
                `Please select ${name}`
              );
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.map((item) => (
              <SelectItem key={item.label} value={item.label}>
                <span className="flex gap-x-2 capitalize">
                  <item.icon />
                  {item.label}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;
