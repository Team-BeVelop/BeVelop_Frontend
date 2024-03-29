import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { AuthSlice } from "../modules/auth";
import { useDispatch } from "react-redux";
import actions from "../modules/modal";
import { UserSlice } from "../modules/user";
import { ProjectSlice } from "../modules/project";
import { StudySlice } from "../modules/study";

const reducer = combineReducers({
    AuthSlice: AuthSlice.reducer,
    ProjectSlice: ProjectSlice.reducer,
    StudySlice: StudySlice.reducer,
    modal: actions,
    UserSlice: UserSlice.reducer
});

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
