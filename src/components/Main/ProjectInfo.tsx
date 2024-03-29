import React, { useRef, useState } from "react";
import styled from "styled-components";
import Dummy from "../../Data/Dummy";
import HotDummy from "../../Data/HotDummy";
import HotProjectTemplate from "./HotProjectTemplate";
import ProjectTemplate from "./ProjectTemplate";
import HotIcon from "../../Resource/Images/HotIcon.svg";
import ProjectIcon from "../../Resource/Images/ProjectIcon.svg";

const TitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Title = styled.div<{ props: any }>`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    /* identical to box height */
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    & {
        margin: 80px 0 25px 0;
    }
    & + & {
        margin: 79px 0 25px 0;
    }
    &::before {
        content: ${props =>
            props.props == "HOT" ? `url(${HotIcon})` : `url(${ProjectIcon})`};
    }
    span {
        color: #ff0000;
    }
`;
const The = styled.div`
    margin-top: 86px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;

    color: #8b95a1;
    cursor: pointer;
`;

const RecruitSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width: 420px) {
        width: 100%;
        height: 450px;
        overflow: hidden;
    }
`;
const HotProjectSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const dummy = Dummy;

const Hot = HotDummy;

const ProjectInfo = () => {
    return (
        <>
            <section>
                <TitleWrap>
                    <Title props="Re"> 모집중인 프로젝트</Title>
                    <The>더보기</The>
                </TitleWrap>
                <RecruitSection>
                    {dummy.map((index, i) =>
                        index.id <= 8 ? (
                            <ProjectTemplate
                                key={i}
                                subjectbg={index.subject}
                                subject={index.subject}
                                title={index.title}
                                hashtag={index.hashtag}
                            />
                        ) : (
                            ""
                        )
                    )}
                </RecruitSection>
            </section>
            <section>
                <TitleWrap>
                    <Title props="HOT">
                        <span> HOT</span>한 포스트
                    </Title>
                    <The>더보기</The>
                </TitleWrap>
                <HotProjectSection>
                    {Hot.map((index, i) =>
                        index.id <= 6 ? (
                            <HotProjectTemplate
                                key={i}
                                title={index.title}
                                tumb={index.tumb}
                                views={index.views}
                                contents={index.contents}
                                hash={index.hashtag}
                            />
                        ) : (
                            ""
                        )
                    )}
                </HotProjectSection>
            </section>
        </>
    );
};

export default ProjectInfo;
