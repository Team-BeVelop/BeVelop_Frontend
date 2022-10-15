import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "../modules/auth";
import modal from "../modules/modal";
import study from "../modules/study";
import project from "../modules/project";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth,
  modal,
  study,
  project,
});

export default persistReducer(persistConfig, rootReducer);
