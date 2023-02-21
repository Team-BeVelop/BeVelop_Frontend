import styled from "styled-components";

const PostBanner = () => {
    const goPostNewPage = () => (window.location.href = "/post/new");
    return (
        <>
            <Top>
                <Title>{"내가 만든 프로젝트를\n소개해보세요!"}</Title>
                <Button onClick={goPostNewPage}>구인글 작성하기</Button>
            </Top>
        </>
    );
};

const Top = styled.article`
    background-image: url("/img/banner_post.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    border-radius: 6px;
    margin: 31px 0 70px 0;

    @media screen and (max-width: 480px) {
        margin: 0 0 60px 0;
        height: 143px;
        border-radius: 0;
    }
`;

const Title = styled.h1`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;

    color: #000000;
    text-align: center;
    white-space: pre-line;
    font-feature-settings: "tnum" on, "lnum" on;
    padding-top: 77px;

    @media screen and (max-width: 480px) {
        font-size: 21px;
        line-height: 25px;
        padding-top: 47px;
    }
`;

const Button = styled.button`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 25px;

    color: #fff;
    background: #1f1f1f;
    border-radius: 6px;
    width: 217px;
    height: 56px;
    margin-top: 24px;
    padding: 0px 24px;
    background-image: url("/img/icon_rightArrow.png");
    background-position: right 24px center;
    background-repeat: no-repeat;
    background-size: 24px;

    @media screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 17px;

        width: 160px;
        height: 38px;
        padding: 11px 24px;
        background-position: right 18px center;
        background-repeat: no-repeat;
        background-size: 18px;
        transform: translateX(60%);
    }
`;

export default PostBanner;
