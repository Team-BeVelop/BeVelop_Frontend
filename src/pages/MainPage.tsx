import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../common/Header";
import MainContainer from "../components/container/MainContainer";
import Login from "../components/Login/Login";
import { Helmet } from "react-helmet";

const Wrap = styled.div`
    .bg {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.45);
    }
`;

const MainPage = () => {
    const { Modal } = useSelector((state: any) => ({
        Modal: state.modal.Modal
    }));
    return (
        <>
            <Helmet>
                <title>BeVelop || 메인</title>
                <meta
                    property="og:url"
                    content="https://team-bevelop.github.io/BeVelop_Frontend/"
                />
                <meta property="og:title" content="BeVelop" />
            </Helmet>
            <Header bgStyle="" />
            {Modal ? (
                <Wrap>
                    <div className="bg"></div>
                    <Login />
                </Wrap>
            ) : (
                ""
            )}
            <MainContainer />
        </>
    );
};

export default MainPage;
