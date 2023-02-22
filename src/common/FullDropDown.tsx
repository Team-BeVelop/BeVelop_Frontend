import { useEffect, useState } from "react";
import styled from "styled-components";

export type StyleType = {
    show?: boolean;
    type?: string;
};

const FullDropDown = ({ data, current, setCurrent }: any) => {
    const [showOptions, setShowOptions] = useState(false);
    const handleSelect = (e: any) => {
        const { innerText } = e.target;
        const value = e.target.getAttribute("value");
        setCurrent({
            value: value,
            name: innerText
        });
    };

    useEffect(
        () =>
            setCurrent({
                value: current.value,
                name: current.name
            }),
        []
    );
    return (
        <>
            <Container onClick={() => setShowOptions(prev => !prev)}>
                <Label>{current.name}</Label>
                <List show={showOptions}>
                    {data.map((v: any) => (
                        <Item
                            key={v.value}
                            value={v.value}
                            onClick={handleSelect}
                        >
                            {v.name}
                        </Item>
                    ))}
                </List>
            </Container>
        </>
    );
};

const Container = styled.div<StyleType>`
    display: flex;
    overflow: hidden;
    z-index: 1;
    border-radius: 6px;
    align-self: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &::before {
        content: "⌵";
        position: absolute;
        top: 10px;
        right: 16px;
        color: #404a5c;
        font-size: 20px;
    }
    background-color: #fff;
    border: 1px solid #dadee2;
    color: #000;
    width: 100%;
    height: 48px;
`;

const Label = styled.div`
    display: flex;
    height: 100%;
    border-radius: 6px;
    align-items: center;
    text-align: center;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    padding-left: 16px;
    padding-right: 46px;
    background-color: #fff;
    color: #000;
`;

const List = styled.ul<StyleType>`
    position: absolute;
    list-style: none;
    left: 0;
    height: 120px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 8px;
    max-height: ${props => (props.show ? "none" : "0")};
    display: ${props => (props.show ? "block" : "none")};
    box-sizing: border-box;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #000000;
    background-color: #fff;
    color: #000;
    border: 1px solid #dadee2;
    top: 48px;
`;

const Item = styled.li<StyleType>`
    transition: background-color 0.2s ease-in;
    &:hover {
        background-color: #e1e1eb;
    }
    background-color: #fff;
    padding: 1em 1.8em;
`;

export default FullDropDown;
