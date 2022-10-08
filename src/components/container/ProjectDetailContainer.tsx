import styled from "styled-components";
import ProjectDetailBottom from "../ProjectDetail/ProjectDetailBottom";
import ProjectDetailButton from "../ProjectDetail/ProjectDetailButton";
import ProjectDetailTop from "../ProjectDetail/ProjectDetailTop";

const ProjectDetailContainer = () => {
  return (
    <>
      <Container>
        <Wrap>
          <ProjectDetailTop />
          <Line />
          <ProjectDetailBottom />
        </Wrap>
        <ProjectDetailButton />
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
  border-radius: 6px;
  border: 1px solid #eee;
  padding: 30px;
  margin-top: 48px;
  @media screen and (max-width: 480px) {
    padding: 29px 28px;
    border: none;
    margin-top: 0;
  }
`;

const Line = styled.div`
  border: 1px solid #e5e8eb;
`;

export default ProjectDetailContainer;
