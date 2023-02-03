import { useEffect } from "react";
import * as m from "./style/modalStyle";
const Modal = ({
    Close,
    Mail,
    Text,
    width,
    height,
    bgColor,
    lineHeight,
    bottom,
    right,
    translate,
    size,
    align,
    color,
    weight,
    load
}: any) => {
    useEffect(() => {
        document.body.style.cssText = `
        overflow:hidden;
        `;
        window.scrollTo(0, document.body.scrollHeight);
        return () => {
            document.body.style.cssText = "";
        };
    }, []);
    return (
        <m.ModalWrap
            right={right}
            translate={translate}
            bottom={bottom}
            width={width}
            height={height}
            backgroundColor={bgColor}
        >
            <m.ModalArea
                color={color}
                weight={weight}
                align={align}
                size={size}
                lineHeight={lineHeight}
            >
                <p className={load}>{Text}</p>
                {/* <img onClick={Close} src={close} alt="닫기" /> */}
                {/* <m.CloseIcon onClick={Close} /> */}
            </m.ModalArea>
        </m.ModalWrap>
    );
};

export default Modal;
