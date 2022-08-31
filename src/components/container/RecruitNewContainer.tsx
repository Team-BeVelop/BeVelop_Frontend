import styled from "styled-components";
import ButtonSection from "../RecruitNew/ButtonSection";
import InfoSection from "../RecruitNew/InfoSection";
import PostSection from "../RecruitNew/PostSection";

const RecruitNewContainer = () => {
  return (
    <Container>
      <Wrap>
        <InfoSection />
        <PostSection />
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
