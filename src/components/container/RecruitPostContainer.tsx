import styled from "styled-components";
import ButtonSection from "../RecruitPost/ButtonSection";
import InfoSection from "../RecruitPost/InfoSection";
import PostSection from "../RecruitPost/PostSection";

const RecruitPostContainer = () => {
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

export default RecruitPostContainer;
