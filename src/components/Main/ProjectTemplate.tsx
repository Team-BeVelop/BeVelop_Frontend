import React, { useRef, useState } from "react";
import styled from "styled-components";

const TemplateWrap = styled.div`
    width: 23.76%;

    height: 12.2rem;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 6px;
    margin-bottom: 34px;
    padding: 0 1.7rem;
    & {
        margin-right: 1.65%;
    }
    &:nth-child(4n) {
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
        margin-top: 2.4rem;
        width: 14px;
        height: 18px;
        background-image: url("https://team-bevelop.github.io/BeVelop_Frontend/img/Vector2.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
    div.checked {
        width: 14px;
        height: 18px;
        margin-top: 2.4rem;
        background-image: url("https://team-bevelop.github.io/BeVelop_Frontend/img/Vector.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

const Subject = styled.div<{ subjectbg: any }>`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2rem;
    /* identical to box height */

    font-feature-settings: "tnum" on, "lnum" on;
    height: 2rem;
    color: #ffffff;
    padding: 0 0.8rem;
    margin-top: 2.4rem;
    background: ${props =>
        props.subjectbg == "스타트업" ? "#FF26A8" : "#7A5DF5"};
    border-radius: 4px;
    @media screen and (max-width: 960px) {
        font-size: 12px;
    }
`;
const Title = styled.div`
    display: inline-block;
    width: 100%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-feature-settings: "tnum" on, "lnum" on;

    color: #000000;
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    @media screen and (max-width: 960px) {
        font-size: 16px;
    }
`;
const Hash = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    /* identical to box height */
    margin: 1.4rem 0 0.5rem 0;
    font-feature-settings: "tnum" on, "lnum" on;

    color: #8b95a1;
    span::before {
        content: "#";
    }
    @media screen and (max-width: 960px) {
        font-size: 12px;
    }
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

                <Hash>
                    <span>{hashtag}</span>
                </Hash>
                <Title>
                    <p>{title}</p>
                </Title>
            </TemplateWrap>
        </>
    );
};

export default ProjectTemplate;
