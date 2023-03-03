import styled from "styled-components";

export const ModalWrap = styled.div<{
    height: any;
    width: any;
    backgroundColor: any;
    bottom: any;
    translate: any;
    right: any;
}>`
    position: absolute;
    right: ${props => props.right};
    transform: ${props => props.translate};
    margin-top: 2.6rem;
    bottom: ${props => props.bottom};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    border-radius: 2.4rem;
    z-index: 999;

    @media screen and (max-width: 480px) {
        width: 31rem;
        height: 13.5rem;
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
        border-radius: 1.2rem;
    }
`;

export const ModalArea = styled.div<{
    lineHeight: any;
    size: any;
    align: any;
    color: any;
    weight: any;
}>`
    padding: 2rem 3rem;
    p {
        white-space: pre-wrap;
        font-family: "Pretendard";
        font-size: ${props => props.size};
        line-height: 4rem;
        font-weight: ${props => props.weight};
        line-height: ${props => props.lineHeight};
        color: ${props => props.color};
        text-align: ${props => props.align};
    }
    img {
        position: absolute;
        left: 50%;
        margin-top: 1rem;
        transform: translateX(-50%);
    }
    @media screen and (max-width: 480px) {
        padding: 1rem 0;
        display: table;
        margin: 0 auto;
        p {
            font-size: 1rem;
            font-weight: 700;
            text-align: center;
        }
        p.MO {
            font-size: 1.5rem;
        }
        p.load {
            width: 24rem;
            word-break: keep-all;
            text-align: center;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.2rem;
            margin-top: 1.5rem;
        }
    }
`;
