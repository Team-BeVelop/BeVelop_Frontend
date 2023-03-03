import styled from "styled-components";
import ApplyFilter from "./ApplyFilter";
import ApplyTemplate from "./ApplyTemplate";
import { useSelector } from "react-redux";

const Dummy = [
    {
        id: 1,
        division: "사이드 프로젝트",
        relatedFields: [{ id: 0, fieldName: "라이프스타일" }],
        studyJobs: [
            { id: 0, jobName: "기획자" },
            { id: 1, jobName: "UI디자이너" }
        ],
        title: "사용자 개선 프로젝트 함께 하실 분 찾아요",
        shortTitle:
            "현재 사이드 프로젝트 진행중에 있으며 초기 아이디어 구상은 끝낸 상태입니다. 많이 지원해주세요!!"
    },
    {
        id: 2,
        division: "스타트업",
        relatedFields: [{ id: 0, fieldName: "라이프스타일" }],
        studyJobs: [
            { id: 0, jobName: "기획자" },
            { id: 1, jobName: "UI디자이너" }
        ],
        title: "사용자 개선 프로젝트 함께 하실 분 찾아요",
        shortTitle:
            "현재 사이드 프로젝트 진행중에 있으며 초기 아이디어 구상은 끝낸 상태입니다. 많이 지원해주세요!!"
    },
    {
        id: 3,
        division: "공모전",
        relatedFields: [{ id: 0, fieldName: "라이프스타일" }],
        studyJobs: [
            { id: 0, jobName: "기획자" },
            { id: 1, jobName: "UI디자이너" }
        ],
        title: "사용자 개선 프로젝트 함께 하실 분 찾아요",
        shortTitle:
            "현재 사이드 프로젝트 진행중에 있으며 초기 아이디어 구상은 끝낸 상태입니다. 많이 지원해주세요!!"
    },
    {
        id: 4,
        division: "사이드 프로젝트",
        relatedFields: [{ id: 0, fieldName: "라이프스타일" }],
        studyJobs: [
            { id: 0, jobName: "기획자" },
            { id: 1, jobName: "UI디자이너" }
        ],
        title: "사용자 개선 프로젝트 함께 하실 분 찾아요",
        shortTitle:
            "현재 사이드 프로젝트 진행중에 있으며 초기 아이디어 구상은 끝낸 상태입니다. 많이 지원해주세요!!"
    },
    {
        id: 5,
        division: "사이드 프로젝트",
        relatedFields: [{ id: 0, fieldName: "라이프스타일" }],
        studyJobs: [
            { id: 0, jobName: "기획자" },
            { id: 1, jobName: "UI디자이너" }
        ],
        title: "사용자 개선 프로젝트 함께 하실 분 찾아요",
        shortTitle:
            "현재 사이드 프로젝트 진행중에 있으며 초기 아이디어 구상은 끝낸 상태입니다. 많이 지원해주세요!!"
    }
];

const ApplySection = ({
    division,
    setDivision,
    job,
    setJob,
    interest,
    setInterest
}: any) => {
    //const studyList = useSelector((state: any) => state.study.data);

    return (
        <>
            <ApplyFilter
                division={division}
                setDivision={setDivision}
                job={job}
                setJob={setJob}
                interest={interest}
                setInterest={setInterest}
            />
            <Wrap>
                {Dummy &&
                    Dummy.map((item: any, index: number) => (
                        <ApplyTemplate
                            key={index}
                            id={item.id}
                            division={item.division}
                            field={item.relatedFields}
                            title={item.title}
                            hashtag={item.studyJobs}
                            shortTitle={item.shortTitle}
                        />
                    ))}
            </Wrap>
        </>
    );
};

const Wrap = styled.section`
    overflow: hidden;
    @media screen and (max-width: 480px) {
        margin: 0 20px;
    }
`;

export default ApplySection;
