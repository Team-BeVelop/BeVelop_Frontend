import { useState } from "react";
import styled, { css } from "styled-components";

export type ShowType = {
  show: boolean;
};

export type DropDownType = {
  label: string;
  data: any;
  current: any;
  setCurrent: any;
};

const StyledDropDown: React.FC<DropDownType> = ({
  label,
  data,
  current,
  setCurrent,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleSelect = (e: any) => setCurrent(e.target.getAttribute("value"));
  return (
    <>
      <Container
        className="mini"
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <Label className="mini">{current}</Label>
        <List show={showOptions}>
          {data.map((v: string) => (
            <Item key={v} value={v} onClick={handleSelect}>
              {v}
            </Item>
          ))}
        </List>
      </Container>
    </>
  );
};

const Container = styled.div`
  z-index: 1;
  position: relative;
  width: 50%;
  height: 48px;
  border: 1px solid #dadee2;
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
    right: 1em;
    color: #000;
    font-size: 20px;
  }
  .mini {
    background-color: #f2f4f6;
    border: none;
    color: #404a5c;
  }
`;

const Label = styled.div`
  display: flex;
  height: 100%;
  border-radius: 6px;
  align-items: center;
  background: #ffffff;
  text-align: center;
  padding-left: 1.8em;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #000000;
  .mini {
    background-color: #f2f4f6;
    padding-left: 1em;
  }
`;

const List = styled.ul<ShowType>`
  position: absolute;
  list-style: none;
  top: 48px;
  left: 0;
  height: 120px;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  border-radius: 8px;
  border: 1px solid #dadee2;
  background: #ffffff;
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
`;

const Item = styled.li`
  padding: 1em 1.8em;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #e1e1eb;
  }
`;

export default StyledDropDown;
