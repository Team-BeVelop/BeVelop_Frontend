import { useState } from "react";
import styled from "styled-components";

const SuggestTemplate = () => {
  const [checked, setChecked] = useState<Boolean>(false);
  return (
    <>
      <Container>
        <Flex>
          <Left>
            <img className="profile" alt="" src="/img/Ellipse 5.png" />
            <Info>
              <Tags>
                <div className="text">Figma</div>
                <div className="text">AdobeXD</div>
                <div className="text">Zeplin</div>
              </Tags>
              <h1 className="title">Hyedesigner</h1>
              <h4 className="hash">#UXUI #UI디자이너 #패션브랜드디자인</h4>
            </Info>
          </Left>
          <Right>
            <img
              onClick={() => setChecked(!checked)}
              className="heart"
              alt=""
              src={checked ? "/img/icon_heart_fill.png" : "/img/icon_heart.png"}
            />
          </Right>
        </Flex>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: inline-block;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  height: 144px;
  width: 49%;
  margin-right: 2%;
  margin-bottom: 20px;
  padding: 28px 30px;
  overflow: hidden;
  cursor: pointer;
  &:nth-child(2n) {
    margin-right: 0px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    margin: 0 0 10px 0;
    height: 102px;
    padding: 22px 12px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  .profile {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    @media screen and (max-width: 480px) {
      width: 58px;
      height: 58px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  .heart {
    width: 20.9px;
    height: 18.23px;
  }
`;

const Info = styled.div`
  margin-left: 30px;
  @media screen and (max-width: 480px) {
    margin-left: 10px;
  }

  .title {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    margin-bottom: 4px;
    @media screen and (max-width: 480px) {
      font-size: 16px;
      line-height: 19px;
    }
  }

  .hash {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #8b95a1;
    @media screen and (max-width: 480px) {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  margin-bottom: 12px;
  .text {
    padding: 3px 8px;
    background-color: #f2f4f6;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    border-radius: 4px;
    margin-right: 7px;
    @media screen and (max-width: 480px) {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

export default SuggestTemplate;
