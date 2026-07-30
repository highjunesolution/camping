import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { campingSchema } from "@/utils/schema";

const Camping = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(campingSchema),
  });

  const { errors } = formState;

  const juSubmit = (data) => {
    console.log(data);
  };
  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">Create camping</h1>
      <div className="border p-8">
        <form onSubmit={handleSubmit(juSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name={"title"}
              type={"text"}
              label={"Title"}
              placeholder={"input your title"}
              errors={errors}
            />
            <FormInputs
              register={register}
              name={"price"}
              type={"number"}
              label={"Price"}
              placeholder={"input your number"}
              errors={errors}
            />
            <TextAreaInput
              register={register}
              name={"description"}
              label={"Description"}
              placeholder={"input your description"}
              errors={errors}
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Camping;
