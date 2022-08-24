import styled from "styled-components";

const ButtonSection = () => {
  return (
    <>
      <Wrap>
        <CancelButton>취소</CancelButton>
        <PostButton>글 등록</PostButton>
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  display: flex;
  margin-top: 40px;
  width: 100%;
  justify-content: center;
`;

const CancelButton = styled.button`
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
`;

const PostButton = styled.button`
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
`;

export default ButtonSection;
