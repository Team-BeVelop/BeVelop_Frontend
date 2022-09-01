import { useState } from "react";
import styled from "styled-components";
import PostBanner from "../Post/PostBanner";
import PostMenu from "../Post/PostMenu";
import PostSection from "../Post/PostSection";

const PostContainer = () => {
  const [current, setCurrent] = useState(0);
  return (
    <Container>
      <PostBanner />
      <PostMenu current={current} setCurrent={setCurrent} />
      <Line />
      <PostSection />
    </Container>
  );
};

const Container = styled.main`
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
  }
`;

const Line = styled.div`
  transform: translateY(-1px);
  background-color: #e5e8eb;
  height: 1px;

  @media screen and (max-width: 480px) {
    margin: 0 20px;
  }
`;

export default PostContainer;
