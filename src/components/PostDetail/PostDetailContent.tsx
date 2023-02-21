import styled from "styled-components";
import PostDetailBottom from "./PostDetailBottom";
import PostDetailTop from "./PostDetailTop";

const PostDetailContent = () => {
    return (
        <>
            <Container>
                <PostDetailTop />
                <Line />
                <PostDetailBottom />
            </Container>
        </>
    );
};

const Container = styled.section`
    width: 75%;
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid #eee;
    padding: 30px;
    margin-top: 48px;
    @media screen and (max-width: 480px) {
        padding: 29px 28px;
        border: none;
        margin-top: 0;
        width: 100%;
    }
`;

const Line = styled.div`
    border: 1px solid #e5e8eb;
`;

export default PostDetailContent;
