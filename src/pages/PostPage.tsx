import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../common/Header";
import PostContainer from "../components/container/PostContainer";
import Login from "../components/Login/Login";

const PostPage = () => {
    const { Modal } = useSelector((state: any) => ({
        Modal: state.modal.Modal
    }));

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
            {Modal ? (
                <Wrap>
                    <div className="bg"></div>
                    <Login />
                </Wrap>
            ) : (
                ""
            )}
            <PostContainer />
        </>
    );
};

const Wrap = styled.div`
    .bg {
        z-index: 5;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.45);
    }
`;

export default PostPage;
