import styled from "styled-components";
import StyledDropDown from "../../common/StyledDropDown";
import { DivisionData, JobData, FieldData } from "../../Data/FieldData";

export type ApplyFilterType = {
  division: any;
  setDivision: any;
  job: any;
  setJob: any;
  interest: any;
  setInterest: any;
};

const ApplyFilter: React.FC<ApplyFilterType> = ({
  division,
  setDivision,
  job,
  setJob,
  interest,
  setInterest,
}) => {
  return (
    <Wrap>
      <FilterArea>
        <div className="item">
          <StyledDropDown
            type="mini"
            width={150}
            label="구분"
            data={DivisionData}
            current={division}
            setCurrent={setDivision}
          />
        </div>
        <div className="item">
          <StyledDropDown
            type="mini"
            width={150}
            label="직무"
            data={JobData}
            current={job}
            setCurrent={setJob}
          />
        </div>
        <div className="item">
          <StyledDropDown
            type="mini"
            width={150}
            label="관심분야"
            data={FieldData}
            current={interest}
            setCurrent={setInterest}
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
  }
`;

const FilterArea = styled.div`
  display: flex;
  .item {
    margin-right: 10px;
  }
`;

export default ApplyFilter;
