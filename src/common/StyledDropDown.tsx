import { useEffect, useState } from "react";
import styled from "styled-components";

export type StyleType = {
    show?: boolean;
    type?: string;
    width?: number;
    bg?: string;
};

const StyledDropDown = ({ type, width, data, current, setCurrent }: any) => {
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
                name: current.name,
                bg: current.bg,
                color: current.color
            }),
        []
    );
    return (
        <>
            <Container
                type={type}
                width={width}
                color={current.color}
                onClick={() => setShowOptions(prev => !prev)}
            >
                <Label type={type} bg={current.bg} color={current.color}>
                    {current.name}
                </Label>
                <List type={type} show={showOptions}>
                    {data.map((v: any) => (
                        <Item
                            type={type}
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
        top: ${props => (props.type === "mini" ? "5px" : "10px")};
        right: 16px;
        color: ${props => props.color || " #fff"};
        font-size: 20px;
    }
    background-color: ${props => (props.type === "mini" ? "#f2f4f6" : "#fff")};
    border: ${props => (props.type === "mini" ? "none" : "1px solid #dadee2")};
    color: ${props => (props.type === "mini" ? "#404a5c" : "#000")};
    /* width: ${props => (props.width ? props.width + "px" : "50%")}; */
    height: ${props => (props.type === "mini" ? "38px" : "48px")};
    /* @media screen and (max-width: 480px) {
        width: ${props => (props.width ? props.width + "px" : "100%")};
    } */
`;

const Label = styled.div<StyleType>`
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
    /* background-color: ${props =>
        props.type === "mini" ? "#f2f4f6" : "#fff"}; */
    padding-left: ${props => (props.type === "mini" ? "16px" : "16px")};
    /* color: ${props => (props.type === "mini" ? "#404A5C" : "#000")}; */
    padding-right: 46px;
    background-color: ${props => props.bg || " #1F1F1F"};
    color: ${props => props.color || " #fff"};
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
    background-color: ${props => (props.type === "mini" ? "#f2f4f6" : "#fff")};
    color: ${props => (props.type === "mini" ? "#404A5C" : "#000")};
    border: ${props => (props.type === "mini" ? "none" : "1px solid #dadee2")};
    z-index: 100;
    top: ${props => (props.type === "mini" ? "38px" : "48px")};
`;

const Item = styled.li<StyleType>`
    transition: background-color 0.2s ease-in;
    &:hover {
        background-color: #e1e1eb;
    }
    background-color: ${props => (props.type === "mini" ? "#f2f4f6" : "#fff")};
    padding: ${props => (props.type === "mini" ? "1em" : "1em 1.8em")};
`;

export default StyledDropDown;
