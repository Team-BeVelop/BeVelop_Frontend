import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";
import User from "../User/user";
import UserProject from "../User/UserProject";
import User_first from "../User/user_first";

const UserWrap = styled.main`
    display: flex;
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    @media screen and (max-width: 480px) {
        display: block;
    }
`;

const UserEditContainer = () => {
    const { Users } = useSelector((state: any) => ({
        Users: state.UserSlice.userInfo
    }));
    const location = useLocation();
    return (
        <UserWrap>
            <User_first />
        </UserWrap>
    );
};

export default UserEditContainer;
