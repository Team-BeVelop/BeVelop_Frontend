import styled from "styled-components";

const RecruitDetailContainer = () => {
  return (
    <>
      <Container>
        <Wrap>RecruitDetailContainer</Wrap>
      </Container>
    </>
  );
};

const Container = styled.main`
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
  }
`;

const Wrap = styled.section`
  background-color: #fff;
  transform: translate(0px, -150px);
`;

export default RecruitDetailContainer;
