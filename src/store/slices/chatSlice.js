import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    getMyChatsAPI,
    getMessagesAPI,
    sendMessageAPI,
} from "../../api/chat.api";

// 🔹 Fetch chat list
export const fetchChats = createAsyncThunk(
    "chat/fetchChats",
    async (_, { rejectWithValue }) => {
        try {
            const res = await getMyChatsAPI();
            return res.data;
        } catch (e) {
            return rejectWithValue(e.response?.data);
        }
    }
);

// 🔹 Fetch messages
export const fetchMessages = createAsyncThunk(
    "chat/fetchMessages",
    async (chatId, { rejectWithValue }) => {
        try {
            const res = await getMessagesAPI(chatId);
            return { chatId, messages: res.data };
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
            state.messages[chatId]?.push(message);
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
            });
    }
})

export const { setActiveChat, addMessage } = chatSlice.actions;
export default chatSlice.reducer;