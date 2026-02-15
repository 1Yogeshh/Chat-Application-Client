import api from "./axios";

export const createUserAPI = (data) => {
    return api.post("/api/users/create", data)
}

export const getMyProfileAPI = () => {
    return api.get("/api/users/myprofile");
}

export const searchUserAPI = (query) => {
    return api.get(`/api/users/search?q=${query}`);
}
