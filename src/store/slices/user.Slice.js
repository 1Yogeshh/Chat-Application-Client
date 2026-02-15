import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserAPI, getMyProfileAPI, searchUserAPI } from "../../api/user.api"

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
            console.log(res)
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data)
        }
    }
)

export const searchUsers = createAsyncThunk(
    "user/search",
    async (query, { rejectWithValue }) => {
        try {
            const res = await searchUserAPI(query);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
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
        searchResults: []
    },
    reducers: {
        clearUser: (state) => {
            state.profile = null,
                state.profileLoaded = false
        },

        clearSearch: (state) => {
            state.searchResults = [];
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
                state.error = null;
            })
            .addCase(fetchMyProfile.rejected, (state, action) => {
                // ⚠️ 404 = profile not created yet (valid case)
                if (action.payload?.statusCode === 404) {
                    state.profile = null;
                    state.profileLoaded = true; // 🔥 THIS IS THE KEY
                    state.error = null;
                } else {
                    // real error
                    state.error = action.payload;
                    state.profileLoaded = true;
                }
            })

            .addCase(searchUsers.fulfilled, (state, action) => {
                state.searchResults = action.payload;
            })
    }
})

export const { clearUser, clearSearch } = userSlice.actions;
export default userSlice.reducer;