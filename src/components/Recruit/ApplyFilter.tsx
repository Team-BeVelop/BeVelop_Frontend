import styled from "styled-components";

const ApplyFilter = () => {
  return (
    <Wrap>
      <FilterArea>
        <Select>
          <option value="none">구분</option>
        </Select>
        <Select>
          <option value="none">직무</option>
        </Select>
        <Select>
          <option value="none">관심분야</option>
        </Select>
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
`;

const Select = styled.select`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  font-feature-settings: "tnum" on, "lnum" on;
  margin-right: 10px;
  padding: 10px 40px 10px 12px;
  padding-right: 40px;
  border: none;
  border-radius: 6px;
  color: #404a5c;
  background-color: #f2f4f6;
  background-image: url("/img/icon_selectBlack.png");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position-x: 90%;
  background-position-y: 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export default ApplyFilter;
