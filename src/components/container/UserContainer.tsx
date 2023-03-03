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
        Users: state.users
    }));

    return (
        <UserWrap>
            {Users.data && !fix ? (
                <>
                    <User
                        nickName={Users.data.nickName}
                        link={Users.data.link}
                        portFolio={Users.data.portFolio}
                        Position={Users.data.Position}
                        Interest={Users.data.Interest}
                        index={Users.data.Stack}
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
