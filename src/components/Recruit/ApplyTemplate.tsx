import styled from "styled-components";

export type Apply = {
  tag: any;
  title: any;
  hashtag: any;
  content: any;
};

const ApplyTemplate: React.FC<Apply> = ({ tag, title, hashtag, content }) => {
  return (
    <>
      <Container>
        <div className="info">
          <Top>
            <div className="left">
              <div>사이드 프로젝트</div>
              <div>라이프스타일</div>
            </div>
            <img className="heart" src="img/icon_heart_fill.png" alt="" />
          </Top>
          <Title>{title}</Title>
          <Hash>{hashtag}</Hash>
          <Content>{content}</Content>
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
      width: 100%;
      padding: 17px 17px 14px 17px;
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
