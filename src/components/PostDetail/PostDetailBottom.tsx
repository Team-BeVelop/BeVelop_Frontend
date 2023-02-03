import styled from "styled-components";

const PostDetailBottom = () => {
  return (
    <>
      <Wrap>
        <BasicInfo>
          <Title>기본정보</Title>
          <Content>
            <div className="row">
              <div className="subtitle">개발스택</div>
              <div className="stack">
                <div className="stackItem">Figma</div>
                <div className="stackItem">Adobe XD</div>
                <div className="stackItem">Zeplin</div>
              </div>
            </div>
            <div className="row">
              <div className="subtitle">연관분야</div>
              <div className="desc">공유서비스</div>
            </div>
            <div className="row">
              <div className="subtitle">개발기간</div>
              <div className="desc">3개월 ~ 6개월</div>
            </div>
          </Content>
        </BasicInfo>
        <BasicInfo>
          <Title>사이트 링크</Title>
          <Content>
            <div className="row">
              <div className="subtitle">github</div>
              <div className="underline">https://github.com/</div>
            </div>
            <div className="row">
              <div className="subtitle">website</div>
              <div className="underline">https://github.com/</div>
            </div>
          </Content>
        </BasicInfo>
        <Introduce>
          <Title>프로젝트 소개</Title>
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
        </Introduce>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  margin-top: 40px;
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #000000;
  white-space: nowrap;
  width: 120px;
  padding-top: 2px;
  margin-bottom: 22px;
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

const BasicInfo = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 29px;
  }
  .row {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    align-items: center;
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
    width: 70px;
    @media screen and (max-width: 480px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
  .stack {
    display: flex;
    flex-direction: row;
  }
  .stackItem {
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    padding: 5px 16px;
    margin-right: 7px;
    @media screen and (max-width: 480px) {
      padding: 5px 12px;
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

const Introduce = styled.div`
  margin-bottom: 42px;
  @media screen and (max-width: 480px) {
    margin-bottom: 0px;
    padding-top: 39px;
    border-top: 1px solid #eeeeee;
  }
`;

export default PostDetailBottom;
