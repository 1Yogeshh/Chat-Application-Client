import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import userReducer from "./slices/user.Slice"
import chatReducer from "./slices/chatSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        chat: chatReducer,
    }
})