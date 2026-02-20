import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "../../api/auth.api"

export const loginUser = createAsyncThunk(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await loginAPI(payload);
            window.location.reload();
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
)

// REGISTER
export const registerUser = createAsyncThunk(
    "auth/register",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await registerAPI(payload);
            console.log(res.data)
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || "Register failed");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        accessToken: null,
        refreshToken: null,
        loading: false,
        error: null,
        registerSuccess: false
    },
    reducers: {
        Logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem("accessToken");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                localStorage.setItem("accessToken", action.payload.accessToken);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.registerSuccess = false;
            })

            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
                state.registerSuccess = true;
            })

            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;