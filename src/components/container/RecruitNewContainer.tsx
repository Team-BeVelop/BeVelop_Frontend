import styled from "styled-components";
import TwoButton from "../../common/TwoButton";
import InfoSection from "../RecruitNew/InfoSection";
import WriteSection from "../RecruitNew/WriteSection";

const RecruitNewContainer = () => {
  return (
    <Container>
      <Wrap>
        <InfoSection />
        <WriteSection />
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
`;

const Wrap = styled.section`
  display: flex;
  margin-bottom: 40px;
`;

export default RecruitNewContainer;
