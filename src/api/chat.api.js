import api from "./axios";

export const getMyChatsAPI = () => {
    return api.get("/api/chats");
}

export const getMessagesAPI = (chatId) => {
    console.log(chatId)
    return api.get(`/api/chat/${chatId}`);
}

export const sendMessageAPI = (data) => {
    return api.post("/api/chat/send", data);
}