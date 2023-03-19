import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getStudy } from "../../modules/study";
import { RootState } from "../../useRedux/rootReducer";
import ProjectDetailBottom from "../ProjectDetail/ProjectDetailBottom";
import ProjectDetailButton from "../ProjectDetail/ProjectDetailButton";
import ProjectDetailTop from "../ProjectDetail/ProjectDetailTop";

const ProjectDetailContainer = () => {
    const id = window.location.href.split("/")[4];

    const dispatch = useDispatch<any>();
    const { Users } = useSelector((state: RootState) => ({
        Users: state.AuthSlice
    }));
    const { Study } = useSelector((state: RootState) => ({
        Study: state.StudySlice.study
    }));

    useEffect(() => {
        dispatch(getStudy({ token: Users.token, id: id }));
    }, []);

    return (
        <>
            <Container>
                <Wrap>
                    <ProjectDetailTop
                        division={Study.division}
                        owner={Study.owner.name}
                        title={Study.title}
                    />
                    <Line />
                    <ProjectDetailBottom
                        shortTitle={Study.shortTitle}
                        field={Study.fieldList[0].fieldName}
                        startDate={Study.startDate}
                        endDate={Study.endDate}
                        jobList={Study.jobList}
                        emailUrl={Study.emailUrl}
                        kakaoUrl={Study.kakaoUrl}
                        desc={Study.description}
                        enrollmentEndDate={Study.enrollmentEndDate}
                        maxMemberCount={Study.maxMemberCount}
                        web={"https://m/naver.com"}
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
