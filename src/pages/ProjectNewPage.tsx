import { Helmet } from "react-helmet";
import Header from "../common/Header";
import ProjectNewContainer from "../components/container/ProjectNewContainer";

const ProjectNewPage = () => {
  return (
    <>
      <Helmet>
        <title>BeVelop || 모집 글 작성</title>
        <meta
          property="og:url"
          content="https://team-bevelop.github.io/BeVelop_Frontend/project/new"
        />
        <meta property="og:title" content="BeVelop" />
      </Helmet>
      <Header bgStyle="none" />
      <ProjectNewContainer />
    </>
  );
};

export default ProjectNewPage;
