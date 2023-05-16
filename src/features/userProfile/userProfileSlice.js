import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Spotify from "../../spotify/spotify";



export const getToken = createAsyncThunk(
    'userProfile/getToken',
    Spotify.getAccessToken
)

export const getUser = createAsyncThunk(
    'userProfile/getUser',
    Spotify.getUser
)


const options = {
    name: 'userProfile',
    initialState: {
        isLoading: false,
        hasFailed: false,
        userInfo: {},
        tokenInfo: {
            access_token: ''
        }
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            

            //fill in pending and rejected
            .addCase(getToken.fulfilled, (state,action) => {
                //prevents double load error in restrict mode
                if(action.payload){
                state.tokenInfo= action.payload;
                }
            })

            .addCase(getUser.fulfilled, (state, action) => {
                state.userInfo = action.payload;
            })
    }
}

const userProfileSlice = createSlice(options);
export const  selectAccessToken = state => state.userProfile.tokenInfo.access_token;
export const selectUserInfo = state => state.userProfile.userInfo;
export default userProfileSlice.reducer;