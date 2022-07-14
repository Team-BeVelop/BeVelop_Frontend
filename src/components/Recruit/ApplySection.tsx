import styled from "styled-components";
import ApplyFilter from "./ApplyFilter";
import ApplyTemplate from "./ApplyTemplate";
import Dummy from "../../Data/ApplyDummy";

const ApplySection = () => {
  const dummy = Dummy;
  return (
    <>
      <ApplyFilter />
      <Wrap>
        {dummy.map((item, index) => (
          <ApplyTemplate
            key={index}
            tag={item.tag}
            title={item.title}
            hashtag={item.hashtag}
            img={item.img}
          />
        ))}
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  overflow: hidden;
  @media screen and (max-width: 480px) {
    margin: 0 20px;
  }
`;

export default ApplySection;
