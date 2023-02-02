import React from "react";
import styled from "styled-components";

const HotWrap = styled.div`
    width: 30.76%;
    height: auto;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 6px;
    margin-bottom: 3.4rem;

    & {
        margin-right: 3.85%;
    }
    &:nth-child(3n) {
        margin-right: 0px;
    }
    @media screen and (max-width: 460px) {
        width: 100%;
        & {
            margin-right: 0px;
        }
    }
`;
const Tumbnail = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 20px;

    img {
        width: 100%;
    }
`;
const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem;
`;
const Title = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
`;
const Views = styled.div`
    width: 30%;
    text-align: right;
    display: inline-block;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;

    color: #404a5c;
`;
const Content = styled.div`
    width: 100%;
    height: 3.8rem;
    word-break: keep-all;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    font-feature-settings: "tnum" on, "lnum" on;
    margin: 1.4rem 0 2.1rem 0;
    padding: 0 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    color: #6b7684;
    @media screen and (max-width: 460px) {
        width: 100%;
        text-overflow: ellipsis;
        word-break: break-all;
        overflow: hidden;
        white-space: nowrap;
    }
`;
const Hash = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;
    margin: 0 1.2rem 2.2rem 1.2rem;
    color: #8b95a1;
    @media screen and (max-width: 460px) {
        margin-top: 10px;
    }
`;

export type HotTemplate = {
    title: string;
    tumb: string;
    views: number;
    contents: string;
    hash: string;
};

const HotProjectTemplate: React.FC<HotTemplate> = ({
    title,
    views,
    contents,
    tumb,
    hash
}) => {
    return (
        <>
            <HotWrap>
                <Tumbnail>
                    <img src={tumb} />
                </Tumbnail>
                <TitleArea>
                    <Title>{title}</Title>
                    <Views>조회수 {views}</Views>
                </TitleArea>
                <Content>{contents}</Content>
                <Hash>{hash}</Hash>
            </HotWrap>
        </>
    );
};

export default HotProjectTemplate;
