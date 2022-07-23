import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "../common/Header";
import RecruitContainer from "../components/container/RecruitContainer";

const RecruitPage = () => {
  return (
    <>
      <Helmet>
        <title>BeVelop || 팀원구인</title>
        <meta
          property="og:url"
          content="https://team-bevelop.github.io/BeVelop_Frontend/recruit"
        />
        <meta property="og:title" content="BeVelop" />
      </Helmet>
      <Header bgStyle="recruit" />
      <RecruitContainer />
    </>
  );
};

export default RecruitPage;
