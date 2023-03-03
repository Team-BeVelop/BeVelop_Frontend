import { useEffect, useState } from "react";
import styled from "styled-components";
import { getStudyList } from "../../modules/study";
import ApplySection from "../Recruit/ApplySection";
import RecruitBanner from "../Recruit/RecruitBanner";
import RecruitMenu from "../Recruit/RecruitMenu";
import SuggestSection from "../Recruit/SuggestSection";
import { useAppDispatch } from "../../useRedux/rootReducer";

interface FilterType {
    value: string;
    name: string;
    bg: string;
    color: string;
}

const RecruitContainer = () => {
    const [current, setCurrent] = useState(0);
    const [division, setDivision] = useState<FilterType>({
        value: "구분",
        name: "구분",
        bg: "#F2F4F6",
        color: "#404A5C"
    });
    const [job, setJob] = useState<FilterType>({
        value: "직무",
        name: "직무",
        bg: "#F2F4F6",
        color: "#404A5C"
    });
    const [interest, setInterest] = useState<FilterType>({
        value: "관심분야",
        name: "관심분야",
        bg: "#F2F4F6",
        color: "#404A5C"
    });

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getStudyList());
    }, [current]);

    return (
        <Container>
            <RecruitBanner />
            <RecruitMenu current={current} setCurrent={setCurrent} />
            <Line />
            {current === 0 ? (
                <SuggestSection />
            ) : (
                <ApplySection
                    division={division}
                    setDivision={setDivision}
                    job={job}
                    setJob={setJob}
                    interest={interest}
                    setInterest={setInterest}
                />
            )}
        </Container>
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

const Line = styled.div`
    transform: translateY(-1px);
    background-color: #e5e8eb;
    height: 1px;

    @media screen and (max-width: 480px) {
        margin: 0 20px;
    }
`;

export default RecruitContainer;
