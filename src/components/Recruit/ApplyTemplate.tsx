import styled from "styled-components";

export type Apply = {
    tag: any;
    title: any;
    hashtag: any;
    img: any;
};

const ApplyTemplate: React.FC<Apply> = ({ tag, title, hashtag, img }) => {
    return (
        <>
            <Container>
                <img src={img} alt="" />
                <div className="info">
                    <Tags>
                        <div>사이드 프로젝트</div>
                        <div>라이프스타일</div>
                    </Tags>
                    <Title>{title}</Title>
                    <Hash>{hashtag}</Hash>
                    <Button>지금 참여하기</Button>
                </div>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: inline-block;
    border: 1px solid #eeeeee;
    border-radius: 6px;
    height: 348px;
    width: 23.5%;
    margin-right: 2%;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 45px;
    &:nth-child(4n) {
        margin-right: 0px;
    }

    img {
        width: 100%;
        height: 170px;
        @media screen and (max-width: 480px) {
            display: none;
        }
    }

    .info {
        padding: 0 13px 13px 13px;
        @media screen and (max-width: 480px) {
            width: 100%;
            padding: 17px 17px 14px 17px;
        }
    }

    @media screen and (max-width: 480px) {
        display: flex;
        width: 100%;
        margin-bottom: 10px;
        height: 170px;
    }
`;

const Tags = styled.div`
    display: flex;
    margin-top: 23px;
    @media screen and (max-width: 480px) {
        margin-top: 0;
    }
    div {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #ffffff;
        padding: 3px 8px;
        background: #7a5df5;
        border-radius: 4px;
        margin-right: 10px;
        @media screen and (max-width: 480px) {
            font-size: 12px;
            line-height: 14px;
        }
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
    @media screen and (max-width: 480px) {
        margin-top: 24px;
    }
`;

const Hash = styled.h4`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #8b95a1;
    margin-top: 4px;
`;

const Button = styled.button`
    margin-top: 22px;
    background: #f2f4f6;
    border-radius: 6px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    width: 100%;
    height: 38px;
    @media screen and (max-width: 480px) {
        margin-top: 18px;
    }
`;

export default ApplyTemplate;
