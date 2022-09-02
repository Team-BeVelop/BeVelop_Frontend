import { useState } from "react";
import styled from "styled-components";
import StyledCheckbox from "../../common/StyledCheckbox";
import StyledDropDown from "../../common/StyledDropDown";
import FieldData from "../../Data/FieldData";

const PeriodData = ["1개월 이하", "1개월 - 3개월", "3개월 - 6개월", "1년 이상"];
const DivisionData = ["사이드프로젝트", "스타트업", "공모전"];

const PostNewInfo = () => {
  const [period, setPeriod] = useState(PeriodData[0]);
  const [division, setDivision] = useState(DivisionData[0]);
  return (
    <>
      <Wrap>
        <Top>기본정보</Top>
        <Content>
          <Box>
            <Title>모집구분</Title>
            <DropDownWrap>
              <StyledDropDown
                label="구분"
                data={DivisionData}
                current={division}
                setCurrent={setDivision}
              />
            </DropDownWrap>
          </Box>
          <Box>
            <Title>개발스택</Title>
            <Filter>
              <p>개발스택을 추가해보세요</p>
            </Filter>
          </Box>
          <Field>
            <Title>연관분야</Title>
            <div className="right">
              {FieldData.map((v) => (
                <StyledCheckbox key={v} text={v} />
              ))}
            </div>
          </Field>
          <Box>
            <Title>개발기간</Title>
            <DropDownWrap>
              <StyledDropDown
                label="구분"
                data={PeriodData}
                current={period}
                setCurrent={setPeriod}
              />
            </DropDownWrap>
          </Box>
          <Title>사이트 링크</Title>
          <SiteWrap>
            <input placeholder="github 링크를 입력해주세요." />
            <input placeholder="website 링크를 입력해주세요." />
          </SiteWrap>
        </Content>
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  width: 73%;
  margin-right: 2%;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  height: 100%;
  @media screen and (max-width: 480px) {
    border: none;
    border-radius: 0;
    width: 100%;
    height: auto;
  }
`;

const Top = styled.div`
  display: flex;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #ffffff;
  background: #7a5df5;
  border-radius: 6px 6px 0px 0px;
  width: 100%;
  height: 35px;
  align-items: center;
  padding-left: 20px;
  @media screen and (max-width: 480px) {
    border-radius: 0px;
  }
`;

const Content = styled.div`
  padding: 28px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Field = styled.div`
  display: flex;
  margin-bottom: 22px;
  .right {
    display: block;
    align-items: center;
    margin-left: 30px;
  }
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #000000;
  white-space: nowrap;
`;

const Filter = styled.div`
  display: flex;
  width: 436px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #dadee2;
  border-radius: 6px;
  align-items: center;
  text-align: left;
  margin-left: 30px;
  p {
    margin-left: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
  }
`;

const SiteWrap = styled.div`
  width: 100%;
  input {
    width: 49%;
    margin-top: 18px;
    margin-bottom: 50px;
    background: #ffffff;
    border: 1px solid #dadee2;
    border-radius: 6px;
    padding: 16px 20px;
    &:nth-child(2n + 1) {
      margin-right: 2%;
    }
    &::placeholder {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      font-feature-settings: "tnum" on, "lnum" on;
      color: #6b7684;
    }
  }
`;

const DropDownWrap = styled.div`
  margin-left: 30px;
  width: 100%;
`;

export default PostNewInfo;
