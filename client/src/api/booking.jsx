import axios from "axios";

export const createBooking = async (token, data) => {
    return axios.post(`http://localhost:5500/api/booking/create`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}