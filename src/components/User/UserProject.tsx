import HotDummy from "../../Data/HotDummy";
import React from "react";
import styled from "styled-components";
import HotProjectTemplate from "../../components/Main/HotProjectTemplate";

const UserProjectWrap = styled.section`
    width: 70%;
    max-width: 1000px;
    margin-left: 30px;
    @media screen and (max-width: 480px) {
        width: 100%;
        margin-left: 0px;
    }
`;
const Banner = styled.section`
    display: flex;
    justify-content: space-around;
    margin-top: 108px;
    width: 100%;
    height: 132px;

    border-radius: 6px;
    align-items: center;
    background-image: url("https://team-bevelop.github.io/BeVelop_Frontend/img/Rectangle762.png");
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 132px;
        font-feature-settings: "tnum" on, "lnum" on;

        color: #fff;
    }
    @media screen and (max-width: 1200px) {
        p {
            font-size: 20px;
        }
    }
    @media screen and (max-width: 480px) {
        display: none;
    }
`;
const Button = styled.div`
    width: 180px;
    height: 48px;
    background: linear-gradient(94.95deg, #7a5df5 -1.74%, #c45df5 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    line-height: 48px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    /* identical to box height */

    text-align: center;
    font-feature-settings: "tnum" on, "lnum" on;

    color: #ffffff;
    @media screen and (max-width: 1200px) {
        width: 120px;
        font-size: 15px;
    }
`;
const ProjectType = styled.div`
    margin-top: 34px;
    border-bottom: 1px solid #e5e8e8;
    span {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 40px;
        /* identical to box height */

        font-feature-settings: "tnum" on, "lnum" on;
        margin-left: 20px;
        color: #6b7684;
        cursor: pointer;
    }
    span:hover {
        color: #000000;
        padding-bottom: 10px;
        border-bottom: 2px solid #000000;
    }
    span:nth-child(1) {
        margin-left: 0px;
    }
    @media screen and (max-width: 480px) {
        width: 80%;
        margin: 0 auto;
    }
`;
const ProjectBox = styled.section`
    width: 100%;
    height: 18rem;
    background: #ffffff;
    border: 1px dashed #505967;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    overflow: hidden;
    flex-wrap: nowrap;
    @media screen and (max-width: 480px) {
        display: table;
        margin: 0 auto;
        width: 80%;
    }
`;

const Project = styled.div``;

const PostArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.8rem;
`;
const RecruitMentArea = styled.div`
    width: 100%;
    height: 24rem;
    background: #ffffff;
    border: 1px dashed #8b95a1;
    border-radius: 6px;
`;
const RecruitMentTitle = styled.p`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;

    color: #000000;
    margin: 3.4rem 0 1.8rem 0;
`;
const UserProject = () => {
    return (
        <UserProjectWrap>
            <Banner>
                <p>프로젝트를 함께할 사람들을 모아보세요</p>
                <Button>구인글 작성하기</Button>
            </Banner>
            <ProjectType>
                <span>찜한 팀원</span>
                <span>찜한 팀</span>
                <span>지원한 팀</span>
            </ProjectType>
            <ProjectBox></ProjectBox>
            <RecruitMentTitle>작성한 모집글</RecruitMentTitle>
            <RecruitMentArea></RecruitMentArea>
            <ProjectType>
                <span>작성한 포스트</span>
                <span>스크랩한 포스트</span>
            </ProjectType>
            <PostArea>
                {HotDummy.map((index, i) =>
                    index.id <= 4 ? (
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
            </PostArea>
        </UserProjectWrap>
    );
};

export default UserProject;
