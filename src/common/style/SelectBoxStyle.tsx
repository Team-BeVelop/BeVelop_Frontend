import styled from "styled-components";

export const SelectBoxWrap = styled.div`
    position: relative;
    z-index: 100;
    width: 21.2rem;
    height: 4.8rem;
    overflow: hidden;
    transition: all linear 0.3s;
    &.open {
        background-color: #fff;
        border: 1px solid #dadee2;
        border-radius: 6px;
        height: 26.5rem;
        z-index: 999;
    }
    &.close {
        background-color: #fff;
        border: 1px solid #bababa;
        border-radius: 0.8rem;
    }
`;

export const SelectBoxArea = styled.div``;
export const SelectBoxText = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem;
    color: #404a5c;
`;
export const SelectBoxPlaceholder = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 4.8rem;
    /* identical to box height */
    text-align: center;

    color: #404a5c;
`;
export const SelectBoxUl = styled.ul`
    background-color: #fff;
    height: 21rem;
    overflow: scroll;
    z-index: 999;

    &.open {
        opacity: 1;
        border-top: 1px solid #fff;
    }
    &.close {
        opacity: 0;
    }
`;

export const SelectBoxLi = styled.li`
    width: 100%;
    text-align: center;
    height: 5.3rem;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 4.8rem;
    color: #404a5c;
`;

export const SelectBoxArow = styled.div``;
