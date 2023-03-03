import * as projectAPI from "../api/project";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 모든 프로젝트
export const getProjectList = createAsyncThunk(
    "project/getProjectList",
    async thunkAPI => {
        try {
            return (await projectAPI.getProjectList()).data;
        } catch (e: any) {
            return thunkAPI;
        }
    }
);

const initialState = {
    isLoading: false,
    data: null,
    error: null,
    action: ""
};

export const ProjectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
    extraReducers: {
        [getProjectList.pending.type]: (state, action) => {
            state.isLoading = true;
            state.action = action.type;
        },
        [getProjectList.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.action = action.type;
            state.data = action.payload;
        },
        [getProjectList.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.action = action.type;
            state.error = action.payload;
        }
    }
});
