import styled from "styled-components";
import { DivisionData } from "../../Data/FieldData";

const ProjectDetailTop = ({ division, owner, title }: any) => {
    const matchKo = (d: string) => {
        const value = DivisionData.filter(v => v.value === d);
        return value.length !== 0 ? value[0].name : "";
    };

    return (
        <>
            <Wrap>
                <TagWrap>
                    <div className="tag">{matchKo(division)}</div>
                </TagWrap>
                <Title>{title}</Title>
                <Bottom>
                    <img src="/img/suggest1.png" alt="" />
                    <div>{owner}이름</div>
                    <div className="date">마지막 접속 1시간 전</div>
                </Bottom>
            </Wrap>
        </>
    );
};

const Wrap = styled.div``;

const TagWrap = styled.div`
    display: flex;
    justify-content: left;
    .tag {
        background: #7a5df5;
        border-radius: 4px;
        padding: 3px 8px;
        gap: 10px;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #ffffff;
        @media screen and (max-width: 480px) {
            font-size: 12px;
            line-height: 14px;
        }
    }
`;

const Title = styled.h1`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    font-feature-settings: "tnum" on, "lnum" on;
    margin-top: 22px;
    @media screen and (max-width: 480px) {
        font-size: 24px;
        line-height: 29px;
        margin-top: 15px;
        margin-bottom: 34px;
    }
`;

const Bottom = styled.span`
    display: flex;
    align-items: center;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #6b7684;
    margin-top: 22px;
    margin-bottom: 34px;
    img {
        width: 38px;
        height: 38px;
        margin-right: 8px;
    }
    .date {
        font-size: 12px;
        line-height: 14px;
        color: #8b95a1;
        margin-left: 11px;
    }
`;

export default ProjectDetailTop;
