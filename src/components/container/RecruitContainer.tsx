import { useState } from "react";
import styled from "styled-components";
import ApplySection from "../Recruit/ApplySection";
import RecruitBanner from "../Recruit/RecruitBanner";
import RecruitMenu from "../Recruit/RecruitMenu";
import SuggestSection from "../Recruit/SuggestSection";

const RecruitContainer = () => {
  const [current, setCurrent] = useState(0);
  return (
    <Container>
      <RecruitBanner />
      <RecruitMenu current={current} setCurrent={setCurrent} />
      <Line />
      {current === 0 ? <SuggestSection /> : <ApplySection />}
    </Container>
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

const Line = styled.div`
  transform: translateY(-1px);
  background-color: #e5e8eb;
  height: 1px;

  @media screen and (max-width: 480px) {
    margin: 0 20px;
  }
`;

export default RecruitContainer;
