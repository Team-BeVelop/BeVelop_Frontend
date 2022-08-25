import styled from "styled-components";

const InfoSection = () => {
  return (
    <>
      <Wrap>
        <Top>기본정보</Top>
        <Content>
          <Box>
            <Title>모집구분</Title>
            <Filter>
              <p>사이드 프로젝트</p>
            </Filter>
          </Box>
          <Box>
            <Title>연관분야</Title>
            <div className="right">
              <input type="checkbox" />
              <p>ㄴㄴ</p>
              <input type="checkbox" />
              <p>ㄴㄴ</p>
            </div>
          </Box>
          <Box>
            <Title>모집직무</Title>
            <div className="right">
              <input type="checkbox" />
              <p>ㄴㄴ</p>
              <input type="checkbox" />
              <p>ㄴㄴ</p>
            </div>
          </Box>
          <Contact>
            <Title>연락방식</Title>
            <p>제안자, 지원자 모두 수락할 시에만 연락처가 노출됩니다.</p>
            <div>
              <input placeholder="이메일 주소 입력" />
              <input placeholder="카카오톡 오픈 채팅 주소" />
            </div>
          </Contact>
          <Title>한줄소개</Title>
          <LongInput />
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
  height: 621px;
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
`;

const Content = styled.div`
  padding: 28px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  .right {
    display: flex;
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
`;

const Filter = styled.div`
  display: flex;
  width: 400px;
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

const Contact = styled.div`
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
  p {
    margin-top: 5px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #8b95a1;
  }
`;

const LongInput = styled.input`
  margin-top: 18px;
  background: #ffffff;
  border: 1px solid #dadee2;
  border-radius: 6px;
  width: 100%;
  padding: 16px 20px;
`;

export default InfoSection;
