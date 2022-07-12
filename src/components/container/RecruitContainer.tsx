import { useState } from "react";
import styled from "styled-components";
import Banner from "../Recruit/Banner";
import RecruitMenu from "../Recruit/RecruitMenu";

const RecruitContainer = () => {
  const [current, setCurrent] = useState(0);
  return (
    <Container>
      <Banner />
      <RecruitMenu current={current} setCurrent={setCurrent} />
      <Line />
    </Container>
  );
};

const Container = styled.main`
  margin: 0 285px;

  @media screen and (max-width: 480px) {
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
