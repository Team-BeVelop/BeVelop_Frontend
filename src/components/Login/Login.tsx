import React, { useMemo, useState } from "react";
import { Auth, SignUp } from "../../modules/auth";
import * as l from "./style/LoginStyle";
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

const Login = () => {
    const dispatch = useAppDispatch();
    const [signUp, setSignUp] = useState<any>(false);
    const [signIn, setSignIn] = useState<any>(false);
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
    useMemo(() => {
        if (Users.action === "AUTH/rejected")
            alert("아이디 혹은 비밀번호를 확인해주세요");
    }, [Users.action]);
    return (
        <l.Wrap>
            <l.LoginBox>
                <l.Button onClick={() => dispatch(modal({ Modal: false }))}>
                    <l.CloseBtn />
                </l.Button>
                <h1 className="logo">BeVelop</h1>
                <p className="sentence">프로젝트를 생성하고</p>
                <p className="sentence">참여해보세요</p>
                <p className="subsentence">BeVelop에서 시작해보세요</p>
                {signUp ? (
                    <l.InputBox>
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

                        <l.Box
                            color="#888A92"
                            bgColor="#F2F4F6"
                            onClick={signUpBtn}
                        >
                            회원가입
                        </l.Box>
                    </l.InputBox>
                ) : signIn ? (
                    <l.InputBox>
                        <p>이메일</p>
                        <input
                            onChange={handleFormInput}
                            value={formInput.id}
                            name="id"
                            type="text"
                            placeholder="이메일을 입력해주세요"
                        ></input>
                        <p>비밀번호</p>
                        <input
                            onChange={handleFormInput}
                            value={formInput.pw}
                            name="pw"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                        ></input>

                        <l.Box
                            color="#888A92"
                            bgColor="#F2F4F6"
                            onClick={signInBtn}
                        >
                            로그인
                        </l.Box>
                    </l.InputBox>
                ) : (
                    <l.LoginKind>
                        <l.Box color="#3C1E1E" bgColor="#F7E317">
                            카카오로 시작하기
                        </l.Box>
                        <l.Box color="#FFFFFF" bgColor="#24292F">
                            Github로 시작하기
                        </l.Box>
                        <div className="or">또는</div>
                        <l.Box
                            color="#FFFFFF"
                            bgColor="#7A5DF5"
                            onClick={() => setSignUp(true)}
                        >
                            이메일로 가입하기
                        </l.Box>
                        <p>
                            이미 계정이 있으신가요?
                            <a onClick={() => setSignIn(true)}>로그인</a>
                        </p>
                    </l.LoginKind>
                )}

                {/* <ButtonBox>
                <button onClick={signInBtn} className="signInBtn" disabled={isActive}>Sign In</button>
                <div className="or" >또는</div>
                <button onClick={signUpBtn} className="signUpBtn">Sign Up</button>
                </ButtonBox> */}
            </l.LoginBox>
        </l.Wrap>
    );
};

export default Login;
