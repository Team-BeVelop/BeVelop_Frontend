import styled from "styled-components";

const SuggestFilter = () => {
  return (
    <Wrap>
      <FilterArea>
        <Select>
          <option value="none">직무</option>
          <option value="designer">디자이너</option>
        </Select>
        <Select>
          <option value="none">관심분야</option>
        </Select>
        <Select>
          <option value="none">기술스택</option>
        </Select>
      </FilterArea>
      <SearchArea>
        <Input placeholder="함께할 사람을 검색해보세요!" />
      </SearchArea>
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

const SearchArea = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 280px;
  background: #f2f4f6;
  background-image: url("/img/icon_search.png");
  background-repeat: no-repeat;
  background-position: 5px center;
  background-size: 18px;
  padding-left: 40px;
  border: 1px solid #e5e8eb;
  border-radius: 6px;
  &::placeholder {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #6b7684;
  }
`;

export default SuggestFilter;
