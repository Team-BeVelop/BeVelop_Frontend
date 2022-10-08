import styled from "styled-components";

const ProjectDetailBottom = () => {
  return (
    <>
      <Wrap>
        <Introduce>
          <Title>한줄소개</Title>
          <Content>
            현재 사이드 프로젝트 진행중에 있으며 초기 아이디어 구상은 끝낸
            상태입니다. 많이 지원해주세요!!!
          </Content>
        </Introduce>
        <BasicInfo>
          <Title>기본정보</Title>
          <Content>
            <div className="row">
              <div className="subtitle">연관분야</div>
              <div className="desc">사이드 프로젝트</div>
            </div>
            <div className="row">
              <div className="subtitle">진행기간</div>
              <div className="desc">7월 1일(금) ~ 9월 30일(금)</div>
            </div>
            <div className="row">
              <div className="subtitle">모집직무</div>
              <div className="desc">기획자, UI디자이너</div>
            </div>
            <div className="row">
              <div className="subtitle">웹사이트</div>
              <div className="underline">https://m/naver.com</div>
            </div>
          </Content>
        </BasicInfo>
        <Contact>
          <Title>연락방식</Title>
          <div className="right">
            <p>이메일</p>
            <input className="margin" />
            <p>오픈 카카오톡 링크</p>
            <input />
          </div>
        </Contact>
        <DetailInfo>
          <Title>상세정보</Title>
          <Content>
            스트릿 패션을 올리고 판매할 수 있는 패션 스타트업 플랫폼입니다.
            피그마 사용하시고 패션에 관심 많으신 UI디자이너를 구하고 있습니다.
            함께 서비스를 이끌어 가고 싶습니다. 스트릿 패션을 올리고 판매할 수
            있는 패션 스타트업 플랫폼입니다. 피그마 사용하시고 패션에 관심
            많으신 UI디자이너를 구하고 있습니다. 함께 서비스를 이끌어 가고
            싶습니다. 스트릿 패션을 올리고 판매할 수 있는 패션 스타트업
            플랫폼입니다. 피그마 사용하시고 패션에 관심 많으신 UI디자이너를
            구하고 있습니다. 함께 서비스를 이끌어 가고 싶습니다 함께 서비스를
            이끌어 가고 싶습니다. 스트릿 패션을 올리고 판매할 수 있는 패션
            스타트업 플랫폼입니다. 피그마 사용하시고 패션에 관심 많으신
            UI디자이너를 구하고 있습니다. 함께 서비스를 이끌어 가고 싶습니다.
          </Content>
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
