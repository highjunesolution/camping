import axios from "axios";

export const listStats = async (token) => {
    return axios.get("http://localhost:5500/api/admin/stats", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listReservations = async (token) => {
    return axios.get("http://localhost:5500/api/admin/reservations", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listAllReservations = async (token) => {
    return axios.get("http://localhost:5500/api/admin/all-reservations", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}