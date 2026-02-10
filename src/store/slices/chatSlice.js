import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getMyChatsAPI,
    getMessagesAPI,
    sendMessageAPI,
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

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: [],
        activeChatId: null,
        messages: {},
        loading: false,
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
        },
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
            });
},
});

export const { setActiveChat, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
