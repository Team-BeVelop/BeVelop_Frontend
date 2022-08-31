import styled from "styled-components";
import Dummy from "../../Data/PostDummy";
import PostTemplate from "./PostTemplate";

const PostSection = () => {
  const dummy = Dummy;
  return (
    <>
      <Select>
        <option>구분</option>
      </Select>
      <Wrap>
        {dummy.map((item, index) => (
          <PostTemplate
            key={index}
            title={item.title}
            views={item.views}
            detail={item.detail}
            tag={item.tag}
            img={item.img}
          />
        ))}
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  overflow: hidden;
  margin-top: 28px;
  @media screen and (max-width: 480px) {
    margin: 28px 20px 0 20px;
  }
`;

const Select = styled.select`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  font-feature-settings: "tnum" on, "lnum" on;
  margin-top: 28px;
  padding: 10px 40px 10px 12px;
  padding-right: 40px;
  border: none;
  border-radius: 6px;
  color: #404a5c;
  background-color: #f2f4f6;
  background-image: url("/img/icon_selectBlack.png");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position-x: 90%;
  background-position-y: 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  @media screen and (max-width: 480px) {
    margin: 18px 20px 0 20px;
  }
`;

export default PostSection;
