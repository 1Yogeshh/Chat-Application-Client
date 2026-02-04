import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "../../api/auth.api"

export const loginUser = createAsyncThunk(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await loginAPI(payload);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        loading: null,
        error: null
    },
    reducers: {
        Logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder
            //login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})