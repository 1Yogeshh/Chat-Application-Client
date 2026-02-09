import api from "./axios";

export const getMyChatsAPI = () => {
    return api.get("/chats");
}

export const getMessageAPI = (chatId) => {
    return api.get(`/chats/${chatId}/messages`);
}

export const sendMessageAPI = (data) => {
    return api.post("/mesages", data);
}