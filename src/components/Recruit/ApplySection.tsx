import styled from "styled-components";
import ApplyFilter from "./ApplyFilter";
import ApplyTemplate from "./ApplyTemplate";

const ApplySection = () => {
  return (
    <>
      <ApplyFilter />
      <Wrap>
        <ApplyTemplate />
        <ApplyTemplate />
        <ApplyTemplate />
        <ApplyTemplate />
        <ApplyTemplate />
        <ApplyTemplate />
        <ApplyTemplate />
        <ApplyTemplate />
        <ApplyTemplate />
        <ApplyTemplate />
        <ApplyTemplate />
        <ApplyTemplate />
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
