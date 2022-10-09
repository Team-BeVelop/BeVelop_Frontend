import styled from "styled-components";
import PostDetailComment from "../PostDetail/PostDetailComment";
import PostDetailContent from "../PostDetail/PostDetailContent";

const PostDetailContainer = () => {
  return (
    <>
      <Container>
        <PostDetailContent />
        <PostDetailComment />
      </Container>
    </>
  );
};

const Container = styled.main`
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
    display: block;
  }
`;

export default PostDetailContainer;
