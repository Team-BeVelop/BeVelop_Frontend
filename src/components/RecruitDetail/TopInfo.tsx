import styled from "styled-components";

const TopInfo = () => {
  return (
    <>
      <Wrap>
        <TagWrap>
          <div className="tag">사이드 프로젝트</div>
          <img className="scrap" alt="" src="/img/Vector2.png" />
        </TagWrap>
        <Title>사용자 개선 프로젝트 함께 하실 분 찾아요!</Title>
        <Bottom>
          <div>감성달빛</div>
          <div className="date">2022.07.10</div>
        </Bottom>
      </Wrap>
    </>
  );
};

const Wrap = styled.div``;

const TagWrap = styled.div`
  display: flex;
  justify-content: space-between;

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
  .scrap {
    @media screen and (max-width: 480px) {
      display: none;
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
  }
`;

const Bottom = styled.span`
  display: flex;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #6b7684;
  margin-top: 15px;
  @media screen and (max-width: 480px) {
    display: none;
  }
  .date {
    margin-left: 19px;
  }
`;

export default TopInfo;
