import React, { useState } from "react";
import styled from "styled-components";

const TemplateWrap = styled.div`
    width: 30%;
    height: 205px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    border-radius: 6px;
    &{
        margin-right: 50px;
    }
    &:last-child{
        margin-right: 0px;
    }
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    div.unchecked{
        margin-top: 17px;
        width: 14px;
        margin-top: 16px;
            margin-right : 12px;
    height: 18px;
    background-image: url('/img/Vector2.png');
    background-size: cover;
    background-repeat: no-repeat;
    }
    div.checked{
            width: 14px;
            height: 18px;
            margin-top: 16px;
            margin-right : 12px;
            background-image: url('/img/Vector.png');
            background-size: cover;
            background-repeat: no-repeat;
    }
    
`

const Subject = styled.div<{subjectbg : any}>`
    font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;

color: #FFFFFF;
    padding : 3px 8px;
    margin-left: 17px;
    margin-top: 14px;
    background: ${(props)=>props.subjectbg =="스타트업" ? "#FF26A8" : "#7A5DF5"};
    border-radius: 4px;
`
const Contents = styled.div`
    
`
const Title = styled.div`
    margin:17px 43px 0px 17px;
    font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
font-feature-settings: 'tnum' on, 'lnum' on;
word-break: keep-all;
color: #000000;
`
const Hash = styled.div`
    font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */
margin: 7px 0 26px 17px;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #8B95A1;
    span::before{
        content: '#';
    }
`
const Button = styled.div`
    width: 266px;
height: 38px;
margin: 0 auto;
text-align: center;
line-height: 38px;
background: #F2F4F6;
border-radius: 6px;
`
export type Template ={
    title : string,
    hashtag : string,
    subject : string,
    subjectbg : any,
}
const ProjectTemplate : React.FC<Template> = ({subject,title,hashtag,subjectbg}) => {
    const [checked, setChecked] = useState<Boolean>(false);



    return(
        <>
        <TemplateWrap>
            <Flex>
                <Subject subjectbg={subjectbg}>{subject}</Subject>
                <div onClick={()=>setChecked(!checked)} className={checked ? "checked" : "unchecked"}></div>
            </Flex>
            <Contents>
                <Title>
                    <p>{title}</p>
                </Title>
                <Hash>
                    <span>{hashtag}</span>
                </Hash>
            </Contents>
            <Button>지금참여하기</Button>
        </TemplateWrap>
        </>
    )
}

export default ProjectTemplate;