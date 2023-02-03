import { Helmet } from "react-helmet";
import Header from "../common/Header";
import PostDetailContainer from "../components/container/PostDetailContainer";

const PostDetailPage = () => {
  return (
    <>
      <Helmet>
        <title>BeVelop || 포스트 상세 페이지</title>
        <meta
          property="og:url"
          content="https://team-bevelop.github.io/BeVelop_Frontend/postDetail"
        />
        <meta property="og:title" content="BeVelop" />
      </Helmet>
      <Header bgStyle="none" />
      <PostDetailContainer />
    </>
  );
};

export default PostDetailPage;
