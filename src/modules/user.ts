const USER = "USER"; //로그인 요청
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

export const UserInfo =
    (
        nickName: string,
        portFolio: string,
        link: string,
        email: string,
        kakao: string,
        Position: string,
        Interest: string,
        Stack: [],
        UserIntro: string,
        Thumb: any
    ) =>
    async (dispatch: any) => {
        dispatch({ type: USER });
        try {
            dispatch({
                type: USER_SUCCESS,
                userinfo: {
                    nickName: nickName,
                    portFolio: portFolio,
                    link: link,
                    email: email,
                    kakao: kakao,
                    Position: Position,
                    Interest: Interest,
                    Stack: Stack,
                    UserIntro: UserIntro,
                    Thumb: Thumb
                }
            });
        } catch (e) {
            dispatch({ type: USER_ERROR, error: e });
        }
    };

const initialState = {
    isLoading: null,
    data: null,
    error: null
};

export default function users(state = initialState, action: any) {
    switch (action.type) {
        case USER:
            return {
                ...state,

                isLoading: true,
                data: null,
                error: null
            };
        case USER_SUCCESS:
            return {
                ...state,

                isLoading: false,
                data: action.userinfo,
                action: action,
                error: null
            };
        case USER_ERROR:
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
