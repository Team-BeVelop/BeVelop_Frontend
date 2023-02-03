import styled from "styled-components";

export type PostDetailCommentType = {
  comment: string;
  setComment: any;
};

export type CommentCheckType = {
  comment: string;
};

const PostDetailComment: React.FC<PostDetailCommentType> = ({
  comment,
  setComment,
}) => {
  return (
    <>
      <Container>
        <Title>Comment</Title>
        <Comments>
          <div className="item">
            <p>디자이</p>UX가 잘 되어있네요!
          </div>
          <div className="item">
            <p>감성달빛</p>너무 좋은 프로젝트에요!
          </div>
          <div className="item">
            <p>깃허브</p>잘 감상하고 갑니다ㅎㅎ
          </div>
          <span className="all">댓글 모두 보기</span>
        </Comments>
        <InputArea comment={comment}>
          <div className="top">
            반응
            <div className="icons">
              <img src="/img/icon_comment1.png" alt="" />
              <img src="/img/icon_comment2.png" alt="" />
              <img src="/img/icon_comment3.png" alt="" />
              <img src="/img/icon_comment4.png" alt="" />
            </div>
          </div>
          <div className="bottom">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글 달기..."
            />
            <button disabled={comment === ""} />
          </div>
        </InputArea>
      </Container>
    </>
  );
};

const Container = styled.section`
  margin-left: 1%;
  height: 363px;
  width: 24%;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #eee;
  padding: 30px;
  margin-top: 48px;
  overflow: hidden;
  @media screen and (max-width: 480px) {
    padding: 29px 28px;
    border: none;
    margin-top: 0;
    margin-left: 0;
    width: 100%;
    height: auto;
    border-radius: 0;
    border-top: 3px solid #eeeeee;
  }
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #000000;
`;

const Comments = styled.div`
  margin-top: 27px;
  margin-bottom: 33px;
  .item {
    display: flex;
    margin-bottom: 13px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
  }
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #6b7684;
    margin-right: 10px;
    white-space: nowrap;
  }
  .all {
    cursor: pointer;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #7a5df5;
    margin-top: 7px;
  }
`;

const InputArea = styled.div<CommentCheckType>`
  border-top: 1px solid #eeeeee;
  padding-top: 15px;
  .top {
    display: flex;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #6b7684;
    justify-content: space-between;
    align-items: center;
  }
  .icons {
    display: flex;
  }
  img {
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }
  .bottom {
    width: 100%;
    position: relative;
    display: inline-block;
    margin-top: 14px;
  }
  input {
    width: 100%;
    height: 49px;
    border: 1px solid #dadee2;
    border-radius: 6px;
    padding: 16px 46px 16px 12px;
    background: ${(props) => (props.comment === "" ? "#F2F4F6" : "#ffffff")};
    border: ${(props) =>
      props.comment === "" ? "1px solid #F2F4F6" : "1px solid #dadee2"};
  }
  button {
    position: absolute;
    top: 8px;
    right: 7px;
    width: 33px;
    height: 33px;
    border-radius: 6px;
    background-color: ${(props) =>
      props.comment === "" ? "#DADEE2" : "#7a5df5"};
    background-image: url("/img/icon_check.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 12px 8px;
    border: none;
  }
`;

export default PostDetailComment;
