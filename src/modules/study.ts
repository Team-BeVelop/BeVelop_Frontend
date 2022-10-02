import * as authAPI from "../api/study";
const GET_ALL_STUDY = "GET_ALL_STUDY";
const GET_ALL_STUDY_SUCCESS = "GET_ALL_STUDY_SUCCESS";
const GET_ALL_STUDY_ERROR = "GET_ALL_STUDY_ERROR";
const GET_STUDY_DETAIL = "GET_STUDY_DETAIL";
const GET_STUDY_DETAIL_SUCCESS = "GET_STUDY_DETAIL_SUCCESS";
const GET_STUDY_DETAIL_ERROR = "GET_STUDY_DETAIL_ERROR";

export const getStudy = (token: string) => async (dispatch: any) => {
  dispatch({ type: GET_STUDY_DETAIL });
  try {
    const getstudydetail = await authAPI.getStudyDetail(token);
    dispatch({ type: GET_STUDY_DETAIL_SUCCESS, study: getstudydetail });
  } catch (e) {
    dispatch({ type: GET_STUDY_DETAIL_ERROR, error: e });
  }
};

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};
export default function study(state = initialState, action: any) {
  switch (action.type) {
    case GET_ALL_STUDY:
      return {
        ...state,

        isLoading: true,
        data: null,
        error: null,
      };
    case GET_ALL_STUDY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.study.data,
        action: action,
        error: null,
      };
    case GET_ALL_STUDY_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    case GET_STUDY_DETAIL:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case GET_STUDY_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.study.data,
        action: action,
        error: null,
      };
    case GET_STUDY_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    default:
      return state;
  }
}
