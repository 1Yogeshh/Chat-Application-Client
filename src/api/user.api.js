import api from "./axios";

export const createUserAPI = (data) => {
    return api.post("/create", data)
}

export const getMyProfileAPI = () => {
    return api.get("/myprofile");
}