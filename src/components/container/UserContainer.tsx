import React, { useState } from "react";
import { useSelector } from "react-redux";
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

const UserContainer = () => {
    const [fix, setFix] = useState<boolean>(false);
    const { Users } = useSelector((state: any) => ({
        Users: state.AuthSlice
    }));

    return (
        <UserWrap>
            {Users.user.stackName.length !== 0 ? (
                <>
                    <User
                        nickName={Users.user.nickname}
                        link={Users.user.link}
                        portFolio={Users.user.portFolio}
                        Position={Users.user.job}
                        Interest={Users.user.interests}
                        index={Users.user.stackName}
                    />
                    <UserProject />
                </>
            ) : (
                <>
                    <User_first></User_first>
                </>
            )}
        </UserWrap>
    );
};

export default UserContainer;
