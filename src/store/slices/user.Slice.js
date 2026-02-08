import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserAPI, getMyProfileAPI } from "../../api/user.api"

export const createUser = createAsyncThunk(
    "user/create",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await createUserAPI(payload);
            return res.data.user;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

export const fetchMyProfile = createAsyncThunk(
    "user/fetchMe",
    async (_, { rejectWithValue }) => {
        try {
            const res = await getMyProfileAPI();
            return res.data;
        } catch (error) {
            rejectWithValue(error.response?.data)
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        profile: null,
        loading: false,
        error: null,
        profileLoaded: false,
    },
    reducers: {
        clearUser: (state) => {
            state.profile = null,
                state.profileLoaded = false
        }
    },
    extraReducers: (builder) => {
        builder
            // CREATE USER
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload;
                state.profileLoaded = true;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // FETCH PROFILE
            .addCase(fetchMyProfile.fulfilled, (state, action) => {
                state.profile = action.payload;
                state.profileLoaded = true;
            });
    }
})

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;