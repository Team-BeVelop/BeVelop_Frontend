import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { auth, SignUp } from "../../modules/auth";
import { IoIosClose } from "react-icons/io";
import { modal } from "../../modules/modal";
import { useSelector } from "react-redux";

type User = {
    id: string;
    pw: string;
};
type UserSignUp = {
    id: string;
    pw: string;
    nickName: string;
};
const Wrap = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
`;
const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 20px 30px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 6px;
    .logo {
        height: 25px;
        margin-bottom: 30px;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
    }
    .sentence {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
        margin-bottom: 1.1rem;
    }
    .subsentence {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
        margin-bottom: 65px;
    }
    @media screen and (max-width: 480px) {
        transform: translate(-50%, -80%);
    }
`;
const LoginKind = styled.div`
    .or {
        text-align: center;
        margin: 20px;
    }
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
    }
    a {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        text-align: center;
        text-decoration-line: underline;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #7a5df5;
        margin-left: 6px;
    }
`;
const Box = styled.div<{ bgColor: any; color: any }>`
    width: 320px;
    height: 54px;
    border-radius: 6px;
    background-color: ${props => props.bgColor};
    margin-bottom: 12px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 54px;
    /* identical to box height */

    text-align: center;
    font-feature-settings: "tnum" on, "lnum" on;

    color: ${props => props.color};
`;
const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 320px;
        height: 48px;
        margin: 14px 5px 24px 0px;
        padding: 0 20px;
        border: 1px solid #dadee2;
        border-radius: 6px;
    }
    p {
        margin: 5px;
    }
    input::placeholder {
        font-size: 12px;
    }
`;
const ButtonBox = styled.div`
    .signInBtn {
        width: 320px;
        height: 40px;
        margin: 40px 0 0 0;
        border: 2px solid #000062;
        border-radius: 20px;
        text-align: center;
        line-height: 40px;
        font-weight: 700;
        color: #000062;
    }

    .or {
        text-align: center;
        margin: 20px;
    }

    .signUpBtn {
        display: table;
        margin: 0 auto;
        font-weight: 500;
        color: #000062;
    }
`;
const Button = styled.div`
    position: absolute;
    right: 26.25px;
    top: 26px;
    font-size: 30px;
    cursor: pointer;
`;

const Login = () => {
    const dispatch = useDispatch<any>();
    const [signUp, setSignUp] = useState<any>(false);
    const [formInput, setFormInput] = useState<User>({
        id: "",
        pw: ""
    });
    const [signUpInput, setSignUpInput] = useState<UserSignUp>({
        id: "",
        pw: "",
        nickName: ""
    });
    const { Users } = useSelector((state: any) => ({
        Users: state.auth
    }));
    const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    };
    const handleSignUpInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
    };
    const isActive = !(formInput.id.length > 4 && formInput.pw.length > 4);
    const signInBtn = () => {
        dispatch(auth(formInput.id, formInput.pw));
        if (Users.action.type === "AUTH_ERROR")
            alert("로그인에 실패하였습니다");
        OnclickPopUp();
    };

    const signUpBtn = () => {
        dispatch(SignUp(signUpInput.id, signUpInput.pw, signUpInput.nickName));
    };

    const OnclickPopUp = () => {
        dispatch(modal());
    };

    return (
        <Wrap>
            <LoginBox>
                <Button onClick={OnclickPopUp}>
                    <IoIosClose />
                </Button>
                <h1 className="logo">BeVelop</h1>
                <p className="sentence">발전을 위한 프로젝트</p>
                <p className="sentence">BeVelop</p>
                <p className="subsentence">함께할 팀원들을 모으고 참여하세요</p>
                {signUp ? (
                    <InputBox>
                        <p>이메일</p>
                        <input
                            onChange={handleSignUpInput}
                            value={signUpInput.id}
                            name="id"
                            type="text"
                            placeholder="이메일을 입력해주세요"
                        ></input>
                        <p>닉네임</p>
                        <input
                            onChange={handleSignUpInput}
                            value={signUpInput.nickName}
                            name="nickName"
                            type="text"
                            placeholder="닉네임을 입력해주세요"
                        ></input>
                        <p>비밀번호</p>
                        <input
                            onChange={handleSignUpInput}
                            value={signUpInput.pw}
                            name="pw"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                        ></input>

                        <Box
                            color="#888A92"
                            bgColor="#F2F4F6"
                            onClick={signUpBtn}
                        >
                            회원가입
                        </Box>
                    </InputBox>
                ) : (
                    <LoginKind>
                        <Box color="#3C1E1E" bgColor="#F7E317">
                            카카오로 시작하기
                        </Box>
                        <Box color="#FFFFFF" bgColor="#24292F">
                            Github로 시작하기
                        </Box>
                        <div className="or">또는</div>
                        <Box
                            color="#FFFFFF"
                            bgColor="#7A5DF5"
                            onClick={() => setSignUp(true)}
                        >
                            이메일로 가입하기
                        </Box>
                        <p>
                            이미 계정이 있으신가요?<a>로그인</a>
                        </p>
                    </LoginKind>
                )}

                {/* <ButtonBox>
                <button onClick={signInBtn} className="signInBtn" disabled={isActive}>Sign In</button>
                <div className="or" >또는</div>
                <button onClick={signUpBtn} className="signUpBtn">Sign Up</button>
                </ButtonBox> */}
            </LoginBox>
        </Wrap>
    );
};

export default Login;
