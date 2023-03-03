import { useState } from "react";
import styled from "styled-components";
import StyledDropDown from "../../common/StyledDropDown";
import { JobData, FieldData, designFieldData } from "../../Data/FieldData";

interface FilterType {
    value: string;
    name: string;
    bg: string;
    color: string;
}

const SuggestFilter = () => {
    const [division, setDivision] = useState<FilterType>({
        value: "value1",
        name: "직무",
        bg: "#F2F4F6",
        color: "#404A5C"
    });
    const [division1, setDivision1] = useState<FilterType>({
        value: "value2",
        name: "관심분야",
        bg: "#F2F4F6",
        color: "#404A5C"
    });
    const [division2, setDivision2] = useState<FilterType>({
        value: "value3",
        name: "기술스택",
        bg: "#F2F4F6",
        color: "#404A5C"
    });

    return (
        <Wrap>
            <FilterArea>
                <div className="item">
                    <StyledDropDown
                        type="mini"
                        width={150}
                        data={JobData}
                        current={division}
                        setCurrent={setDivision}
                    />
                </div>
                <div className="item">
                    <StyledDropDown
                        type="mini"
                        width={150}
                        data={FieldData}
                        current={division1}
                        setCurrent={setDivision1}
                    />
                </div>
                <div className="item">
                    <StyledDropDown
                        type="mini"
                        width={150}
                        data={designFieldData}
                        current={division2}
                        setCurrent={setDivision2}
                    />
                </div>
            </FilterArea>
        </Wrap>
    );
};

const Wrap = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 28px 0;
    @media screen and (max-width: 480px) {
        margin: 18px 20px 30px 20px;
        /* overflow-x: auto; */
    }
`;

const FilterArea = styled.div`
    display: flex;
    white-space: nowrap;
    .item {
        position: relative;
        margin-right: 10px;
        overflow-y: visible;
    }
    @media screen and (max-width: 480px) {
    }
`;

export default SuggestFilter;
