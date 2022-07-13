import styled from "styled-components";
import SuggestFilter from "./SuggestFilter";
import SuggestTemplate from "./SuggestTemplate";

const SuggestSection = () => {
  return (
    <>
      <SuggestFilter />
      <Wrap>
        <SuggestTemplate />
        <SuggestTemplate />
        <SuggestTemplate />
        <SuggestTemplate />
        <SuggestTemplate />
        <SuggestTemplate />
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
