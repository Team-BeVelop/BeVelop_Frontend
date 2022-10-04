import styled from "styled-components";
import StyledCheckbox from "../../common/StyledCheckbox";
import {
  backendFieldData,
  designFieldData,
  frontendFieldData,
} from "../../Data/FieldData";

const PostNewStackModal = () => {
  return (
    <>
      <Wrap>
        <Box>
          <div>디자인</div>
          <div>
            {designFieldData.map((v) => (
              <StyledCheckbox key={v} text={v} />
            ))}
          </div>
          <div>프론트</div>
          <div>
            {frontendFieldData.map((v) => (
              <StyledCheckbox key={v} text={v} />
            ))}
          </div>
          <div>백</div>
          <div>
            {backendFieldData.map((v) => (
              <StyledCheckbox key={v} text={v} />
            ))}
          </div>
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
  padding: 30px 30px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 6px;
`;

export default PostNewStackModal;
