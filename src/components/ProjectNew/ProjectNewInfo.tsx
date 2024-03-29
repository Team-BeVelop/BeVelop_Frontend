import styled from "styled-components";
import FullDropDown from "../../common/FullDropDown";
import StyledCheckbox from "../../common/StyledCheckbox";
import { DivisionData } from "../../Data/FieldData";
import { FieldData, JobData } from "../../Data/FieldData";
import SingleCalendar from "./SingleCalendar";

const ProjectNewInfo = ({
    division,
    setDivision,
    fields,
    setFields,
    jobs,
    setJobs,
    email,
    setEmail,
    kakao,
    setKakao,
    introduce,
    setIntroduce
}: any) => {
    return (
        <>
            <Wrap>
                <Top>기본정보</Top>
                <Content>
                    <DivisionArea>
                        <div className="division">
                            <Title>모집구분</Title>
                            <div className="right">
                                <FullDropDown
                                    data={DivisionData}
                                    current={division}
                                    setCurrent={setDivision}
                                />
                            </div>
                        </div>
                        <div className="num">
                            <Title>모집인원</Title>
                        </div>
                    </DivisionArea>
                    <Field>
                        <Title>연관분야</Title>
                        <div className="right">
                            {FieldData.map(v => (
                                <StyledCheckbox
                                    key={v.value}
                                    object={v}
                                    list={fields}
                                    setList={setFields}
                                />
                            ))}
                        </div>
                    </Field>
                    <Field>
                        <Title>모집직무</Title>
                        <div className="right">
                            {JobData.map(v => (
                                <StyledCheckbox
                                    key={v.value}
                                    object={v}
                                    list={jobs}
                                    setList={setJobs}
                                />
                            ))}
                        </div>
                    </Field>
                    <CalendarArea>
                        <div className="content">
                            <Title>모집 마감일</Title>
                            <div className="input">마감일을 선택해 주세요.</div>
                            <SingleCalendar />
                        </div>
                        <div className="content">
                            <Title>프로젝트 기간</Title>
                            <div className="input">
                                프로젝트 기간을 선택해 주세요.
                            </div>
                        </div>
                    </CalendarArea>
                    <Contact>
                        <Title>
                            연락방식<span>(필수)</span>
                        </Title>
                        <p>
                            제안자, 지원자 모두 수락할 시에만 연락처가
                            노출됩니다.
                        </p>
                        <div>
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="이메일 주소 입력"
                            />
                            <input
                                value={kakao}
                                onChange={e => setKakao(e.target.value)}
                                placeholder="카카오톡 오픈 채팅 주소"
                            />
                        </div>
                    </Contact>
                    <Title>한줄소개</Title>
                    <LongInput
                        value={introduce}
                        onChange={e => setIntroduce(e.target.value)}
                    />
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
        border-radius: 0;
    }
`;

const Content = styled.div`
    padding: 28px;
`;

const DivisionArea = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    .division {
        display: flex;
        align-items: center;
        width: 45%;
        margin-right: 5%;
    }
    .num {
        display: flex;
        align-items: center;
        width: 50%;
    }
    .right {
        position: relative;
        margin-left: 30px;
        width: 100%;
        z-index: 2;
        @media screen and (max-width: 480px) {
            margin-left: 0;
            margin-top: 18px;
        }
    }
    @media screen and (max-width: 480px) {
        display: block;
        margin-bottom: 34px;
    }
`;

const CalendarArea = styled.div`
    display: flex;
    margin-bottom: 50px;
    .content {
        width: 49%;
        &:nth-child(2n + 1) {
            margin-right: 2%;
        }
    }
    .input {
        display: flex;
        margin-top: 12px;
        height: 48px;
        background-color: #f2f4f6;
        border-radius: 6px;
        align-items: center;
        padding-left: 20px;
        cursor: pointer;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #8b95a1;
    }
`;

const Field = styled.div`
    display: flex;
    margin-bottom: 22px;
    .right {
        width: 100%;
        display: block;
        align-items: center;
        margin-left: 30px;
        @media screen and (max-width: 480px) {
            margin-left: 0;
            margin-top: 18px;
        }
    }
    @media screen and (max-width: 480px) {
        display: block;
        margin-bottom: 6px;
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
    span {
        color: #7a5df5;
    }
`;

const Contact = styled.div`
    width: 100%;
    margin-bottom: 50px;
    input {
        width: 49%;
        margin-top: 18px;
        background: #ffffff;
        border: 1px solid #dadee2;
        border-radius: 6px;
        padding: 15px 20px;
        height: 48px;
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
        @media screen and (max-width: 480px) {
            width: 100%;
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
    @media screen and (max-width: 480px) {
        margin-bottom: 34px;
    }
`;

const LongInput = styled.input`
    margin-top: 18px;
    background: #ffffff;
    border: 1px solid #dadee2;
    border-radius: 6px;
    width: 100%;
    padding: 15px 20px;
    height: 48px;
`;

export default ProjectNewInfo;
