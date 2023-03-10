import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import TwoButton from "../../common/TwoButton";
import { DivisionData } from "../../Data/FieldData";
import { addNewStudy } from "../../modules/study";
import { RootState } from "../../useRedux/rootReducer";
import ProjectNewInfo from "../ProjectNew/ProjectNewInfo";
import ProjectNewWrite from "../ProjectNew/ProjectNewWrite";

const ProjectNewContainer = () => {
    const [division, setDivision] = useState(DivisionData[0]); //모집구분
    const [fields, setFields] = useState([]); //연관분야
    const [jobs, setJobs] = useState([]); //모집직무
    const [email, setEmail] = useState(""); //이메일
    const [kakao, setKakao] = useState(""); //카카오톡 오픈채팅
    const [introduce, setIntroduce] = useState(""); // 한줄소개
    const [title, setTitle] = useState(""); //제목
    const [desc, setDesc] = useState(""); //설명
    const [num, setNum] = useState(0); // 모집인원

    const dispatch = useDispatch<any>();

    const { Users } = useSelector((state: RootState) => ({
        Users: state.AuthSlice
    }));

    // 글 등록
    const onClickPostButton = () => {
        dispatch(
            addNewStudy({
                token: Users.token,
                description: desc,
                division: division.value,
                emailUrl: email,
                endDate: "2023-03-10",
                enrollmentEndDate: "2023-03-10",
                kakaoUrl: kakao,
                maxMemberCount: num,
                recruitJobList: jobs,
                relatedFieldList: fields,
                shortTitle: introduce,
                startDate: "2022-03-10",
                title: title
            })
        );
    };

    const goRecruitPage = () => (window.location.href = "/recruit");

    return (
        <Container>
            <Wrap>
                <ProjectNewInfo
                    division={division}
                    setDivision={setDivision}
                    fields={fields}
                    setFields={setFields}
                    jobs={jobs}
                    setJobs={setJobs}
                    email={email}
                    setEmail={setEmail}
                    kakao={kakao}
                    setKakao={setKakao}
                    introduce={introduce}
                    setIntroduce={setIntroduce}
                    num={num}
                    setNum={setNum}
                />
                <ProjectNewWrite
                    title={title}
                    setTitle={setTitle}
                    desc={desc}
                    setDesc={setDesc}
                />
            </Wrap>
            <TwoButton
                left="취소"
                leftClick={goRecruitPage}
                right="글 등록"
                rightClick={onClickPostButton}
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
    overflow: hidden;
    margin-bottom: 40px;
    @media screen and (max-width: 480px) {
        height: auto;
        flex-direction: column;
        margin-bottom: 34px;
    }
`;

export default ProjectNewContainer;
