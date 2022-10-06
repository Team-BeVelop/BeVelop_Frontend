import styled from "styled-components";
import TwoButton from "../../common/TwoButton";
import ProjectNewInfo from "../ProjectNew/ProjectNewInfo";
import ProjectNewWrite from "../ProjectNew/ProjectNewWrite";

const ProjectNewContainer = () => {
  return (
    <Container>
      <Wrap>
        <ProjectNewInfo />
        <ProjectNewWrite />
      </Wrap>
      <TwoButton
        left="취소"
        leftClick={() => console.log("취소")}
        right="글 등록"
        rightClick={() => console.log("글 등록")}
      />
    </Container>
  );
};

const Container = styled.main`
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 46px;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
  }
`;

const Wrap = styled.section`
  display: flex;
  height: 635px;
  overflow: hidden;
  margin-bottom: 40px;
  @media screen and (max-width: 480px) {
    height: auto;
    flex-direction: column;
    margin-bottom: 34px;
  }
`;

export default ProjectNewContainer;
