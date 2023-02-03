import styled from "styled-components";

export const LI = styled.li`
    cursor: pointer;
    height: 6.4rem;
    width: 45%;
    border-radius: 0.8rem;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 6.4rem;
    /* identical to box height, or 100% */

    text-align: center;
    color: #454545;

    /* 화이트 */
    margin-bottom: 2rem;
    label {
        cursor: pointer;
        height: 6.4rem;

        border-radius: 0.8rem;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 6.4rem;
        /* identical to box height, or 100% */

        text-align: center;
        color: #454545;

        /* 화이트 */
        margin-bottom: 2rem;
    }
    input[type="checkbox"]:checked .checked {
        width: 18.4rem;
        border-radius: 0.8rem;
        height: 6.4rem;
        background-color: #9045ee;
        color: #ffffff;
    }
    input[type="checkbox"] {
        display: none;
    }
    input {
        width: 45%;
        height: 6.4rem;
    }

    &.checked {
        width: 45%;
        border-radius: 0.8rem;
        height: 6.4rem;
        background-color: #9045ee;
        color: #ffffff;
    }
`;
