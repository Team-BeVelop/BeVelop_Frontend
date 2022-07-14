import styled from "styled-components";
import SuggestFilter from "./SuggestFilter";
import SuggestTemplate from "./SuggestTemplate";
import Dummy from "../../Data/SuggestDummy";

const SuggestSection = () => {
  const dummy = Dummy;
  return (
    <>
      <SuggestFilter />
      <Wrap>
        {dummy.map((item, index) => (
          <SuggestTemplate
            key={index}
            tag={item.tag}
            name={item.name}
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

export default SuggestSection;
