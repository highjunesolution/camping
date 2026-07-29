import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInputs = ({ register, name, type, label, placeholder }) => {
  return (
    <div className="mb-2 space-y-1.5">
      <Label htmlFor={name} className="capitalize">{label}</Label>
      <Input
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormInputs;
