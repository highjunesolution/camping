import axios from "axios";

export const createCamping = async (token, data) =>
  await axios.post("http://localhost:5500/api/camping/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const listCamping = async (id) =>
  await axios.get(`http://localhost:5500/api/camping/list/${id}`);

export const readCamping = async (id) =>
  await axios.get(`http://localhost:5500/api/camping/${id}`);
