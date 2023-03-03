import styled from "styled-components";

export type CurrentMenuType = {
    current: number;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

const RecruitMenu: React.FC<CurrentMenuType> = ({ current, setCurrent }) => {
    return (
        <Wrap>
            <Left>
                <MenuText props={current === 0} onClick={() => setCurrent(0)}>
                    제안하기
                </MenuText>
                <MenuText props={current === 1} onClick={() => setCurrent(1)}>
                    지원하기
                </MenuText>
            </Left>
            <Right>최신순</Right>
        </Wrap>
    );
};

const Wrap = styled.section`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 480px) {
        margin: 0 20px;
    }
`;

const Left = styled.div`
    display: flex;
`;

const MenuText = styled.div<{ props: any }>`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;

    z-index: 1;
    cursor: pointer;
    margin-right: 30px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: ${props => (props.props ? "#000" : "#6B7684")};
    border-bottom: ${props => (props.props ? "2px solid" : "none")};
    padding-bottom: 12px;

    @media screen and (max-width: 480px) {
        font-size: 18px;
        line-height: 21px;
    }
`;

const Right = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #8b95a1;

    display: flex;
    align-items: center;
    padding-bottom: 12px;
    font-feature-settings: "tnum" on, "lnum" on;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

export default RecruitMenu;
