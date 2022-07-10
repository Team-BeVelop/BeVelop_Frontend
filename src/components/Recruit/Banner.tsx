import styled from "styled-components";

const Banner = () => {
  return (
    <>
      <Wrap>
        <Top>
          <h2 className="title">{"프로젝트를 진행해\n커리어를 쌓아보세요!"}</h2>
          <button className="button">
            구인글 작성하기
            <img className="icon" src="/img/icon_rightArrow.png" alt="" />
          </button>
        </Top>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 285px;
`;

const Top = styled.div`
  background-image: linear-gradient(
      110.41deg,
      rgba(122, 93, 245, 0.8) -0.92%,
      rgba(189, 0, 255, 0.76) 93.42%
    ),
    url("/img/banner_recruit.png");
  background-position: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 100%;
  border-radius: 6px;
  margin: 31px 0 75px 0;

  .title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;

    color: #fff;
    text-align: center;
    white-space: pre-line;
    font-feature-settings: "tnum" on, "lnum" on;
    padding-top: 77px;
  }

  .button {
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
  }

  .icon {
    position: relative;
    left: 18px;
    top: 5px;
    width: 24px;
    height: 24px;
  }
`;

export default Banner;
