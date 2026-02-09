import api from "./axios";

export const getMyChatsAPI = () => {
    return api.get("/api/chats");
}

export const getMessagesAPI = (chatId) => {
    return api.get(`/chats/${chatId}/messages`);
}

export const sendMessageAPI = (data) => {
    return api.post("/mesages", data);
}