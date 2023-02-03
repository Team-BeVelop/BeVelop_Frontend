import React, { useState } from "react";
import styled from "styled-components";
import { Auth, SignUp } from "../../modules/auth";
import { IoIosClose } from "react-icons/io";
import { modal } from "../../modules/modal";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../useRedux/rootReducer";

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
    width: 36rem;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 2.4rem 0;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 6px;
    .logo {
        height: 25px;
        margin-bottom: 5.5rem;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 2.2rem;
        line-height: 2.6rem;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
    }
    .sentence {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 600;
        font-size: 2.1rem;
        line-height: 2.5rem;
        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
    }
    .subsentence {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
        margin-bottom: 3.4rem;
        margin-top: 1.2rem;
    }
    @media screen and (max-width: 480px) {
        transform: translate(-50%, -80%);
    }
`;
const LoginKind = styled.div`
    width: 32rem;
    .or {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        /* identical to box height */

        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
        margin: 3.8rem 1rem 2.8rem 1rem;
    }
    .or::after,
    .or::before {
        content: "";
        display: inline-block;
        width: 12rem;
        height: 0.1rem;
        margin: 0.4rem;
        background-color: #dadee2;
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
        margin: 1.4rem 0.5rem 2.4rem 0px;
        padding: 0 2rem;
        border: 1px solid #dadee2;
        border-radius: 6px;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.9rem;
    }
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.9rem;
        /* identical to box height */

        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
    }
    input::placeholder {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #8b95a1;
    }
`;
const CloseBtn = styled(IoIosClose)`
    font-size: 3rem;
`;
const Button = styled.div`
    position: absolute;
    right: 2rem;
    top: 2.2rem;
    cursor: pointer;
`;

const Login = () => {
    const dispatch = useAppDispatch();
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
    const { Users } = useSelector((state: RootState) => ({
        Users: state.AuthSlice
    }));
    const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    };
    const handleSignUpInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
    };
    const isActive = !(formInput.id.length > 4 && formInput.pw.length > 4);
    const signInBtn = () => {
        dispatch(Auth({ email: formInput.id, password: formInput.pw }));
        if (Users.action === "AUTH_ERROR") alert("로그인에 실패하였습니다");
    };

    const signUpBtn = () => {
        dispatch(
            SignUp({
                email: signUpInput.id,
                password: signUpInput.pw,
                name: signUpInput.nickName
            })
        );
    };

    return (
        <Wrap>
            <LoginBox>
                <Button onClick={() => dispatch(modal({ Modal: false }))}>
                    <CloseBtn />
                </Button>
                <h1 className="logo">BeVelop</h1>
                <p className="sentence">프로젝트를 생성하고</p>
                <p className="sentence">참여해보세요</p>
                <p className="subsentence">BeVelop에서 시작해보세요</p>
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
