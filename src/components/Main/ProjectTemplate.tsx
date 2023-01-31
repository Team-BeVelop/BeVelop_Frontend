import React, { useRef, useState } from "react";
import styled from "styled-components";

const TemplateWrap = styled.div`
    width: 30%;
    min-width: 205px;
    height: 205px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 6px;
    margin-bottom: 34px;
    & {
        margin-right: 3%;
    }
    &:last-child {
        margin-right: 0px;
    }
    @media screen and (max-width: 420px) {
        width: 100%;
    }
`;
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    div.unchecked {
        margin-top: 17px;
        width: 14px;
        margin-top: 16px;
        margin-right: 12px;
        height: 18px;
        background-image: url("https://team-bevelop.github.io/BeVelop_Frontend/img/Vector2.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
    div.checked {
        width: 14px;
        height: 18px;
        margin-top: 16px;
        margin-right: 12px;
        background-image: url("https://team-bevelop.github.io/BeVelop_Frontend/img/Vector.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

const Subject = styled.div<{ subjectbg: any }>`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;

    color: #ffffff;
    padding: 3px 8px;
    margin-left: 17px;
    margin-top: 14px;
    background: ${props =>
        props.subjectbg == "스타트업" ? "#FF26A8" : "#7A5DF5"};
    border-radius: 4px;
    @media screen and (max-width: 960px) {
        font-size: 12px;
    }
`;
const Contents = styled.div`
    height: 100px;
`;
const Title = styled.div`
    margin: 17px 43px 0px 17px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    font-feature-settings: "tnum" on, "lnum" on;
    word-break: keep-all;
    color: #000000;
    @media screen and (max-width: 960px) {
        font-size: 16px;
    }
`;
const Hash = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    margin: 7px 0 26px 17px;
    font-feature-settings: "tnum" on, "lnum" on;

    color: #8b95a1;
    span::before {
        content: "#";
    }
    @media screen and (max-width: 960px) {
        font-size: 12px;
    }
`;
const Button = styled.div`
    width: 90%;
    height: 38px;
    margin: 0px auto;

    text-align: center;
    line-height: 38px;
    background: #f2f4f6;
    border-radius: 6px;
`;
export type Template = {
    title: string;
    hashtag: string;
    subject: string;
    subjectbg: any;
};
const ProjectTemplate: React.FC<Template> = ({
    subject,
    title,
    hashtag,
    subjectbg
}) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <>
            <TemplateWrap>
                <Flex>
                    <Subject subjectbg={subjectbg}>{subject}</Subject>
                    <div
                        onClick={() => setChecked(!checked)}
                        className={checked ? "checked" : "unchecked"}
                    ></div>
                </Flex>
                <Contents>
                    <Title>
                        <p>{title}</p>
                    </Title>
                    <Hash>
                        <span>{hashtag}</span>
                    </Hash>
                </Contents>
                <Button>지금참여하기</Button>
            </TemplateWrap>
        </>
    );
};

export default ProjectTemplate;
