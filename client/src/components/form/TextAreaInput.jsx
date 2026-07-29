import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextAreaInput = ({ register, name, label, placeholder }) => {
  return (
    <div className="mb-2 space-y-1.5">
      <Label htmlFor={name} className="capitalize">{label}</Label>
      <Textarea
        {...register(name)}
        rows={5}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
export default TextAreaInput;
