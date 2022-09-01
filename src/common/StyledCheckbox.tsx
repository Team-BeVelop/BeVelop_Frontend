import styled from "styled-components";

export type Checkbox = {
  text: string;
};

const StyledCheckbox: React.FC<Checkbox> = ({ text }) => {
  return (
    <Container>
      <Input type="checkbox" id={text} name={text} />
      <Label htmlFor={text}>
        <p>{text}</p>
      </Label>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  margin-bottom: 28px;
  &:nth-child(1) {
    margin-bottom: 28px;
  }
`;

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #6b7684;

  &:before {
    content: "";
    background-color: white;
    width: 1.4rem;
    height: 1.4rem;
    border: 1.4px solid #dadee2;
    border-radius: 0.35rem;
  }
  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    border: 1.4px solid #dadee2;
    border-radius: 0.35rem;
    border-color: transparent;
    background-image: url("/img/icon_check.png");
    background-size: 60% 50%;
    background-position: 40% 40%;
    background-repeat: no-repeat;
    background-color: #7a5df5;
  }

  p {
    margin-left: 0.45rem;
  }
  margin-right: 26px;
`;

const Input = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  &:checked + ${Label} {
    :after {
      opacity: 1;
    }
  }
`;

// const Input = styled.input`
//   appearance: none;
//   width: 1.4rem;
//   height: 1.4rem;
//   border: 1.4px solid #dadee2;
//   border-radius: 0.35rem;
//   &:checked {
//     border-color: transparent;
//     background-image: url("/img/icon_check.png");
//     background-size: 60% 50%;
//     background-position: 40% 40%;
//     background-repeat: no-repeat;
//     background-color: #7a5df5;
//   }
// `;

// const Label = styled.label`
//   display: flex;
//   align-items: center;
//   user-select: none;

//   p {
//     margin: 0 0.25rem;
//   }
// `;

export default StyledCheckbox;
