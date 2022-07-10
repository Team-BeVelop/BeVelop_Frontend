import React from "react";
import styled from "styled-components";
import User from "../User/user";
import UserProject from "../User/UserProject";

const UserWrap = styled.div`
    display: flex;
    @media screen and (max-width:480px){
        display: block;
    }
`

const UserContainer = () => {
    return(
        <UserWrap>
        <User/>
        <UserProject/>
        </UserWrap>
    )
}

export default UserContainer;