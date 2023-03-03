import { useState } from "react";
import styled from "styled-components";
import StyledCheckbox from "../../common/StyledCheckbox";
import {
    backendFieldData,
    designFieldData,
    frontendFieldData
} from "../../Data/FieldData";

const PostNewStackModal = ({
    showModal,
    setShowModal,
    stack,
    setStack
}: any) => {
    // 창닫기
    const closeModal = () => setShowModal(false);
    // 취소버튼
    const resetStackList = () => {
        setStack([]);
        closeModal();
    };
    console.log(stack);

    return (
        <>
            <Wrap>
                <Box>
                    <div className="title">디자인</div>
                    <div className="checkBoxArea">
                        {designFieldData.map(v => (
                            <StyledCheckbox
                                key={v.value}
                                object={v}
                                mobwidth={"100%"}
                                list={stack}
                                setList={setStack}
                            />
                        ))}
                    </div>
                    <div className="title">프론트</div>
                    <div className="checkBoxArea">
                        {frontendFieldData.map(v => (
                            <StyledCheckbox
                                key={v.value}
                                object={v}
                                mobwidth={"100%"}
                                list={stack}
                                setList={setStack}
                            />
                        ))}
                    </div>
                    <div className="title">백</div>
                    <div className="checkBoxArea">
                        {backendFieldData.map(v => (
                            <StyledCheckbox
                                key={v.value}
                                object={v}
                                mobwidth={"100%"}
                                list={stack}
                                setList={setStack}
                            />
                        ))}
                    </div>
                    <ButtonBox>
                        <button className="leftBtn" onClick={resetStackList}>
                            취소
                        </button>
                        <button className="rightBtn" onClick={closeModal}>
                            선택 완료
                        </button>
                    </ButtonBox>
                </Box>
            </Wrap>
        </>
    );
};

const Wrap = styled.div`
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 30px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 6px;
    overflow-y: scroll;
    height: 484px;
    .title {
        margin-bottom: 20px;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #404a5c;
    }
    .checkBoxArea {
        margin-bottom: 14px;
    }
    @media screen and (max-width: 480px) {
        top: 50%;
        left: 50%;
        padding: 20px;
        transform: translate(-50%, -50%);
    }
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
    .leftBtn {
        background: #f2f4f6;
        border-radius: 6px;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #505967;
        width: 155px;
        height: 48px;
        margin-right: 10px;
    }
    .rightBtn {
        background: #7a5df5;
        border-radius: 6px;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        font-feature-settings: "tnum" on, "lnum" on;
        color: #ffffff;
        width: 155px;
        height: 48px;
    }
`;

export default PostNewStackModal;
