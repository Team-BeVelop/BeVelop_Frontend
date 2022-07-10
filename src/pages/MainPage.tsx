import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../common/Header";
import Login from "../components/Login/Login";

const Wrap = styled.div`
    .bg{
        position: absolute;
            top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.45);
    }
`

const MainPage = () => {

    const { Modal } = useSelector((state : any) => ({
        Modal: state.modal.Modal
    }));
    return(
        <>
            <Header/>
            {Modal ? <Wrap>
            <div className="bg"></div>
            <Login/>
            </Wrap> : ""}
        </>
    )
}

export default MainPage;