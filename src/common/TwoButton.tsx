import styled from "styled-components";

export type TwoButtonType = {
  left: string;
  leftClick: () => void;
  right: string;
  rightClick: () => void;
};

const TwoButton: React.FC<TwoButtonType> = ({
  left,
  leftClick,
  right,
  rightClick,
}) => {
  return (
    <Container>
      <LeftButton onClick={leftClick}>{left}</LeftButton>
      <RightButton onClick={rightClick}>{right}</RightButton>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    padding: 0 20px;
  }
`;

const LeftButton = styled.button`
  width: 211px;
  height: 54px;
  background: #f7f8fa;
  border: 1px solid #dadee2;
  border-radius: 6px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #505967;
  margin-right: 14px;
  @media screen and (max-width: 480px) {
    width: 48%;
    height: 47px;
    margin-right: 4%;
  }
`;

const RightButton = styled.button`
  width: 211px;
  height: 54px;
  background: #7a5df5;
  border-radius: 6px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #ffffff;
  @media screen and (max-width: 480px) {
    width: 48%;
    height: 47px;
  }
`;

export default TwoButton;
