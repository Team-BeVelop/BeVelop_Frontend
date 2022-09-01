import { Helmet } from "react-helmet";
import Header from "../common/Header";
import RecruitNewContainer from "../components/container/RecruitNewContainer";

const RecruitNewPage = () => {
  return (
    <>
      <Helmet>
        <title>BeVelop || 모집 글 작성</title>
        <meta
          property="og:url"
          content="https://team-bevelop.github.io/BeVelop_Frontend/recruit/new"
        />
        <meta property="og:title" content="BeVelop" />
      </Helmet>
      <Header bgStyle="none" />
      <RecruitNewContainer />
    </>
  );
};

export default RecruitNewPage;
