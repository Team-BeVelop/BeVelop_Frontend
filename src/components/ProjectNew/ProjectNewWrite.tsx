import styled from "styled-components";

const ProjectNewWrite = ({ title, setTitle, desc, setDesc }: any) => {
    return (
        <>
            <Wrap>
                <Top>글쓰기</Top>
                <Content>
                    <Input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="글 제목을 입력해주세요."
                    />
                    <LongInput
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        placeholder="프로젝트에 대해 소개해주세요. 진행 방식, 모집 인원, 모집 기간, 진행 기간 등을 작성하면 더 구체적인 정보 를 제공할 수 있어요."
                    />
                </Content>
            </Wrap>
        </>
    );
};

const Wrap = styled.section`
    width: 25%;
    border: 1px solid #e3e3e3;
    border-radius: 6px;
    height: 635px;
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
        border-radius: 0;
    }
`;

const Content = styled.div`
    padding: 28px 20px 28px 20px;
    width: 100%;
    height: 100%;
`;

const Input = styled.input`
    background: #ffffff;
    border: 1px solid #dadee2;
    border-radius: 6px;
    width: 100%;
    padding: 16px 20px;

    &::placeholder {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #6b7684;
    }
`;

const LongInput = styled.textarea`
    background: #ffffff;
    border: 1px solid #dadee2;
    border-radius: 6px;
    width: 100%;
    height: 83%;
    max-width: 100%;
    max-height: 83%;
    margin-top: 12px;
    padding: 20px;
    resize: none;

    &::placeholder {
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #6b7684;
    }
    @media screen and (max-width: 480px) {
        height: 170px;
    }
`;

export default ProjectNewWrite;
