import styled from "styled-components";
import Banner from "../Recruit/Banner";

const RecruitContainer = () => {
  return (
    <Container>
      <Banner />
      <div>제안하기</div>
    </Container>
  );
};

const Container = styled.main`
  margin: 0 285px;

  @media screen and (max-width: 480px) {
    margin: 0;
  }
`;

export default RecruitContainer;
