import styled from "styled-components";

const PostSection = () => {
  return (
    <>
      <Wrap>
        <Top>글쓰기</Top>
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  width: 25%;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  height: 500px;
`;

const Top = styled.div`
  display: flex;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #ffffff;
  background: #7a5df5;
  border-radius: 6px 6px 0px 0px;
  width: 100%;
  height: 35px;
  align-items: center;
  padding-left: 20px;
`;

export default PostSection;
