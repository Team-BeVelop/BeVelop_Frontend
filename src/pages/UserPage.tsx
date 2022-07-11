import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../common/Header";
import UserContainer from "../components/container/UserContainer";
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

const UserPage = () => {
    const { Modal } = useSelector((state : any) => ({
        Modal: state.modal.Modal
    }));
    return(
        <>
            <Header bgStyle = "border"/>
            <UserContainer/>
            {Modal ? <Wrap>
            <div className="bg"></div>
            <Login/>
            </Wrap> : ""}
        </>
    )
}

export default UserPage;