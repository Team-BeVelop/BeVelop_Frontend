import styled from "styled-components";

const BottomInfo = () => {
  return (
    <>
      <Wrap>
        <Introduce>
          <div className="title">한줄소개</div>
          <div className="desc">
            현재 사이드 프로젝트 진행중에 있으며 초기 아이디어 구상은 끝낸
            상태입니다. 많이 지원해주세요!!!
          </div>
        </Introduce>
        <BasicInfo>
          <div className="title">기본정보</div>
          <div className="column">
            <div className="row">
              <div className="subtitle">모집직무</div>
              <div className="desc">기획자, UI디자이너</div>
            </div>
            <div className="row">
              <div className="subtitle">연관분야</div>
              <div className="desc">사이드 프로젝트</div>
            </div>
            <div className="row_contact">
              <div className="subtitle">연락방식</div>
              <div className="smallText">이메일</div>
              <div className="desc">eifklksh@naver.com</div>
              <div className="smallText">오픈채팅</div>
              <div className="desc">eifklksh@naver.com</div>
            </div>
            <div className="row">
              <div className="subtitle">웹사이트</div>
              <div className="underline">https://m/naver.com</div>
            </div>
          </div>
        </BasicInfo>
        <DetailInfo>
          <div className="title">상세정보</div>
          <textarea
            className="input"
            placeholder="진행일정과 진행방식 등의 내용을 적어주세요!"
          />
        </DetailInfo>
      </Wrap>
    </>
  );
};

const Wrap = styled.div``;

const Introduce = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 40px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
  }
  .title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    margin-right: 32px;
  }
  .desc {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #6b7684;
    @media screen and (max-width: 480px) {
      margin-top: 16px;
    }
  }
`;

const BasicInfo = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  .title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    margin-right: 32px;
    @media screen and (max-width: 480px) {
      margin-bottom: 16px;
    }
  }
  .column {
    display: flex;
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
  .row_contact {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    &:nth-child(4n) {
      margin-bottom: 0px;
    }
    @media screen and (max-width: 480px) {
      display: none;
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
  }
  .smallText {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #8b95a1;
    margin-right: 8px;
  }
  .underline {
    text-decoration: underline;
  }
`;

const DetailInfo = styled.div`
  display: flex;
  margin-bottom: 200px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
  .title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    margin-right: 32px;
    @media screen and (max-width: 480px) {
      margin-bottom: 16px;
    }
  }
  .input {
    width: 90%;
    min-height: 226px;
    border: 1px solid #eeeeee;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 5px;
  }
`;

export default BottomInfo;
