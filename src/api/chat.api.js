import api from "./axios";

//get all chats
export const getMyChatsAPI = () => {
    return api.get("/api/chats");
}

//get messages only
// export const getMessagesAPI = (chatId) => {
//     // console.log(chatId)
//     return api.get(`/api/chat/${chatId}`);
// }

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