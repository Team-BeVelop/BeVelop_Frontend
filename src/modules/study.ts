import * as authAPI from "../api/study";
const GET_ALL_STUDY = "GET_ALL_STUDY";
const GET_ALL_STUDY_SUCCESS = "GET_ALL_STUDY_SUCCESS";
const GET_ALL_STUDY_ERROR = "GET_ALL_STUDY_ERROR";
const GET_STUDY_DETAIL = "GET_STUDY_DETAIL";
const GET_STUDY_DETAIL_SUCCESS = "GET_STUDY_DETAIL_SUCCESS";
const GET_STUDY_DETAIL_ERROR = "GET_STUDY_DETAIL_ERROR";
const ADD_NEW_STUDY = "ADD_NEW_STUDY";
const ADD_NEW_STUDY_SUCCESS = "ADD_NEW_STUDY_SUCCESS";
const ADD_NEW_STUDY_ERROR = "ADD_NEW_STUDY_ERROR";

// 모든 프로젝트
export const getStudyList = () => async (dispatch: any) => {
  dispatch({ type: GET_ALL_STUDY });
  try {
    const getstudylist = await authAPI.getStudyList();
    dispatch({ type: GET_ALL_STUDY_SUCCESS, study: getstudylist });
  } catch (e) {
    dispatch({ type: GET_ALL_STUDY_ERROR, error: e });
  }
};

export const getStudy =
  (token: string, id: string) => async (dispatch: any) => {
    dispatch({ type: GET_STUDY_DETAIL });
    try {
      const getstudydetail = await authAPI.getStudyDetail(token, id);
      dispatch({ type: GET_STUDY_DETAIL_SUCCESS, studyDetail: getstudydetail });
    } catch (e) {
      dispatch({ type: GET_STUDY_DETAIL_ERROR, error: e });
    }
  };

export const addNewStudy =
  (
    token: string,
    description: string,
    division: string,
    emailUrl: string,
    endDate: string,
    enrollmentEndDate: string,
    kakaoUrl: string,
    maxMemberCount: number,
    recruitJobList: string[],
    relatedFieldList: string[],
    shortTitle: string,
    startDate: string,
    title: string
  ) =>
  async (dispatch: any) => {
    dispatch({ type: ADD_NEW_STUDY });
    try {
      const addnewstudy = await authAPI.addNewStudy(
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
      );
      dispatch({ type: ADD_NEW_STUDY_SUCCESS, newStudy: addnewstudy });
    } catch (e) {
      dispatch({ type: ADD_NEW_STUDY_ERROR, error: e });
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
        data: action.study.data.studies,
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
        data: action.studyDetail.data,
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
    case ADD_NEW_STUDY:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case ADD_NEW_STUDY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.newProject.data.msg,
        action: action,
        error: null,
      };
    case ADD_NEW_STUDY_ERROR:
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
