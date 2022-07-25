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
      </Wrap>
    </>
  );
};

const Wrap = styled.div``;

const Introduce = styled.div`
  display: flex;
  align-items: center;
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
  }
`;

export default BottomInfo;
