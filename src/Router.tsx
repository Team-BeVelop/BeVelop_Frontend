import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import RecruitPage from "./pages/RecruitPage";
import ProjectNewPage from "./pages/ProjectNewPage";
import PostPage from "./pages/PostPage";
import PostNewPage from "./pages/PostNewPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import PostDetailPage from "./pages/PostDetailPage";
import User_first from "./components/User/user_first";
import store from "./useRedux/rootReducer";
import UserEditPage from "./pages/UserEditPage";

function Router() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/user/edit" element={<UserEditPage />} />
                    <Route path="/recruit" element={<RecruitPage />} />
                    <Route path="/project/new" element={<ProjectNewPage />} />
                    <Route
                        path="/project/:id"
                        element={<ProjectDetailPage />}
                    />
                    <Route path="/post" element={<PostPage />} />
                    <Route path="/post/new" element={<PostNewPage />} />
                    <Route path="/post/:id" element={<PostDetailPage />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}
export default Router;
