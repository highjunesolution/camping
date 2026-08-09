import { createProfile } from "@/api/profile";
import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import { profileSchema } from "@/utils/schema";
import { useAuth } from "@clerk/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Profile = () => {
  // Clerk
  const { getToken } = useAuth();

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(profileSchema),
  });
  const { errors, isSubmitting } = formState;

  const jukkruSubmit = async (data) => {
    const token = await getToken();
    createProfile(token, data)
      .then((res) => console.log(res))
      .catch((err) => console.log("errorrrr", err.response ?? err.message));
  };
  return (
    <section className="capitalize text-2xl font-semibold">
      <h1>Create Profile</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(jukkruSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name={"firstName"}
              type={"text"}
              errors={errors}
              placeholder={"Input your first name"}
              label={"Firstname"}
            />
            <FormInputs
              register={register}
              name={"lastName"}
              type={"text"}
              errors={errors}
              placeholder={"Input your last name"}
              label={"Lastname"}
            />
            <Buttons text={"Create Profile"} isPending={isSubmitting} />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Profile;
