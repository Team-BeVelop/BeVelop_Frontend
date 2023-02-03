import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
export const Wrap = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
`;
export const LoginBox = styled.div`
    width: 36rem;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 2.4rem 0;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 6px;
    .logo {
        height: 25px;
        margin-bottom: 5.5rem;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 2.2rem;
        line-height: 2.6rem;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
    }
    .sentence {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 600;
        font-size: 2.1rem;
        line-height: 2.5rem;
        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
    }
    .subsentence {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
        margin-bottom: 3.4rem;
        margin-top: 1.2rem;
    }
    @media screen and (max-width: 480px) {
        transform: translate(-50%, -80%);
    }
`;
export const LoginKind = styled.div`
    width: 32rem;
    .or {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        /* identical to box height */

        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
        margin: 3.8rem 1rem 2.8rem 1rem;
    }
    .or::after,
    .or::before {
        content: "";
        display: inline-block;
        width: 12rem;
        height: 0.1rem;
        margin: 0.4rem;
        background-color: #dadee2;
    }
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #8b95a1;
    }
    a {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        text-align: center;
        text-decoration-line: underline;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #7a5df5;
        margin-left: 6px;
        cursor: pointer;
    }
`;
export const Box = styled.div<{ bgColor: any; color: any }>`
    width: 320px;
    height: 54px;
    border-radius: 6px;
    background-color: ${props => props.bgColor};
    margin-bottom: 12px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 54px;
    /* identical to box height */

    text-align: center;
    font-feature-settings: "tnum" on, "lnum" on;

    color: ${props => props.color};
    cursor: pointer;
`;
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 320px;
        height: 48px;
        margin: 1.4rem 0.5rem 2.4rem 0px;
        padding: 0 2rem;
        border: 1px solid #dadee2;
        border-radius: 6px;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.9rem;
    }
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.9rem;
        /* identical to box height */

        font-feature-settings: "tnum" on, "lnum" on;

        color: #000000;
    }
    input::placeholder {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #8b95a1;
    }
`;
export const CloseBtn = styled(IoIosClose)`
    font-size: 3rem;
`;
export const Button = styled.div`
    position: absolute;
    right: 2rem;
    top: 2.2rem;
    cursor: pointer;
`;
