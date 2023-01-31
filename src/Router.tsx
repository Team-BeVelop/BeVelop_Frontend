import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import RecruitPage from "./pages/RecruitPage";
import store from "./useRedux/rootReducer";

function Router() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/recruit" element={<RecruitPage />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}
export default Router;
