import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { slides } from "../Data/Slides";
import { modal } from "../modules/modal";

const HeaderWrap = styled.header`
    display: flex;
    width: 100%;
    @media screen and (max-width: 480px) {
        display: block;
    }
`;
const NavWrap = styled.nav`
    display: flex;
    width: 80%;

    max-width: 1400px;
    margin: 0 auto;
    @media screen and (max-width: 480px) {
        display: block;
    }
`;
const Logo = styled.h1`
    line-height: 70px;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    font-feature-settings: "tnum" on, "lnum" on;
    cursor: pointer;
    color: #000000;
`;
const USER = styled.div`
    position: absolute;
    right: 30px;
    padding-right: 30px;
    line-height: 70px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    text-align: right;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #6b7684;
    :hover {
        color: #000;
        cursor: pointer;
    }
    @media screen and (max-width: 480px) {
        top: 0;
        padding-right: 0px;
        font-size: 16px;
    }
`;
const Menus = styled.ul`
    display: flex;
    line-height: 70px;
    list-style: none;
    li:first-child {
        margin-left: 88px;
    }
    li {
        padding: 0 15px;
        margin: 0 12px;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #6b7684;
        :hover {
            color: #000;
            cursor: pointer;
            border-bottom: 3px solid #000;
        }
    }
    @media screen and (max-width: 750px) {
        li:first-child {
            margin-left: 30px;
        }
        li {
            font-size: 15px;
            padding: 0 12px;
            margin: 0 8px;
        }
    }
    @media screen and (max-width: 480px) {
        justify-content: center;
        li:first-child {
            margin-left: 2%;
        }
        li {
            font-family: "Pretendard";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;

            text-align: center;
            font-feature-settings: "tnum" on, "lnum" on;
        }
    }
`;
const SlideWrap = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
`;

const ContentWrap = styled.div<{ bgStyle: any; bgUrl: any }>`
    width: 100%;
    padding: 40px 0 40px 0;

    background-image: ${props =>
        props.bgStyle == "border" || props.bgUrl == 1
            ? "url('img/Rectangle1.png')"
            : props.bgUrl == 0
            ? "url('img/Rectangle0.png')"
            : "url('img/Rectangle2.png')"};
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: ${props => (props.bgStyle == "border" ? "0 0 150px" : "0")};

    .title {
        width: 80%;
        max-width: 1400px;
        margin: 0 auto;
        display: ${props => (props.bgStyle == "border" ? "none" : "block")};
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 38px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #000000;
    }
    p {
        display: ${props => (props.bgStyle == "border" ? "none" : "block")};
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */
        width: 80%;
        max-width: 1400px;
        margin: 0 auto;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;

        margin-top: 18px;
    }
    @media screen and (max-width: 480px) {
        background-image: url("https://team-bevelop.github.io/BeVelop_Frontend/img/Rectangle_724.png");
        background-size: cover;
        background-position: left;

        .title {
            padding: 0;
            font-family: "Pretendard";
            font-style: normal;
            font-weight: 600;
            font-size: 21px;
            line-height: 25px;
            font-feature-settings: "tnum" on, "lnum" on;

            color: #000000;
        }
    }
`;
export type bgStyle = {
    bgStyle: any;
};

const Header: React.FC<bgStyle> = ({ bgStyle }) => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [Slide, setSlide] = useState<number>(0);
    const length = 3;
    const timeout = useRef<any>(null);
    const { Users } = useSelector((state: any) => ({
        Users: state.auth
    }));

    const dispatch = useDispatch();
    const OnclickPopUp = () => {
        dispatch(modal());
    };

    useEffect(() => {
        const nextSlide = () => {
            setSlide((Slide: number) => (Slide === length - 1 ? 0 : Slide + 1));
        };
        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [Slide, length]);

    useEffect(() => {
        if (Users.data !== null) setIsLogin(true);
    }, []);

    return (
        <>
            <HeaderWrap>
                <NavWrap>
                    <Logo>
                        <Link to="/">BeVelop</Link>
                    </Logo>
                    <Menus>
                        <li>홈</li>
                        <li>팀원구인</li>
                        <li>포스트</li>
                    </Menus>
                    {isLogin ? (
                        <USER>
                            <p onClick={OnclickPopUp}>로그인</p>
                        </USER>
                    ) : (
                        <USER>
                            <p onClick={OnclickPopUp}>내 정보</p>
                        </USER>
                    )}
                </NavWrap>
            </HeaderWrap>
            <SlideWrap>
                <ContentWrap bgUrl={Slide} bgStyle={bgStyle}>
                    <h2 className="title">
                        사이드 프로젝트에서 <br />
                        하나의 수입 수단까지
                    </h2>
                    <p>스토리 자세히 보기 {">"}</p>
                </ContentWrap>
            </SlideWrap>
        </>
    );
};

export default Header;
