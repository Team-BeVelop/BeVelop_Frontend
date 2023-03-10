import styled from "styled-components";
import ApplyFilter from "./ApplyFilter";
import ApplyTemplate from "./ApplyTemplate";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../useRedux/rootReducer";
import { studySearch } from "../../modules/study";

interface FilterType {
    value: string;
    name: string;
    bg: string;
    color: string;
}

const ApplySection = () => {
    const [divisionFilter, setDivisionFilter] = useState<FilterType>({
        value: "",
        name: "구분",
        bg: "#F2F4F6",
        color: "#404A5C"
    });
    const [jobFilter, setJobFilter] = useState<FilterType>({
        value: "",
        name: "직무",
        bg: "#F2F4F6",
        color: "#404A5C"
    });
    const [interestFilter, setInterestFilter] = useState<FilterType>({
        value: "",
        name: "관심분야",
        bg: "#F2F4F6",
        color: "#404A5C"
    });

    const dispatch = useAppDispatch();

    const { StudyList } = useSelector((state: RootState) => ({
        StudyList: state.StudySlice.studies
    }));

    useEffect(() => {
        dispatch(
            studySearch({
                division: divisionFilter.value,
                field: interestFilter.value,
                job: jobFilter.value
            })
        );
    }, [divisionFilter, interestFilter, jobFilter]);

    return (
        <>
            <ApplyFilter
                division={divisionFilter}
                setDivision={setDivisionFilter}
                job={jobFilter}
                setJob={setJobFilter}
                interest={interestFilter}
                setInterest={setInterestFilter}
            />
            <Wrap>
                {StudyList &&
                    StudyList.map((item: any, index: number) => (
                        <ApplyTemplate
                            key={index}
                            id={item.id}
                            division={item.division}
                            field={item.relatedFields[0].fieldName}
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
