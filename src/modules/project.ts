import * as authAPI from "../api/project";
const GET_PROJECT_LIST = "GET_PROJECT_LIST";
const GET_PROJECT_LIST_SUCCESS = "GET_PROJECT_LIST_SUCCESS";
const GET_PROJECT_LIST_ERROR = "GET_PROJECT_LIST_ERROR";

// 모든 프로젝트
export const getProjectList = () => async (dispatch: any) => {
    dispatch({ type: GET_PROJECT_LIST });
    try {
        const getprojectlist = await authAPI.getProjectList();
        dispatch({ type: GET_PROJECT_LIST_SUCCESS, project: getprojectlist });
    } catch (e) {
        dispatch({ type: GET_PROJECT_LIST_ERROR, error: e });
    }
};

const initialState = {
    isLoading: null,
    data: null,
    error: null
};
export default function project(state = initialState, action: any) {
    switch (action.type) {
        case GET_PROJECT_LIST:
            return {
                ...state,
                isLoading: true,
                data: null,
                error: null
            };
        case GET_PROJECT_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.project.data,
                action: action,
                error: null
            };
        case GET_PROJECT_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                data: null,
                action: action,
                error: action.error
            };
        default:
            return state;
    }
}
