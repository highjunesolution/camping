import axios from "axios";

export const createProfile =  async (token, data) => {
//   console.log("function create profile", token, data);
  return await axios.post("http://localhost:5500/api/profile/create", data, {
    headers: {
        Authorization: `Bearer ${token}`
    }
  })
};
