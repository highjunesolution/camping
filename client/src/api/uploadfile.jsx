import axios from "axios";

export const uploadImage = async (token, form) => {
  return await axios.post(
    "http://localhost:5500/api/image/upload",
    { image: form },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
