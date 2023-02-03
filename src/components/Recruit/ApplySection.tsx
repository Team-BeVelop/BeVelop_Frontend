import styled from "styled-components";
import ApplyFilter from "./ApplyFilter";
import ApplyTemplate from "./ApplyTemplate";
import { useSelector } from "react-redux";

const ApplySection = ({
    division,
    setDivision,
    job,
    setJob,
    interest,
    setInterest
}: any) => {
    const studyList = useSelector((state: any) => state.study.data);

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
                {studyList &&
                    studyList.map((item: any, index: number) => (
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
