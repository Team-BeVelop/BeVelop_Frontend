import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as userAPI from "../api/user";

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

export const GetUserInfo = createAsyncThunk(
    "GET_USER",
    async (accessToken: string, thunkAPI: any) => {
        try {
            return (await userAPI.UserInfo(accessToken)).data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    isLoading: false,
    data: null,
    error: null,
    userInfo: {
        id: 0,
        interests: "",
        introduce: "",
        job: "",
        nickname: "",
        stackName: [],
        url: ""
    }
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
        },
        [GetUserInfo.pending.type]: (state, action) => {
            state.isLoading = true;
        },
        [GetUserInfo.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.userInfo.id = action.payload.id;
            state.userInfo.interests = action.payload.interests;
            state.userInfo.introduce = action.payload.introduce;
            state.userInfo.job = action.payload.job;
            state.userInfo.nickname = action.payload.nickname;
            state.userInfo.stackName = action.payload.attachedStacks.value;
            state.userInfo.url = action.payload.url;
        },
        [GetUserInfo.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
