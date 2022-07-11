import styled from "styled-components";
import Banner from "../Recruit/Banner";

const RecruitContainer = () => {
  return (
    <Container>
      <Banner />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 285px;

  @media screen and (max-width: 480px) {
    margin: 0;
  }
`;

export default RecruitContainer;
