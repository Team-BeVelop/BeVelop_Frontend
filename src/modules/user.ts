import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as userAPI from "../api/user";

const USER = "USER"; //로그인 요청
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

export const UserEdit = createAsyncThunk(
    "EDIT_USER",
    async (
        {
            interests,
            introduce,
            job,
            nickname,
            stackName,
            url,
            id,
            accessToken
        }: {
            interests: string;
            introduce: string;
            job: string;
            nickname: string;
            stackName: string[];
            url: string;
            id: number;
            accessToken: string;
        },
        thunkAPI: any
    ) => {
        try {
            return (
                await userAPI.UserEdit(
                    interests,
                    introduce,
                    job,
                    nickname,
                    stackName,
                    url,
                    id,
                    accessToken
                )
            ).data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    isLoading: false,
    data: null,
    error: null
};

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [UserEdit.pending.type]: (state, action) => {
            state.isLoading = true;
        },
        [UserEdit.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [UserEdit.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
