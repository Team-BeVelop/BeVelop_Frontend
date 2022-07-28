import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "../common/Header";
import RecruitDetailContainer from "../components/container/RecruitDetailContainer";

const RecruitDetailPage = () => {
  return (
    <>
      <Helmet>
        <title>BeVelop || 팀원구인</title>
        <meta
          property="og:url"
          content="https://team-bevelop.github.io/BeVelop_Frontend/recruitDetail"
        />
        <meta property="og:title" content="BeVelop" />
      </Helmet>
      <Header bgStyle="recruit" />
      <RecruitDetailContainer />
    </>
  );
};

export default RecruitDetailPage;
