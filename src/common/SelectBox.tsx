import { useState } from "react";
import * as s from "./style/SelectBoxStyle";

type SelectBoxProps = {
    placeholder: string;
    data: string[];
    setState: React.Dispatch<React.SetStateAction<string>>;
};

const SelectBox: React.FC<SelectBoxProps> = ({
    placeholder,
    data,
    setState
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<string>("");

    function click() {
        setIsOpen(!isOpen);
    }

    return (
        <s.SelectBoxWrap className={isOpen ? "open" : "close"}>
            <s.SelectBoxArea>
                <s.SelectBoxText onClick={click}>
                    <s.SelectBoxPlaceholder>
                        {select === "" ? placeholder : select}
                    </s.SelectBoxPlaceholder>
                    <s.SelectBoxArow></s.SelectBoxArow>
                </s.SelectBoxText>
                <s.SelectBoxUl className={isOpen ? "open" : "close"}>
                    {data.map((item, index) => (
                        <s.SelectBoxLi
                            onClick={() => {
                                setSelect(item);
                                setState(item);
                                setIsOpen(!isOpen);
                            }}
                            className="Title3_500"
                            key={index}
                        >
                            {item}
                        </s.SelectBoxLi>
                    ))}
                </s.SelectBoxUl>
            </s.SelectBoxArea>
        </s.SelectBoxWrap>
    );
};

export default SelectBox;
