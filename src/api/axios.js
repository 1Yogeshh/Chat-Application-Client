import axios from "axios";

const api = axios.create({
    baseURL: "https://api-gateway-n9ip.onrender.com/",
    withCredentials: true
})

// src/api/axios.js
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;