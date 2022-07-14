import React from "react";
import styled from "styled-components";

const HotWrap = styled.div`
    width: 33%;
    height: 373px;
    &{
        margin-right: 52px;
    }
    &:last-child{
        margin-right: 0px;
    }
`
const Tumbnail = styled.div`
    width: 100%;
    height: 243px;
    margin-bottom: 20px;
`
const Title = styled.div`
    display: inline;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #000000;
`
const Views = styled.div`
    position: relative;
    left: 175px;
    display: inline;
    font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;

color: #404A5C;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const Content = styled.div`
    margin-top: 14px;
    word-break: keep-all;
    font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #6B7684;

`
const Hash = styled.div`
    margin-top: 24px;
    font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;

color: #8B95A1;
`

export type HotTemplate ={
    title : string,
    tumb : string,
    views : number,
    contents : string,
    hash : string
}

const HotProjectTemplate : React.FC<HotTemplate> = ({title,views,contents,tumb,hash}) => {
    return(
        <>
        <HotWrap>
            <Tumbnail>
                <img src={tumb}/>
            </Tumbnail>
            <Title>
                {title}
            </Title>
            <Views>
                조회수 {views}
            </Views>
            <Content>
            {contents}
            </Content>
            <Hash>
                {hash}
            </Hash>
        </HotWrap>
        </>
    )
}

export default HotProjectTemplate;