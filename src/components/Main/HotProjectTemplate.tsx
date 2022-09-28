import React from "react";
import styled from "styled-components";

const HotWrap = styled.div`
    width: 30%;
    height: auto;
    &{
        margin-right: 52px;
    }
    &:last-child{
        margin-right: 0px;
    }
    @media screen and (max-width : 460px){
        width: 100%;
        &{
        margin-right: 0px;
    }
}
`
const Tumbnail = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    img{
        width: 100%;
    }
`
const Title = styled.div`
    display: inline-block;
    width: 70%;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #000000;
`
const Views = styled.div`
    width: 30%;
    text-align: right;
    display: inline-block;
    font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;

color: #404A5C;

`
const Content = styled.div`
    width: 100%;
    margin-top: 14px;
    word-break: keep-all;
    font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #6B7684;
@media screen and (max-width : 460px){
    width: 100%;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
}
`
const Hash = styled.div`
    margin-top: 24px;
    font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */
margin-bottom: 34px;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #8B95A1;
@media screen and (max-width : 460px){
    margin-top: 10px;
    
}
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