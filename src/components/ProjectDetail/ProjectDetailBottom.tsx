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
    web
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
                        <div className="row">
                            <div className="subtitle">연관분야</div>
                            <div className="desc">{field}</div>
                        </div>
                        <div className="row">
                            <div className="subtitle">진행기간</div>
                            <div className="desc">
                                {startDate + " ~ " + endDate}
                            </div>
                        </div>
                        <div className="row">
                            <div className="subtitle">모집직무</div>
                            <div className="desc">기획자, UI디자이너</div>
                        </div>
                        <div className="row">
                            <div className="subtitle">웹사이트</div>
                            <div className="underline">{web}</div>
                        </div>
                    </Content>
                </BasicInfo>
                <Contact>
                    <Title>연락방식</Title>
                    <div className="right">
                        <p>이메일</p>
                        <input className="margin" value={emailUrl} />
                        <p>오픈 카카오톡 링크</p>
                        <input value={kakaoUrl} />
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
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #6b7684;
    @media screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 17px;
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
    margin-bottom: 40px;
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
        }
    }
    .desc {
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

export default ProjectDetailBottom;
