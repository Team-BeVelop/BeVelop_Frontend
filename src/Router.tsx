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
import ProjectNewPage from "./pages/ProjectNewPage";
import PostPage from "./pages/PostPage";
import PostNewPage from "./pages/PostNewPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import PostDetailPage from "./pages/PostDetailPage";

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
            <Route path="/project/new" element={<ProjectNewPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/post/new" element={<PostNewPage />} />
            <Route path="/post/:id" element={<PostDetailPage />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}
export default Router;
