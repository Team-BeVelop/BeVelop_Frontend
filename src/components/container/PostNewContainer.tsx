import { useState } from "react";
import styled from "styled-components";
import TwoButton from "../../common/TwoButton";
import { DivisionData, PeriodData } from "../../Data/FieldData";
import PostNewInfo from "../PostNew/PostNewInfo";
import PostNewWrite from "../PostNew/PostNewWrite";

const PostNewContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [division, setDivision] = useState(DivisionData[0]); //모집구분
  const [stack, setStack] = useState([]);
  const [fields, setFields] = useState([]); // 연관분야
  const [period, setPeriod] = useState(PeriodData[0]); // 개발기간
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <Container>
      <Wrap>
        <PostNewInfo
          showModal={showModal}
          setShowModal={setShowModal}
          division={division}
          setDivision={setDivision}
          stack={stack}
          setStack={setStack}
          fields={fields}
          setFields={setFields}
          period={period}
          setPeriod={setPeriod}
          github={github}
          setGithub={setGithub}
          website={website}
          setWebsite={setWebsite}
        />
        <PostNewWrite />
      </Wrap>
      <TwoButton
        left="취소"
        leftClick={() => console.log("취소")}
        right="등록하기"
        rightClick={() => console.log("등록하기")}
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
  height: 590px;
  overflow: hidden;
  margin-bottom: 40px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 34px;
  }
`;

export default PostNewContainer;
