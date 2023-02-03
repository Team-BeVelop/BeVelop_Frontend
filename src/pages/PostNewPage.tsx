import { Helmet } from "react-helmet";
import Header from "../common/Header";
import PostNewContainer from "../components/container/PostNewContainer";

const PostNewPage = () => {
    return (
        <>
            <Helmet>
                <title>BeVelop || 포스트 글 작성</title>
                <meta
                    property="og:url"
                    content="https://team-bevelop.github.io/BeVelop_Frontend/post/new"
                />
                <meta property="og:title" content="BeVelop" />
            </Helmet>
            <Header bgStyle="none" />
            <PostNewContainer />
        </>
    );
};

export default PostNewPage;
