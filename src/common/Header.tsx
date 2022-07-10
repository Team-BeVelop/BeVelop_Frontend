import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "../components/Login/Login";
import { modal } from "../modules/modal";

const HeaderWrap = styled.div`
    display:flex;
    width:100%;
    @media screen and (max-width:480px){
        display: block;
    }
`
const Logo = styled.h1`
    line-height:70px;
    padding-left: 200px;
    font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 22px;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #000000;
@media screen and (max-width:480px){
        padding-left: 20px;
    }
`
const USER = styled.div`
    position: absolute;
    right: 30px;
    padding-right: 30px;
    line-height: 70px;
    font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 20px;


text-align: right;
font-feature-settings: 'tnum' on, 'lnum' on;
color: #6B7684;
:hover{
    color: #000;
    cursor: pointer;
}
@media screen and (max-width:480px){
    top: 0;
    padding-right: 0px;
    font-size: 16px;
}
`
const Menus = styled.ul`
    display: flex;
    line-height: 65px;
    li:first-child{
        margin-left: 88px;
    }
    li{
        padding: 0 15px;
        margin: 0 12px;
        font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
    font-size: 20px;


text-align: center;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #6B7684;
:hover{
    color: #000;
    cursor: pointer;
    border-bottom: 3px solid #000;
}
    }
    @media screen and (max-width:480px){
    justify-content: center;
    li:first-child{
        margin-left: 6%;
    }
    li{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        text-align: center;
        font-feature-settings: 'tnum' on, 'lnum' on;
        padding: 0 8px;
        margin: 0 12px;
        
    }
}
`
const ContentWrap = styled.div`
    width: 100%;
    height: 300px;
    padding: 82px 0px 0 200px;
    background-image: url('/img/Rectangle 725.png');
    .title{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 38px;
        font-feature-settings: 'tnum' on, 'lnum' on;
color: #000000;
    }
    p{
        font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;

color: #000000;

        margin-top: 18px;
    }
    @media screen and (max-width:480px){
        background-image: url('/img/Rectangle 725 (1).png');
        background-size: contain;
        background-position: left;
        height: 206px;
        padding: 63px 0px 0 20px;

        .title{
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 600;
            font-size: 21px;
            line-height: 25px;
            font-feature-settings: 'tnum' on, 'lnum' on;

            color: #000000;
        }
    }
`
const Header = () => { 
    const dispatch = useDispatch();
    const OnclickPopUp = () => {
        dispatch(modal());
      };
    


    return (
        <>
        <HeaderWrap>
            <Logo>BeVelop</Logo>
            <Menus>
                <li>홈</li>
                <li>팀원구인</li>
                <li>프로젝트</li>
                <li>공모전</li>
            </Menus>
            <USER>
                <p onClick={OnclickPopUp}>로그인</p>
            </USER>
        </HeaderWrap>
        <ContentWrap>
        <h2 className="title">사이드 프로젝트에서 <br/>하나의 수입 수단까지</h2>
        <p>스토리 자세히 보기 {'>'}</p>
        </ContentWrap>
        
        </>
    )
}

export default Header;