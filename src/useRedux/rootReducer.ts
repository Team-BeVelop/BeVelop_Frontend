import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "../modules/auth";
import modal from "../modules/modal";
const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
    auth,
    modal,
});

export default persistReducer(persistConfig, rootReducer);