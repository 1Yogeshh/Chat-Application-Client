import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getMyChatsAPI,
    getMessagesAPI,
    sendMessageAPI,
    startPrivateChatAPI,
} from "../../api/chat.api";
import { showToast } from "../../utils/toast";

// fetch chat list
export const fetchChats = createAsyncThunk(
    "chat/fetchChats",
    async (_, { rejectWithValue }) => {
        try {
            const res = await getMyChatsAPI();
            return res.data;
        } catch (e) {
            showToast.error("Failed to load chats")
            return rejectWithValue(e.response?.data);
        }
    }
);

export const fetchMessages = createAsyncThunk(
    "chat/fetchMessages",
    async ({ chatId, cursor = null }, { rejectWithValue }) => {
        try {
            const res = await getMessagesAPI(chatId, cursor);

            return {
                chatId,
                messages: res.data.messages,
                nextCursor: res.data.nextCursor,
                hasMore: res.data.hasMore,
                isPagination: !!cursor
            };
        } catch (e) {
            showToast.error("Failed to load messages");
            return rejectWithValue(e.response?.data);
        }
    }
);

// send message
export const sendMessage = createAsyncThunk(
    "chat/sendMessage",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await sendMessageAPI(payload);
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
            showToast.error("Could not start chat");
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
        pagination: {},
        paginationLoading: {},
    },
    reducers: {
        setActiveChat: (state, action) => {
            state.activeChatId = action.payload;
        },
        resetChatState: (state) => {
            state.chats = [];
            state.activeChatId = null;
            state.messages = {};
            state.onlineUsers = {};
        },
        addMessage: (state, action) => {
            const { chatId, message } = action.payload;

            if (!state.messages[chatId]) {
                state.messages[chatId] = [];
            }

            state.messages[chatId].push(message);

            const chatIndex = state.chats.findIndex(c => c.id === chatId);

            if (chatIndex !== -1) {
                const chat = state.chats[chatIndex];

                chat.lastMessage = message;

                state.chats.splice(chatIndex, 1);
                state.chats.unshift(chat);
            }
        },
        updateSeen: (state, action) => {
            const { chatId, lastSeenMessageId, userId } = action.payload;

            const msgs = state.messages[chatId];
            if (!msgs) return;

            msgs.forEach(msg => {
                if (
                    msg.senderId !== userId &&
                    msg.id <= lastSeenMessageId
                ) {
                    msg.status = "SEEN";
                }
            });
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = {};
            action.payload.forEach(id => {
                state.onlineUsers[id] = true;
            });
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChats.fulfilled, (state, action) => {
                state.chats = action.payload;
            })
            // .addCase(fetchMessages.fulfilled, (state, action) => {
            //     state.messages[action.payload.chatId] =
            //         action.payload.messages;
            // })
            .addCase(fetchMessages.pending, (state, action) => {
                const { chatId, cursor } = action.meta.arg;

                // Only show loader for pagination (not first load)
                if (cursor) {
                    state.paginationLoading[chatId] = true;
                }
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                const { chatId, messages, nextCursor, hasMore, isPagination } = action.payload;

                if (!state.messages[chatId] || !isPagination) {
                    state.messages[chatId] = messages;
                } else {
                    const existingIds = new Set(
                        state.messages[chatId].map(m => m.id)
                    );

                    const filteredNewMessages = messages.filter(
                        m => !existingIds.has(m.id)
                    );

                    state.messages[chatId] = [
                        ...filteredNewMessages,
                        ...state.messages[chatId]
                    ];
                }

                state.pagination[chatId] = {
                    nextCursor,
                    hasMore
                };

                state.paginationLoading[chatId] = false;
            })
            .addCase(fetchMessages.rejected, (state, action) => {
                const { chatId } = action.meta.arg;
                state.paginationLoading[chatId] = false;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                const msg = action.payload;
                const chatId = msg.chatId;

                if (!state.messages[chatId]) {
                    state.messages[chatId] = [];
                }

                state.messages[chatId].push(msg);

                const chat = state.chats.find(c => c.id === chatId);
                if (chat) {
                    chat.lastMessage = msg;
                }

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
                        otherUser: chat._userData,
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
    setOnlineUsers,
    resetChatState
} = chatSlice.actions;
export default chatSlice.reducer;
