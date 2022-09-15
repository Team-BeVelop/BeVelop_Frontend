import styled from "styled-components";

const ProjectDetailTop = () => {
  return (
    <>
      <Wrap>
        <TagWrap>
          <div className="tag">사이드 프로젝트</div>
        </TagWrap>
        <Title>사용자 개선 프로젝트 함께 하실 분 찾아요!</Title>
        <Bottom>
          <img src="/img/suggest1.png" alt="" />
          <div>감성달빛</div>
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
  @media screen and (max-width: 480px) {
    display: none;
  }
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
