import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schema";
import Buttons from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import MainMap from "@/components/map/MainMap";
import { createCamping } from "@/api/camping";
import { useAuth } from "@clerk/react";

const Camping = () => {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(campingSchema),
  });

  const { errors, isSubmitting } = formState;
  const { getToken } = useAuth();
  const juSubmit = async (data) => {
    const token = await getToken();
    console.log(token)
    createCamping(token, data)
      .then((res) => console.log(res))
      .catch(err => console.log(err.response ?? err.message));
  };

  console.log(isSubmitting);
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
            <CategoryInput
              register={register}
              name={"category"}
              setValue={setValue}
            />
          </div>
          <MainMap register={register} setValue={setValue} />
          <Buttons
            type={"submit"}
            text={"Create Camping"}
            isPending={isSubmitting}
          />
        </form>
      </div>
    </section>
  );
};
export default Camping;
