import api from "./axios"

export const loginAPI = (data) => {
    return api.post("/auth/login", data)
}

export const registerAPI = (data) => {
    return api.post("/auth/register", data)
}