import styled from "styled-components";

const StyledCheckbox = ({ object, mobwidth, list, setList }: any) => {
    const checkedHandler = (checked: boolean, id: any) => {
        if (checked) {
            setList([...list, id]);
        } else {
            setList(list.filter((e: any) => e !== id));
        }
    };

    return (
        <Container width={mobwidth}>
            <Input
                type="checkbox"
                id={object.value}
                name={object.name}
                onChange={e => checkedHandler(e.target.checked, e.target.id)}
            />
            <Label htmlFor={object.value}>
                <p>{object.name}</p>
            </Label>
        </Container>
    );
};

const Container = styled.div<{ width: any }>`
    display: inline-block;
    margin-bottom: 28px;
    &:nth-child(1) {
        margin-bottom: 28px;
        @media screen and (max-width: 480px) {
            margin-bottom: 20px;
        }
    }
    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
        width: ${props => props.width || "auto"};
    }
`;

const Label = styled.label`
    cursor: pointer;
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
    margin-right: 20px;
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

export default StyledCheckbox;
