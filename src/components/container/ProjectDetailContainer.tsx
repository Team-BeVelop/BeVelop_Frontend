import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getStudy } from "../../modules/study";
import ProjectDetailBottom from "../ProjectDetail/ProjectDetailBottom";
import ProjectDetailButton from "../ProjectDetail/ProjectDetailButton";
import ProjectDetailTop from "../ProjectDetail/ProjectDetailTop";

const ProjectDetailContainer = () => {
  const id = window.location.href.split("/")[4];
  const dispatch = useDispatch<any>();
  const token = useSelector((state: any) => state.auth.data.token.access_token);
  const studyDetail = useSelector((state: any) => state.study.data);

  useEffect(() => {
    dispatch(getStudy(token, id));
  }, []);
  console.log(studyDetail);
  return (
    <>
      <Container>
        <Wrap>
          <ProjectDetailTop
            division={studyDetail && studyDetail.division}
            owner={studyDetail && studyDetail.owner.name}
            title={studyDetail && studyDetail.title}
          />
          <Line />
          <ProjectDetailBottom
            shortTitle={studyDetail && studyDetail.shortTitle}
            field={studyDetail && studyDetail.fieldList[0].fieldName}
            startDate={studyDetail && studyDetail.startDate}
            endDate={studyDetail && studyDetail.endDate}
            jobList={studyDetail && studyDetail.jobList}
            emailUrl={studyDetail && studyDetail.emailUrl}
            kakaoUrl={studyDetail && studyDetail.kakaoUrl}
            desc={studyDetail && studyDetail.description}
            web={studyDetail && "https://m/naver.com"}
          />
        </Wrap>
        <ProjectDetailButton />
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
  border-radius: 6px;
  border: 1px solid #eee;
  padding: 30px;
  margin-top: 48px;
  @media screen and (max-width: 480px) {
    padding: 29px 28px;
    border: none;
    margin-top: 0;
  }
`;

const Line = styled.div`
  border: 1px solid #e5e8eb;
`;

export default ProjectDetailContainer;
