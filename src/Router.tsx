import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./useRedux/rootReducer";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import RecruitPage from "./pages/RecruitPage";
import RecruitDetailPage from "./pages/RecruitDetailPage";
import RecruitPsostPage from "./pages/RecruitPostPage";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk.withExtraArgument({}), logger))
);

const persistor = persistStore(store);

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/recruit" element={<RecruitPage />} />
            <Route path="/recruit/:id" element={<RecruitDetailPage />} />
            <Route path="/recruitPost" element={<RecruitPsostPage />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}
export default Router;
