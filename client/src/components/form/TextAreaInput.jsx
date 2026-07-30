import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextAreaInput = ({ register, name, label, placeholder, errors }) => {
  return (
    <div className="mb-2 space-y-1.5">
      <Label htmlFor={name} className="capitalize">{label}</Label>
      <Textarea
        {...register(name)}
        rows={5}
        name={name}
        placeholder={placeholder}
        className={errors[name] && "border-red-500"}
      />
      {errors[name] && (<span className="text-red-500 text-sm">{errors[name]?.message}</span>)}
    </div>
  );
};
export default TextAreaInput;
