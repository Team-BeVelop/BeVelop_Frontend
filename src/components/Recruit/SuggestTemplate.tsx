import styled from "styled-components";

const SuggestTemplate = () => {
  return (
    <>
      <Container>
        <Flex>
          <Left>
            <img className="profile" alt="" src="/img/Ellipse 5.png" />
            <Mid>
              <div>Figma AdbeXD Zeplin</div>
              <h1>Hyedesigner</h1>
              <div>#UXUI #UI디자이너 #패션브랜드디자인</div>
            </Mid>
          </Left>
          <Right>
            <img className="heart" alt="" src="/img/icon_search.png" />
          </Right>
        </Flex>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: inline-block;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  height: 144px;
  width: 49%;
  margin-right: 2%;
  margin-bottom: 20px;
  padding: 20px 30px;
  cursor: pointer;
  &:nth-child(2n) {
    margin-right: 0px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    margin: 0 0 10px 0;
    height: 102px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  .profile {
    width: 88px;
    height: 88px;
    border-radius: 50%;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  .heart {
    width: 20.9px;
    height: 18.23px;
  }
`;

const Mid = styled.div`
  margin-left: 30px;
`;

export default SuggestTemplate;
