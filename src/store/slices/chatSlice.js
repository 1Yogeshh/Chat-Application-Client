import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getMyChatsAPI,
    getMessagesAPI,
    sendMessageAPI,
    startPrivateChatAPI,
} from "../../api/chat.api";

// fetch chat list
export const fetchChats = createAsyncThunk(
    "chat/fetchChats",
    async (_, { rejectWithValue }) => {
        try {
            const res = await getMyChatsAPI();
            console.log(res.data)
            return res.data;
        } catch (e) {
            return rejectWithValue(e.response?.data);
        }
    }
);

// fetch messages
export const fetchMessages = createAsyncThunk(
    "chat/fetchMessages",
    async (chatId, { rejectWithValue }) => {
        try {
            const res = await getMessagesAPI(chatId);
            console.log(res)
            return { chatId, messages: res.data };
        } catch (e) {
            return rejectWithValue(e.response?.data);
        }
    }
);

// send message
export const sendMessage = createAsyncThunk(
    "chat/sendMessage",
    async (payload, { rejectWithValue }) => {
        console.log("🔥 sendMessage THUNK CALLED", payload);
        try {
            const res = await sendMessageAPI(payload);
            console.log(res)
            return res.data;
        } catch (e) {
            return rejectWithValue(e.response?.data);
        }
    }
);

export const startPrivateChat = createAsyncThunk(
    "chat/startPrivate",
    async ({ otherUserId, userData }, { rejectWithValue }) => {
        try {
            const res = await startPrivateChatAPI(otherUserId);
            return {
                ...res.data.chat,
                _userData: userData
            };
        } catch (e) {
            return rejectWithValue(e.response?.data);
        }
    }
);


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        activeChatId: null,
        messages: {},
        loading: false,
        onlineUsers: {},
    },
    reducers: {
        setActiveChat: (state, action) => {
            state.activeChatId = action.payload;
        },
        addMessage: (state, action) => {
            const { chatId, message } = action.payload;

            if (!state.messages[chatId]) {
                state.messages[chatId] = [];
            }

            state.messages[chatId].push(message);

            // 🔥 Update last message in chat list
            const chatIndex = state.chats.findIndex(c => c.id === chatId);

            if (chatIndex !== -1) {
                const chat = state.chats[chatIndex];

                chat.lastMessage = message;

                // 🔥 Move chat to top
                state.chats.splice(chatIndex, 1);
                state.chats.unshift(chat);
            }
        },
        updateSeen: (state, action) => {
            const { chatId, lastSeenMessageId } = action.payload;

            const msgs = state.messages[chatId];
            if (!msgs) return;

            msgs.forEach(msg => {
                if (msg.id === lastSeenMessageId) {
                    msg.status = "SEEN";
                }
            });
        },
        setUserOnline: (state, action) => {
            state.onlineUsers[action.payload] = true;
        },
        setUserOffline: (state, action) => {
            state.onlineUsers[action.payload] = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChats.fulfilled, (state, action) => {
                state.chats = action.payload;
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.messages[action.payload.chatId] =
                    action.payload.messages;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                const msg = action.payload;
                const chatId = msg.chatId;

                if (!state.messages[chatId]) {
                    state.messages[chatId] = [];
                }

                state.messages[chatId].push(msg);

                // 2️⃣ update last message in chat list
                const chat = state.chats.find(c => c.id === chatId);
                if (chat) {
                    chat.lastMessage = msg;
                }

                // 3️⃣ move chat to top (like WhatsApp)
                state.chats = [
                    chat,
                    ...state.chats.filter(c => c.id !== chatId)
                ];
            })
            .addCase(startPrivateChat.fulfilled, (state, action) => {
                const chat = action.payload;

                const existing = state.chats.find(c => c.id === chat.id);

                if (!existing) {
                    state.chats.unshift({
                        ...chat,
                        otherUser: chat._userData, // ✅ correct
                        lastMessage: null
                    });
                }

                state.activeChatId = chat.id;
            });
    },
});

export const { 
    setActiveChat, 
    addMessage, 
    updateSeen, 
    setUserOffline, 
    setUserOnline 
} = chatSlice.actions;
export default chatSlice.reducer;
