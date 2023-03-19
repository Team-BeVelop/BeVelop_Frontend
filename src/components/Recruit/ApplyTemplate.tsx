import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DivisionData } from "../../Data/FieldData";

const DivisionTheme = [
    {
        name: "사이드 프로젝트",
        color: "#7A5DF5"
    },
    {
        name: "스타트업",
        color: "#FF26A8"
    },
    {
        name: "공모전",
        color: "#C00DFF"
    }
];

const ApplyTemplate = ({
    id,
    division,
    field,
    title,
    hashtag,
    shortTitle
}: any) => {
    const navigate = useNavigate();

    // '구분' 배경 지정
    const matchColor = (d: string) => {
        const value = DivisionData.filter(v => v.value === d);
        return (
            DivisionTheme.find(i => i.name === value[0].name)?.color ||
            "#7a5df5"
        );
    };

    const matchKo = (d: string) => {
        const value = DivisionData.filter(v => v.value === d);
        return value[0].name;
    };

    const goProjectDetailPage = (id: number) => navigate(`/project/${id}`);

    return (
        <>
            <Container onClick={() => goProjectDetailPage(id)}>
                <div className="info">
                    <Top divisionColor={matchColor(division)}>
                        <div className="left">
                            <div className="division">{matchKo(division)}</div>
                            <div className="field">{field}</div>
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
            flex-direction: column;
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

//7a5df5
const Top = styled.div<{ divisionColor: string }>`
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
            background: ${props => props.divisionColor};
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
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        height: 1.2em;
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
