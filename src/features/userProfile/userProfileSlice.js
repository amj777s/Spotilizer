import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getUserProfile = createAsyncThunk(
    'userProfile/getUserProfile',
    async (search) => {
        const response = await fetc(search);
        const json = await response.json();
        return json;
    }
)

const options = {
    name: 'userProfile',
    initialState: {
        isLoading: false,
        hasFailed: false,
        userInfo: {}

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserProfile.pending, state => {
                state.isLoading = true;
                state.hasFailed = false;
            })
            
            .addCase(getUserProfile.fulfilled, (state,action) => {
                state.isLoading = false;
                state.hasFailed = false;
                state.userInfo = {
                    username: action.payload.username,
                    followers: action.payload.followers,
                    following: action.payload.following
                }
            })

            .addCase(getUserProfile.rejected, state => {
                state.isLoading = false;
                state.hasFailed = true;
            })
    }
}

const userProfileSlice = createSlice(options);
export default userProfileSlice.reducer;