import styled from "styled-components";
import ButtonSection from "../RecruitNew/ButtonSection";
import InfoSection from "../RecruitNew/InfoSection";
import WriteSection from "../RecruitNew/WriteSection";

const RecruitNewContainer = () => {
  return (
    <Container>
      <Wrap>
        <InfoSection />
        <WriteSection />
      </Wrap>
      <ButtonSection />
    </Container>
  );
};

const Container = styled.main`
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 46px;
`;

const Wrap = styled.section`
  display: flex;
`;

export default RecruitNewContainer;
