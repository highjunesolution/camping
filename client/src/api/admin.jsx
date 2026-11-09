import axios from "axios";

export const listStats = async (token) => {
    return axios.get("http://localhost:5500/api/admin/stats", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}