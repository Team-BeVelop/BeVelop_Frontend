import { useState } from "react";
import styled from "styled-components";

export type Post = {
  title: any;
  views: any;
  detail: any;
  tag: any;
  img: any;
};

const PostTemplate: React.FC<Post> = ({ title, views, detail, tag, img }) => {
  const [checked, setChecked] = useState<Boolean>(false);
  const limitDesc = (desc: string) =>
    desc.length > 50 ? desc.substr(0, 50) + "..." : desc;
  return (
    <>
      <Container>
        <div className="top">
          <img className="bg " src={img} alt="" />
          <img
            className="scrap"
            src={checked ? "/img/Vector.png" : "/img/Vector2.png"}
            alt=""
            onClick={() => setChecked(!checked)}
          />
        </div>
        <Info>
          <div className="title">
            <h1>{title}</h1>
            <p>
              조회수
              <span>{views}</span>
            </p>
          </div>
          <div className="desc">{detail}</div>
          <div className="tag">{tag}</div>
        </Info>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: inline-block;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  height: 396px;
  width: 32%;
  margin-right: 2%;
  margin-bottom: 34px;
  overflow: hidden;
  cursor: pointer;
  &:nth-child(3n) {
    margin-right: 0px;
  }
  .top {
    position: relative;
  }
  .bg {
    width: 100%;
    height: 243px;
    @media screen and (max-width: 480px) {
      height: 183px;
    }
  }
  .scrap {
    position: absolute;
    top: 15px;
    right: 17px;
    width: 14px;
    height: 18px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 14px;
    height: 293px;
  }
`;

const Info = styled.div`
  padding: 20px 12px 22px 12px;
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 19px 17px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    @media screen and (max-width: 480px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #404a5c;
    @media screen and (max-width: 480px) {
      font-size: 12px;
      line-height: 14px;
    }
  }
  span {
    margin-left: 1px;
    color: #8b95a1;
  }
  .desc {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #6b7684;
    margin: 14px 0 21px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2em;
    height: 2.4em;
    @media screen and (max-width: 480px) {
      margin: 7px 0 12px 0;
      -webkit-line-clamp: 1;
      height: 1.2em;
    }
  }
  .tag {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #8b95a1;
  }
`;

export default PostTemplate;

// 멀티라인 글자수 제한 : https://junistory.blogspot.com/2017/06/css-ellipsis.html
