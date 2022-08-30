import * as authAPI from "../api/auth";
const AUTH = "AUTH"; //로그인 요청
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_ERROR = "AUTH_ERROR";
const LOGOUT = "LOGOUT";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_ERROR = "LOGOUT_ERROR";

const SIGNUP = "SIGNUP"; // 회원가입 요청
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const SIGNUP_ERROR = "SIGNUP_ERROR";

export const auth =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch({ type: AUTH });
    try {
      const login = await authAPI.Login(email, password);
      dispatch({ type: AUTH_SUCCESS, login: login });
    } catch (e) {
      dispatch({ type: AUTH_ERROR, error: e });
    }
  };

export const LogOut = () => async (dispatch: any) => {
  dispatch({ type: LOGOUT }); // 요청이 시작됨
  try {
    dispatch({
      type: LOGOUT_SUCCESS,
    }); // 성공
  } catch (e) {
    dispatch({ type: LOGOUT_ERROR, error: e }); // 실패
  }
};

// 임시 회원가입
export const signup = () => async (dispatch: any) => {
  try {
    const res = await authAPI.Signup();
    console.log(res.data);
  } catch (e) {
    alert("회원가입에 실패하였습니다.");
  }
};

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};
export default function auths(state = initialState, action: any) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,

        isLoading: true,
        data: null,
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,

        isLoading: false,
        data: action.login.data,
        action: action,
        error: null,
      };
    case AUTH_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };

    case LOGOUT:
      return {
        ...state,

        isLoading: true,
        data: null,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: null,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
      };
    default:
      return state;
  }
}
