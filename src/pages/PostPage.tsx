import { Helmet } from "react-helmet";
import Header from "../common/Header";
import PostContainer from "../components/container/PostContainer";

const PostPage = () => {
  return (
    <>
      <Helmet>
        <title>BeVelop || 포스트</title>
        <meta
          property="og:url"
          content="https://team-bevelop.github.io/BeVelop_Frontend/post"
        />
        <meta property="og:title" content="BeVelop" />
      </Helmet>
      <Header bgStyle="none" />
      <PostContainer />
    </>
  );
};

export default PostPage;
