import { Helmet } from "react-helmet";
import Header from "../common/Header";
import ProjectDetailContainer from "../components/container/ProjectDetailContainer";

const ProjectDetailPage = () => {
  return (
    <>
      <Helmet>
        <title>BeVelop || 프로젝트 상세 페이지</title>
        <meta
          property="og:url"
          content="https://team-bevelop.github.io/BeVelop_Frontend/projectDetail"
        />
        <meta property="og:title" content="BeVelop" />
      </Helmet>
      <Header bgStyle="none" />
      <ProjectDetailContainer />
    </>
  );
};

export default ProjectDetailPage;
