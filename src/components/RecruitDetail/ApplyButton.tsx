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
`;

export default ApplyButton;
