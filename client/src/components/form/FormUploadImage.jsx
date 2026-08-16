import { resizeFile } from "@/utils/resizeimage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAuth } from "@clerk/react";
import { uploadImage } from "@/api/uploadfile";
import { useState } from "react";
import { RotateCw } from "lucide-react";

const FormUploadImage = ({ setValue }) => {
  const [isLoding, setIsLoading] = useState(false);

  const { getToken } = useAuth();

  const hdlOnChange = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    if (!file) return;
    try {
      // code
      const token = await getToken();
      const resizedImage = await resizeFile(file);

      const res = await uploadImage(token, resizedImage);

      setValue("image", res.data.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Label>Upload Image</Label>
      <div className="flex items-center gap-2">
        <Input type={"file"} onChange={hdlOnChange} />
        {isLoding && <RotateCw className="animate-spin" />}
      </div>
    </div>
  );
};
export default FormUploadImage;
