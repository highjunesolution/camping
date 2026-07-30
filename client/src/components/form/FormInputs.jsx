import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInputs = ({ register, name, type, label, placeholder, errors }) => {

  // console.log("test", errors[name]?.message)
  return (
    <div className="mb-2 space-y-1.5">
      <Label htmlFor={name} className="capitalize">{label}</Label>
      <Input
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        className={errors[name] && "border-red-400"}
      />
      { errors[name] && (<span className="text-red-500 text-sm">{errors[name].message}</span>)}
    </div>
  );
};
export default FormInputs;
