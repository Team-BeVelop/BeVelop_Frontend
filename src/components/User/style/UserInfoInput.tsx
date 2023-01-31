import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";

export const UserInfoWrap = styled.aside`
    display: table;
    margin: 0 auto;
    transform: translate(0px, -5rem);
`;
export const UserImg = styled.div<{ bgImg: any }>`
    width: 116px;
    height: 116px;
    background: #f2f4f6;
    border: 3px solid #ffffff;
    border-radius: 50%;
    background-image: ${props =>
        props.bgImg == "filed"
            ? "url('https://team-bevelop.github.io/BeVelop_Frontend/img/Ellipse.png')"
            : ""};
    background-size: cover;
    margin-bottom: 20px;
`;
export const Plus = styled(IoIosAddCircleOutline)`
    font-size: 30px;
    border-radius: 50%;
    color: #fff;
    background-color: #000;
`;
export const Intro = styled.div`
    margin-top: 1.8rem;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
        margin-bottom: 18px;
    }
    textarea {
        width: 100%;
        height: 13.6rem;
        background: #ffffff;
        border: 1px solid #dadee2;
        border-radius: 6px;
        resize: none;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
        padding: 1rem 1.8rem;
    }
`;
export const NickName = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;

    color: #000000;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
        margin-bottom: 18px;
    }
    input {
        width: 436px;
        height: 48px;
        background: #ffffff;
        border: 1px solid #dadee2;
        border-radius: 6px;
    }
    input:focus {
        border: 1px solid #7a5df5;
    }
`;
export const Button = styled.div`
    margin-top: 20px;
    width: 436px;
    height: 48px;

    background: #7a5df5;
    border-radius: 6px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 48px;
    /* identical to box height */
    text-align: center;
    font-feature-settings: "tnum" on, "lnum" on;

    color: #ffffff;
`;
export const Profile = styled.div`
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
        margin-bottom: 1.8rem;
    }
`;

export const FilterArea = styled.div`
    display: flex;
    width: 43.6rem;
    height: 4.8rem;
    justify-content: space-between;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 21.1rem;
    height: 4.8rem;
    ul.none {
        display: none;
    }
    ul {
        li {
            width: 212px;
            height: 48px;
            font-family: "Pretendard";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 48px;
            /* identical to box height */
            text-align: center;
            font-feature-settings: "tnum" on, "lnum" on;
            color: #8b95a1;
            border: 1px solid #f2f4f6;
        }
    }
`;
export const Filter = styled.div`
    display: flex;
    justify-content: space-around;
    width: 212px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #f2f4f6;
    border-radius: 6px;
    align-items: center;
    text-align: center;
    margin-top: 19px;
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
    }
`;
export const Portfolio = styled.div`
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
export const Skill = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;

    color: #000000;
`;
export const Box = styled.input`
    display: block;
    width: 436px;
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

    color: #8b95a1;
    :focus {
        border: 1px solid #7a5df5;
    }
`;
export const SkillBoxWrap = styled.div`
    display: flex;
    margin-top: 22px;
    width: 436px;
`;
export const SkillPlus = styled.div`
    width: 72px;
    height: 37px;
    background: #f2f4f6;
    border-radius: 6px;
    margin-right: 1rem;
`;
export const SkillBox = styled.div`
    width: 35.4rem;
    height: 3.7rem;
    border: 1px dashed #8b95a1;
    border-radius: 6px;
    display: flex;
    justify-content: start;
    padding: 0.1rem;
`;

export const SkillList = styled.div<{ bgColor: string }>`
    width: auto;
    height: 3.3rem;
    border-radius: 6px;
    display: flex;
    justify-content: space-around;
    padding: 0 1rem;
    line-height: 3.3rem;
    background-color: ${props => props.bgColor};
    margin-right: 1rem;
    color: #fff;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
`;

export const Contact = styled.div`
    margin-top: 34px;
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
    p:nth-child(2) {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height */

        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
    }
`;
