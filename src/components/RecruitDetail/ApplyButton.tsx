import styled from "styled-components";

const ApplyButton = () => {
  return (
    <>
      <Wrap>
        <Button>지원하기</Button>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 480px) {
    display: block;
    width: auto;
    margin: 0 20px;
  }
`;

const Button = styled.button`
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
  padding: 15px 112px;
  margin-top: 60px;
  margin-bottom: 200px;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 34px;
    margin-bottom: 116px;
  }
`;

export default ApplyButton;
