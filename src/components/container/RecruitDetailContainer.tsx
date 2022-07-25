import styled from "styled-components";
import BottomInfo from "../RecruitDetail/BottomInfo";
import TopInfo from "../RecruitDetail/TopInfo";

const RecruitDetailContainer = () => {
  return (
    <>
      <Container>
        <Wrap>
          <TopInfo />
          <Line />
          <BottomInfo />
        </Wrap>
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
  transform: translate(0px, -150px);
  border-radius: 6px;
  border: 1px solid #eee;
  padding: 48px 45px;
`;

const Line = styled.div`
  border: 1px solid #e5e8eb;
  margin: 40px 0;
`;

export default RecruitDetailContainer;
