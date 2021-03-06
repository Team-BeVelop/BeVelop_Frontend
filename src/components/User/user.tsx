import React, { useState } from "react";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";

const UserInfoWrap = styled.aside`
    transform: translate(0px,-50px);
    @media screen and (max-width:480px){
        display: table;
        margin: 0 auto;
        
    }
`
const UserImg = styled.div<{bgImg : any}>`
    width: 116px;
    height: 116px;
    background: #F2F4F6;
    border: 3px solid #FFFFFF;
    border-radius: 50%;
    background-image: ${(props) => props.bgImg == 'filed' ? "url('https://team-bevelop.github.io/BeVelop_Frontend/img/Ellipse.png')" : ""};
    background-size: cover;
    margin-bottom: 20px;
`
const Plus = styled(IoIosAddCircleOutline)`
    font-size: 30px;
    border-radius: 50%;
    color: #fff;
    background-color: #000;
`
const NickName = styled.div`
    
    font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 26px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;

color: #000000;
`
const StatusBox = styled.ul`
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
    width: 320px;
    height: 97px;
    background: #FFFFFF;
border: 1px solid #F2F4F6;
border-radius: 6px;
align-items: center;
    li p {
        font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 40px;
text-align: center;
font-feature-settings: 'tnum' on, 'lnum' on;
color: #000000;
    }
    li p+p{
        font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #8B95A1;
    }
`
const Button = styled.div`
    margin-top: 20px;
    width: 320px;
    height: 48px;
    background: #F2F4F6;
border-radius: 6px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 48px;
/* identical to box height */
text-align: center;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #404A5C;

`
const Profile = styled.div`
    margin: 34px 0 18px 0;
    p{
        
        font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;

color: #000000;
    }

`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
`
const Filter =styled.div`
    display: flex;
    justify-content: space-around;
    width: 156px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #F2F4F6;
    border-radius: 6px;
    align-items: center;
    text-align: center;
    p{
        font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-align: center;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #404A5C;
    }
`
const Portfolio = styled.div`
    margin: 34px 0 18px 0;
    font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;

color: #000000;
`
const Skill = styled.div`
    font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;

color: #000000;
`
const Box = styled.div`
width: 320px;
height: 48px;
    background: #FFFFFF;
border: 1px solid #F2F4F6;
border-radius: 6px;
margin-bottom: 12px;
margin-top: 18px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 48px;
padding-left: 20px;
/* identical to box height */

font-feature-settings: 'tnum' on, 'lnum' on;

color: #404A5C;
`
const SkillBoxWrap = styled.div`
margin-top: 22px;
    width: 320px;
    display: flex;
    justify-content: space-around;
`
const SkillBox = styled.div`

    width: 30%;
height: 37px;
background: #F2F4F6;
border-radius: 6px;
`

const User = () => {
    const [fill, setFill] = useState<Boolean>(false);
    return(
        <UserInfoWrap>
            <UserImg bgImg = {fill ? "filed" : ""}>
                <Plus onClick={()=>setFill(true)} />
            </UserImg>
            <NickName>
                ??????????????????
            </NickName>
            <StatusBox>
                    <li>
                        <p>8</p>
                        <p>????????????</p>
                    </li>
                    <li>
                        <p>2</p>
                        <p>?????????</p>
                    </li>
                    <li>
                        <p>23</p>
                        <p>????????????</p>
                    </li>
                    <li>
                        <p>11</p>
                        <p>?????????</p>
                    </li>
            </StatusBox>
            <Button>????????? ????????????</Button>
            <Profile>
                <p>?????????</p>
                <Flex>
                <Filter><p>??????</p><img src="https://team-bevelop.github.io/BeVelop_Frontend/img/down.png"/></Filter>
                <Filter><p>????????????</p><img src="https://team-bevelop.github.io/BeVelop_Frontend/img/down.png"/></Filter>
                </Flex>
            </Profile>
            <Portfolio>
                <p>???????????????</p>
                <Box>??????????????? ??????(PDF ??????)</Box>
                <Box>??????/URL</Box>
            </Portfolio>
            <Skill>
            <p>????????????</p>
            <SkillBoxWrap>
                <SkillBox>

                </SkillBox>
                <SkillBox>

                </SkillBox>
                <SkillBox>

                </SkillBox>
            </SkillBoxWrap>
            </Skill>
        </UserInfoWrap>
    )
}

export default User;