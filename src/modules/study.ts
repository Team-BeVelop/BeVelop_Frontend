import * as studyAPI from "../api/study";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 모든 스터디
export const getStudyList = createAsyncThunk(
    "GET_ALL_STUDY",
    async thunkAPI => {
        try {
            return (await studyAPI.getStudyList()).data;
        } catch (e: any) {
            return thunkAPI;
        }
    }
);

export const getStudy = createAsyncThunk(
    "GET_STUDY_DETAIL",
    async ({ token, id }: { token: string; id: string }, thunkAPI) => {
        try {
            return (await studyAPI.getStudyDetail(token, id)).data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(await e.response.data);
        }
    }
);

export const addNewStudy = createAsyncThunk(
    "ADD_NEW_STUDY",
    async (
        {
            token,
            description,
            division,
            emailUrl,
            endDate,
            enrollmentEndDate,
            kakaoUrl,
            maxMemberCount,
            recruitJobList,
            relatedFieldList,
            shortTitle,
            startDate,
            title
        }: {
            token: string;
            description: string;
            division: string;
            emailUrl: string;
            endDate: string;
            enrollmentEndDate: string;
            kakaoUrl: string;
            maxMemberCount: number;
            recruitJobList: string[];
            relatedFieldList: string[];
            shortTitle: string;
            startDate: string;
            title: string;
        },
        thunkAPI
    ) => {
        try {
            return (
                await studyAPI.addNewStudy(
                    token,
                    description,
                    division,
                    emailUrl,
                    endDate,
                    enrollmentEndDate,
                    kakaoUrl,
                    maxMemberCount,
                    recruitJobList,
                    relatedFieldList,
                    shortTitle,
                    startDate,
                    title
                )
            ).data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(await e.response.data);
        }
    }
);

const initialState = {
    isLoading: false,
    data: null,
    error: null,
    action: ""
};

export const StudySlice = createSlice({
    name: "study",
    initialState,
    reducers: {},
    extraReducers: {
        [getStudyList.pending.type]: (state, action) => {
            state.isLoading = true;
            state.action = action.type;
        },
        [getStudyList.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.action = action.type;
            state.data = action.payload;
        },
        [getStudyList.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.action = action.type;
            state.error = action.payload;
        },
        [getStudy.pending.type]: (state, action) => {
            state.isLoading = true;
            state.action = action.type;
        },
        [getStudy.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.action = action.type;
            state.data = action.payload;
        },
        [getStudy.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.action = action.type;
            state.error = action.payload;
        },
        [addNewStudy.pending.type]: (state, action) => {
            state.isLoading = true;
            state.action = action.type;
        },
        [addNewStudy.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.action = action.type;
            state.data = action.payload;
        },
        [addNewStudy.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.action = action.type;
            state.error = action.payload;
        }
    }
});
