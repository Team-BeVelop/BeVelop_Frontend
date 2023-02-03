import styled from "styled-components";

export const SelectBoxWrap = styled.div`
    position: absolute;
    width: 100%;
    z-index: 999;
    top: 50%;
    transform: translateY(-46%);
    background-color: rgba(0, 0, 0, 0.75);
`;

export const SelectUl = styled.div`
    position: absolute;
    width: 42.9rem;
    height: 58rem;
    background: #292929;
    border-radius: 1.8rem;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 100%);
    @media screen and (max-width: 480px) {
        width: 25.7rem;
        height: 38.6rem;
    }
`;

export const SelectBoxArea = styled.div`
    width: 42.9rem;
    height: 50.5rem;

    display: flex;
    justify-content: center;
    ul {
        width: 100%;
        height: 48rem;
        overflow: scroll;
        display: flex;
        justify-content: space-around;
        padding: 2rem;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 480px) {
        width: 25.7rem;
        height: 33.6rem;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    display: table;
    margin: 0 auto;
    width: 40rem;
    height: 6rem;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 6rem;

    text-align: center;
    border: none;

    &:disabled {
        color: #ccc;
    }

    color: #fff;
    background: #454545;
    border-radius: 12px;
    @media screen and (max-width: 480px) {
        width: 23rem;
        height: 4rem;
        line-height: 4rem;
        font-size: 1.4rem;
    }
`;
