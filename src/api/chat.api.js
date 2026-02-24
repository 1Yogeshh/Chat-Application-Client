import api from "./axios";

//get all chats
export const getMyChatsAPI = () => {
    return api.get("/api/chats");
}

//get message API
export const getMessagesAPI = (chatId, cursor = null) => {
    return api.get(`/api/chat/${chatId}`, {
        params: {
            cursor
        }
    });
};

//send message api
export const sendMessageAPI = (data) => {
    return api.post("/api/chat/send", data);
}

//start and get private chat
export const startPrivateChatAPI = (otherUserId) => {
    return api.get(`/api/chat/private/${otherUserId}`)
}