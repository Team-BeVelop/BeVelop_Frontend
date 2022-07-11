import React from "react";
import styled from "styled-components";

const UserProjectWrap = styled.section`
    width: 70%;
    max-width: 1000px;
    margin-left: 30px;
    @media screen and (max-width:480px){
        width: 100%;
        margin-left: 0px;
    }
`
const Banner = styled.section`
display: flex;
justify-content: space-around;
    margin-top: 108px;
    width: 100%;
    height: 132px;
    
    border-radius: 6px;
    align-items: center;
    background-image: url('/img/Rectangle 762.png');
    p{
        
        font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 132px;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #fff;
    }
    @media screen and (max-width:1200px){
        p{
            font-size: 20px;
        }
    }
    @media screen and (max-width:480px){
        display: none;
    }
`
const Button = styled.div`
width: 180px;
height: 48px;
    background: linear-gradient(94.95deg, #7A5DF5 -1.74%, #C45DF5 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
line-height: 48px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 16px;
/* identical to box height */

text-align: center;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #FFFFFF;
@media screen and (max-width:1200px){
        width: 120px;
        font-size: 15px;
    }

`
const ProjectType = styled.div`
    margin-top: 34px;
    border-bottom: 1px solid #E5E8E8;
    span{
        font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 40px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;
margin-left: 20px;
color: #6B7684;
cursor: pointer;
    }
    span:hover{
        color: #000000;
        padding-bottom: 10px;
        border-bottom: 2px solid #000000;
    }
    @media screen and (max-width:480px){
        width: 80%;
        margin: 0 auto;
    }
`
const ProjectBox = styled.section`
width: 100%;
height: 464px;
    background: #FFFFFF;
border: 1px solid #F2F4F6;
border-radius: 6px;
display: flex;
justify-content: space-around;
margin-top: 20px;
overflow: hidden;
        flex-wrap: nowrap;
@media screen and (max-width:480px){
        display: table;
        margin: 0 auto;
        width: 80%
    }
`

const Project = styled.div`
    width: 30%;
    height: 205px;
    border: 1px dashed #505967;
    border-radius: 6px;
    margin-top: 20px;
    p{
        text-align: center;
        line-height: 205px;
    }
    @media screen and (max-width:1200px){
        width: 250px;
        overflow: hidden;
        flex-wrap: nowrap;
        font-size: 15px;
    }
    @media screen and (max-width:480px){
        width: 100%;
        overflow: hidden;
    }
`

const UserProject = () => {
    return(
        <UserProjectWrap>
        <Banner>
            <p>프로젝트를 함께할 사람들을 모아보세요</p>
            <Button>구인글 작성하기</Button>
        </Banner>
        <ProjectType>
            <span>참여중인 프로젝트</span>
            <span>완료된 프로젝트</span>
        </ProjectType>
        <ProjectBox>
            <Project>
                <p>새로운 프로젝트에 참여해보세요!</p>
            </Project>
            <Project>

            </Project>
            <Project>

            </Project>
        </ProjectBox>
        </UserProjectWrap>
    )
}

export default UserProject;