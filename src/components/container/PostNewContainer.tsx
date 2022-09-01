import styled from "styled-components";
import TwoButton from "../../common/TwoButton";
import PostNewInfo from "../PostNew/PostNewInfo";
import PostNewWrite from "../PostNew/PostNewWrite";

const PostNewContainer = () => {
  return (
    <Container>
      <Wrap>
        <PostNewInfo />
        <PostNewWrite />
      </Wrap>
      <TwoButton
        left="취소"
        leftClick={() => console.log("취소")}
        right="등록하기"
        rightClick={() => console.log("등록하기")}
      />
    </Container>
  );
};

const Container = styled.main`
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 46px;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
  }
`;

const Wrap = styled.section`
  display: flex;
  margin-bottom: 40px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 34px;
  }
`;

export default PostNewContainer;
