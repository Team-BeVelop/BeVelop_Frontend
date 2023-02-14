import styled from "styled-components";

const DivistionTheme = {
    "사이드 프로젝트": "#7A5DF5",
    스타트업: "#FF26A8",
    공모전: "#C00DFF"
};

const ApplyTemplate = ({
    id,
    division,
    field,
    title,
    hashtag,
    shortTitle
}: any) => {
    const goProjectDetailPage = (id: number) =>
        (window.location.href = `/project/${id}`);
    return (
        <>
            <Container onClick={() => goProjectDetailPage(id)}>
                <div className="info">
                    <Top>
                        <div className="left">
                            <div className="division">{division}</div>
                            {field.map((item: any, index: string) => (
                                <div className="field" key={index}>
                                    {item.fieldName}
                                </div>
                            ))}
                        </div>
                        <img
                            className="heart"
                            src="img/icon_heart_fill.png"
                            alt=""
                        />
                    </Top>
                    <Title>{title}</Title>
                    <HashTags>
                        {hashtag.map((item: any, index: string) => (
                            <div className="item" key={index}>
                                #{item.jobName}
                            </div>
                        ))}
                    </HashTags>
                    <Content>{shortTitle}</Content>
                </div>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: inline-block;
    border: 1px solid #eeeeee;
    border-radius: 6px;
    height: 180px;
    width: 23.5%;
    margin-right: 2%;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
    &:nth-child(4n) {
        margin-right: 0px;
    }
    .info {
        padding: 18px 13px 13px 13px;
        @media screen and (max-width: 480px) {
            display: flex;
            width: 100%;
            margin-bottom: 10px;
            height: 170px;
        }
    }
    @media screen and (max-width: 480px) {
        display: flex;
        width: 100%;
        margin-bottom: 14px;
        height: 180px;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    .left {
        display: flex;
        margin-top: 9px;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        font-feature-settings: "tnum" on, "lnum" on;
        .division {
            font-family: "Pretendard";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #ffffff;
            background: #7a5df5;
            margin-right: 10px;
            border-radius: 4px;
            padding: 3px 8px;
            @media screen and (max-width: 480px) {
                font-size: 12px;
                line-height: 14px;
            }
        }
        .field {
            font-family: "Pretendard";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #ffffff;
            background-color: #000000;
            border-radius: 4px;
            padding: 3px 8px;
            @media screen and (max-width: 480px) {
                font-size: 12px;
                line-height: 14px;
            }
        }
    }
    img {
        width: 18px;
        height: 16px;
    }
`;

const Title = styled.h1`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    margin-top: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    height: 1.2em;
`;

const HashTags = styled.h4`
    display: flex;
    margin-top: 4px;
    .item {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #8b95a1;
        margin-right: 6px;
    }
`;

const Content = styled.div`
    margin-top: 18px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #6b7684;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 2.4em;
`;

export default ApplyTemplate;
