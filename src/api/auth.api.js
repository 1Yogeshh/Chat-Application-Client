import api from "./axios"

export const loginAPI = (data) => {
    return api.post("/login", data)
}

export const registerAPI = (data) => {
    return api.post("/register", data)
}