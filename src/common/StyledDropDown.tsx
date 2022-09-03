import { useEffect, useState } from "react";
import styled from "styled-components";

export type StyleType = {
  show?: boolean;
  type?: string;
  width?: number;
};

export type DropDownType = {
  type: string;
  width?: number;
  label?: string;
  data: any;
  current: any;
  setCurrent: any;
};

const StyledDropDown: React.FC<DropDownType> = ({
  type,
  width,
  label,
  data,
  current,
  setCurrent,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleSelect = (e: any) => setCurrent(e.target.getAttribute("value"));

  useEffect(() => label && setCurrent(label), []);

  return (
    <>
      <Container
        type={type}
        width={width}
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <Label type={type}>{current}</Label>
        <List type={type} show={showOptions}>
          {data.map((v: string) => (
            <Item type={type} key={v} value={v} onClick={handleSelect}>
              {v}
            </Item>
          ))}
        </List>
      </Container>
    </>
  );
};

const Container = styled.div<StyleType>`
  z-index: 1;
  position: relative;
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
    top: ${(props) => (props.type === "mini" ? "5px" : "10px")};
    right: 1em;
    color: #000;
    font-size: 20px;
  }
  background-color: ${(props) => (props.type === "mini" ? "#f2f4f6" : "#fff")};
  border: ${(props) => (props.type === "mini" ? "none" : "1px solid #dadee2")};
  color: ${(props) => (props.type === "mini" ? "#404a5c" : "#000")};
  width: ${(props) => (props.width ? props.width + "px" : "50%")};
  height: ${(props) => (props.type === "mini" ? "38px" : "48px")};
  @media screen and (max-width: 480px) {
    width: ${(props) => (props.width ? props.width + "px" : "100%")};
  }
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
  background-color: ${(props) => (props.type === "mini" ? "#f2f4f6" : "#fff")};
  padding-left: ${(props) => (props.type === "mini" ? "1em" : "1.8em")};
  color: ${(props) => (props.type === "mini" ? "#404A5C" : "#000")};
`;

const List = styled.ul<StyleType>`
  position: absolute;
  list-style: none;
  left: 0;
  height: 120px;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  border-radius: 8px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  display: ${(props) => (props.show ? "block" : "none")};
  box-sizing: border-box;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #000000;
  background-color: ${(props) => (props.type === "mini" ? "#f2f4f6" : "#fff")};
  color: ${(props) => (props.type === "mini" ? "#404A5C" : "#000")};
  border: ${(props) => (props.type === "mini" ? "none" : "1px solid #dadee2")};
  top: ${(props) => (props.type === "mini" ? "38px" : "48px")};
`;

const Item = styled.li<StyleType>`
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #e1e1eb;
  }
  background-color: ${(props) => (props.type === "mini" ? "#f2f4f6" : "#fff")};
  padding: ${(props) => (props.type === "mini" ? "1em" : "1em 1.8em")};
`;

export default StyledDropDown;
