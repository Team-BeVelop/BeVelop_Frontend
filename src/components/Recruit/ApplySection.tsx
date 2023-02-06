import styled from "styled-components";
import ApplyFilter from "./ApplyFilter";
import ApplyTemplate from "./ApplyTemplate";
import { useSelector } from "react-redux";

const Dummy = [
    {
        id: 1,
        division: "사이드 프로젝트",
        relatedFields: [{ id: 0, fieldName: "라이프스타일" }],
        studyJobs: [{ id: 0, jobName: "금융" }],
        title: "사용자 개선 프로젝트 함께 하실 분 찾아요",
        shortTitle: "뽑아요"
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
