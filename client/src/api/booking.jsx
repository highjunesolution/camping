import axios from "axios";

export const createBooking = async (token, data) => {
  return axios.post(`http://localhost:5500/api/booking/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const checkOut = async (token, id) => {
  return await axios.post(
    "http://localhost:5500/api/booking/checkout",
    { id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const checkOutStatus = async (token, session) => {
  return await axios.get(
    "http://localhost:5500/api/booking/checkout-status/" + session,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const listBookings = async (token) => await axios.get("http://localhost:5500/api/booking/list", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
