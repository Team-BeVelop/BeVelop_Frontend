import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";
import { useAppDispatch } from "../../useRedux/rootReducer";
import User from "../User/user";
import UserProject from "../User/UserProject";
import User_first from "../User/user_first";
import { GetUserInfo } from "../../modules/user";
const UserWrap = styled.main`
    display: flex;
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    @media screen and (max-width: 480px) {
        display: block;
    }
`;

const UserContainer = () => {
    const { Users } = useSelector((state: any) => ({
        Users: state.UserSlice.userInfo
    }));
    const { Auths } = useSelector((state: any) => ({
        Auths: state.AuthSlice
    }));
    const dispatch = useAppDispatch();
    useMemo(() => {
        dispatch(GetUserInfo(Auths.token));
    }, []);
    return (
        <UserWrap>
            <User
                nickName={Users.nickname}
                link={Users.url}
                portFolio={""}
                Position={Users.job}
                Interest={Users.interests}
                index={Users.stackName}
                introduce={Users.introduce}
            />
            <UserProject />
        </UserWrap>
    );
};

export default UserContainer;
