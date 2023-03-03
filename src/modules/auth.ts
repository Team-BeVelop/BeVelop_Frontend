import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as authAPI from "../api/auth";

export const Auth = createAsyncThunk(
    "AUTH",
    async (
        { email, password }: { email: string; password: string },
        thunkAPI
    ) => {
        try {
            return (await authAPI.Login(email, password)).data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(await e.response.data);
        }
    }
);

export const SignUp = createAsyncThunk(
    "SIGNUP",
    async (
        {
            email,
            nickname,
            password
        }: { email: string; nickname: string; password: string },
        thunkAPI
    ) => {
        try {
            return (await authAPI.SignUp(email, nickname, password)).data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(await e.response.data);
        }
    }
);

const initialState = {
    isLoading: false,
    data: {
        token: { access_token: null, refresh_token: null },
        user: null
    },

    error: null,
    action: ""
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [Auth.pending.type]: (state, action) => {
            state.isLoading = true;
            state.action = action.type;
        },
        [Auth.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.action = action.type;
            state.user = action.payload.user;
            state.token = action.payload.token.access_token;
        },
        [Auth.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.action = action.type;
            state.error = action.payload;
        },
        [SignUp.pending.type]: (state, action) => {
            state.isLoading = true;
            state.action = action.type;
        },
        [SignUp.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.action = action.type;
        },
        [SignUp.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.action = action.type;
        }
    }
});
