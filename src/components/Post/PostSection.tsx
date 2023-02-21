import styled from "styled-components";
import StyledDropDown from "../../common/StyledDropDown";
import Dummy from "../../Data/PostDummy";
import PostTemplate from "./PostTemplate";
import { FieldData } from "../../Data/FieldData";

export type PostSectionType = {
    division: any;
    setDivision: any;
};

const PostSection: React.FC<PostSectionType> = ({ division, setDivision }) => {
    const dummy = Dummy;
    return (
        <>
            <DropDownWrap>
                <StyledDropDown
                    type="mini"
                    width={150}
                    label="구분"
                    data={FieldData}
                    current={division}
                    setCurrent={setDivision}
                />
            </DropDownWrap>
            <Wrap>
                {dummy.map((item, index) => (
                    <PostTemplate
                        key={index}
                        title={item.title}
                        views={item.views}
                        detail={item.detail}
                        tag={item.tag}
                        img={item.img}
                    />
                ))}
            </Wrap>
        </>
    );
};

const Wrap = styled.section`
    overflow: hidden;
    margin-top: 28px;
    @media screen and (max-width: 480px) {
        margin: 28px 20px 0 20px;
    }
`;

const DropDownWrap = styled.div`
    margin-top: 28px;
    @media screen and (max-width: 480px) {
        margin-left: 20px;
        margin-top: 18px;
    }
`;

export default PostSection;
