import styled from "styled-components";

const ProjectDetailBottom = ({
    shortTitle,
    field,
    startDate,
    endDate,
    jobList,
    emailUrl,
    kakaoUrl,
    desc,
    web,
    enrollmentEndDate,
    maxMemberCount
}: any) => {
    return (
        <>
            <Wrap>
                <Introduce>
                    <Title>한줄소개</Title>
                    <Content>{shortTitle}</Content>
                </Introduce>
                <BasicInfo>
                    <Title>기본정보</Title>
                    <Content>
                        <div className="box">
                            <div className="row">
                                <div className="subtitle">연관분야</div>
                                <div className="desc">{field}</div>
                            </div>
                            <div className="row">
                                <div className="subtitle">모집마감</div>
                                <div className="desc">{enrollmentEndDate}</div>
                            </div>
                            <div className="row">
                                <div className="subtitle">진행기간</div>
                                <div className="desc">
                                    {startDate + " ~ " + endDate}
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="row">
                                <div className="subtitle">모집직무</div>
                                <div className="desc">
                                    {jobList.map((item: any, index: string) => (
                                        <JobListWrap key={index}>
                                            {Number(index) ===
                                            jobList.length - 1
                                                ? item.jobName + ""
                                                : item.jobName + ","}
                                        </JobListWrap>
                                    ))}
                                </div>
                            </div>
                            <div className="row">
                                <div className="subtitle">모집인원</div>
                                <div className="desc">{maxMemberCount}명</div>
                            </div>
                            <div className="row">
                                <div className="subtitle">웹사이트</div>
                                <div className="underline">{web}</div>
                            </div>
                        </div>
                    </Content>
                </BasicInfo>
                <Contact>
                    <Title>연락방식</Title>
                    <div className="right">
                        <p>이메일</p>
                        <input className="margin" value={emailUrl} readOnly />
                        <p>오픈 카카오톡 링크</p>
                        <input value={kakaoUrl} readOnly />
                    </div>
                </Contact>
                <DetailInfo>
                    <Title>상세정보</Title>
                    <Content>{desc}</Content>
                </DetailInfo>
            </Wrap>
        </>
    );
};

const Wrap = styled.div``;

const Title = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    margin-right: 32px;
    white-space: nowrap;
    @media screen and (max-width: 480px) {
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 16px;
    }
`;

const Content = styled.div`
    display: flex;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #6b7684;
    @media screen and (max-width: 480px) {
        display: block;
        font-size: 14px;
        line-height: 17px;
    }
    .box {
        margin-right: 50px;
        @media screen and (max-width: 480px) {
            margin-right: 0;
        }
    }
`;

const Introduce = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 42px;
    margin-top: 40px;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 30px;
        margin-top: 30px;
    }
`;

const BasicInfo = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
    .row {
        display: flex;
        flex-direction: row;
        margin-bottom: 16px;
        &:nth-child(4n) {
            margin-bottom: 0px;
        }
    }
    .subtitle {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #6b7684;
        margin-right: 15px;
        @media screen and (max-width: 480px) {
            font-size: 14px;
            line-height: 17px;
            display: inline-block;
            white-space: nowrap;
        }
    }
    .desc {
        display: flex;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #000000;
        margin-right: 20px;
        @media screen and (max-width: 480px) {
            font-size: 14px;
            line-height: 17px;
            display: inline-block;
        }
    }
    .underline {
        text-decoration: underline;
    }
`;

const Contact = styled.div`
    display: flex;
    margin-bottom: 42px;
    align-items: center;
    .right {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        @media screen and (max-width: 480px) {
            flex-direction: column;
            align-items: start;
        }
    }
    p {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #6b7684;
        margin-right: 14px;
        display: none;
    }
    input {
        border: 1px solid #dadee2;
        border-radius: 6px;
        height: 48px;
        padding: 16px 20px;
        width: 30%;
        @media screen and (max-width: 480px) {
            width: 100%;
        }
    }
    .margin {
        margin-right: 90px;
        @media screen and (max-width: 480px) {
            margin-right: 0;
            margin-bottom: 12px;
        }
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: start;
    }
`;

const DetailInfo = styled.div`
    display: flex;
    margin-bottom: 42px;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        margin-bottom: 0px;
    }
`;

const JobListWrap = styled.div`
    margin-right: 5px;
    @media screen and (max-width: 480px) {
        display: inline-block;
        white-space: nowrap;
    }
`;

export default ProjectDetailBottom;
