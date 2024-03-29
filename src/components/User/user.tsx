import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../useRedux/rootReducer";
import { SKILL } from "../../Data/Filter";
import { useNavigate } from "react-router";
import { useMemo } from "react";
import { GetUserInfo } from "../../modules/user";
const UserInfoWrap = styled.aside`
    transform: translate(0px, -50px);
    @media screen and (max-width: 480px) {
        display: table;
        margin: 0 auto;
    }
`;
const UserImg = styled.div`
    width: 116px;
    height: 116px;
    background: #f2f4f6;
    border: 3px solid #ffffff;
    border-radius: 50%;
    background-size: cover;
    margin-bottom: 20px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;
const Plus = styled(IoIosAddCircleOutline)`
    font-size: 30px;
    border-radius: 50%;
    color: #fff;
    background-color: #000;
`;
const NickName = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;

    color: #000000;
`;
const StatusBox = styled.ul`
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
    width: 320px;
    height: 97px;
    background: #ffffff;
    border: 1px solid #f2f4f6;
    border-radius: 6px;
    align-items: center;
    li p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 40px;
        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #000000;
    }
    li p + p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
    }
`;
const Button = styled.div`
    margin-top: 20px;
    width: 320px;
    height: 48px;
    background: #f2f4f6;
    border-radius: 6px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 48px;
    /* identical to box height */
    text-align: center;
    font-feature-settings: "tnum" on, "lnum" on;

    color: #404a5c;
`;
const UserInfo = styled.div``;
const UserNickNameArea = styled.div`
    display: flex;
    justify-content: space-between;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 3rem;
        /* identical to box height */

        text-align: right;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
        cursor: pointer;
    }
`;
const UserIntroText = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
    margin-top: 2.5rem;
    padding-bottom: 4.6rem;
    border-bottom: 1px solid #e5e8eb;
`;
const Profile = styled.div`
    margin: 34px 0 18px 0;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
    }
`;
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
`;
const Filter = styled.div`
    display: flex;
    justify-content: space-around;
    width: 156px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #f2f4f6;
    border-radius: 6px;
    align-items: center;
    text-align: center;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #404a5c;
    }
`;
const Portfolio = styled.div`
    margin: 34px 0 18px 0;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;

    color: #000000;
`;
const Skill = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;

    color: #000000;
`;
const Box = styled.div`
    width: 320px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #f2f4f6;
    border-radius: 6px;
    margin-bottom: 12px;
    margin-top: 18px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 48px;
    padding-left: 20px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;

    color: #404a5c;
`;
const SkillBoxWrap = styled.div`
    margin-top: 22px;
    width: 320px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
`;
const SkillBox = styled.div<{ bg: string }>`
    width: auto;
    height: 37px;
    padding: 0 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    background: ${props => props.bg};
    border-radius: 6px;
    p {
        color: #fff;
        line-height: 37px;
        text-align: center;
    }
`;

const User = ({
    nickName,
    portFolio,
    link,
    Position,
    Interest,
    index,
    introduce
}: any) => {
    const { Auth } = useSelector((state: RootState) => {
        return {
            Auth: state.AuthSlice
        };
    });
    const nav = useNavigate();
    const dispatch = useAppDispatch();

    useMemo(() => {
        dispatch(GetUserInfo(Auth.token));
    }, []);
    return (
        <UserInfoWrap>
            <UserImg>
                <img src={""} alt="" />
            </UserImg>
            <UserInfo>
                <UserNickNameArea>
                    <NickName>{nickName}</NickName>
                    <p className="Edit" onClick={() => nav("/user/edit")}>
                        프로필 수정 {">"}
                    </p>
                </UserNickNameArea>
                <UserIntroText>{introduce}</UserIntroText>
                {/* <StatusBox>
                <li>
                    <p>8</p>
                    <p>찜한팀원</p>
                </li>
                <li>
                    <p>2</p>
                    <p>찜한팀</p>
                </li>
                <li>
                    <p>23</p>
                    <p>프로젝트</p>
                </li>
                <li>
                    <p>11</p>
                    <p>공모전</p>
                </li>
            </StatusBox> */}
            </UserInfo>

            <Profile>
                <p>프로필</p>
                <Flex>
                    <Filter>
                        <p>{Position}</p>
                    </Filter>
                    <Filter>
                        <p>{Interest}</p>
                    </Filter>
                </Flex>
            </Profile>
            <Portfolio>
                <p>포트폴리오</p>
                <Box>{portFolio}</Box>
                <Box>{link}</Box>
            </Portfolio>
            <Skill>
                <p>기술스택</p>
                <SkillBoxWrap>
                    {index.map((index: any) => (
                        <SkillBox
                            bg={
                                SKILL.filter(
                                    (item: any) => item.name === index.stackId
                                )[0].color
                            }
                        >
                            <p>{index.stackId}</p>
                        </SkillBox>
                    ))}
                </SkillBoxWrap>
            </Skill>
        </UserInfoWrap>
    );
};

export default User;
