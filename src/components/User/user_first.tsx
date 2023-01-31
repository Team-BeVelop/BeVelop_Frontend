import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { UserInfo } from "../../modules/user";


const UserInfoWrap = styled.aside`
    display: table;
        margin: 0 auto;
    transform: translate(0px,-80px);
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
    p{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        font-feature-settings: 'tnum' on, 'lnum' on;

        color: #000000;
        margin-bottom: 18px;
    }
    input{
        width: 436px;
        height: 48px;
        background: #FFFFFF;
        border: 1px solid #DADEE2;
        border-radius: 6px;
    }
    input:focus{
        border: 1px solid #7A5DF5;
    }
`
const Button = styled.div`
    margin-top: 20px;
    width: 436px;
height: 48px;
    
background: #7A5DF5;
border-radius: 6px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 48px;
/* identical to box height */
text-align: center;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #FFFFFF;

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
    ul.none{
        display: none;
    }
    ul {
        li{
            width: 212px;
            height: 48px;
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 48px;
            /* identical to box height */
            text-align: center;
            font-feature-settings: 'tnum' on, 'lnum' on;
            color: #8B95A1;
            border: 1px solid #F2F4F6;
        }
    }
`
const Filter =styled.div`
    display: flex;
    justify-content: space-around;
    width: 212px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #F2F4F6;
    border-radius: 6px;
    align-items: center;
    text-align: center;
    margin-top: 19px;
    p{
        font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-align: center;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #8B95A1;

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
const Box = styled.input`
display: block;
width: 436px;
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

color: #8B95A1;
:focus{
        border: 1px solid #7A5DF5;
        
    }
`
const SkillBoxWrap = styled.div`
margin-top: 22px;
    width: 436px;
    display: inline-block;
`
const SkillBox = styled.div`
    width: 72px;
    height: 37px;
    background: #F2F4F6;
    border-radius: 6px;
`

const SkillList = styled.div`
    width: 350px;
    height: 37px;
    border: 1px dotted #ccc;
    border-radius: 6px;
    display: flex;
    justify-content: space-around;
    p{
        display: inline-block;
        color : #000;
        padding: 0 10px;
        line-height: 37px;
        border: 1px solid #000;
        border-radius: 10px;
    }
`

const Contact = styled.div`
    margin-top: 34px;
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
    p:nth-child(2){
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height */

        font-feature-settings: 'tnum' on, 'lnum' on;

        color: #8B95A1;
    }
`

type User = {
    nickName : string,
    portFolio : string,
    link : string,
    kakao : string,
    email : string,
}

const User_first = () => {
    const [fill, setFill] = useState<Boolean>(false);
    const [open, setOpen] = useState<Boolean>(false);
    const [open2, setOpen2] = useState<Boolean>(false);
    const [Position, setPosition] = useState<string>('직무');
    const [Interest, setInterest] = useState<string>('관심분야');
    const [Stack, setStack] = useState<any>([
        
    ]);
    const [formInput, setFormInput] = useState<User>({
        nickName: '',
        portFolio : '',
        link : '',
        kakao : '',
        email : '',
    });

    const handleFormInput = (e : any) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    };

    const onSelectItem = useCallback((e : any) => {
        setPosition( e.target.innerHTML);
        setOpen(false);
    }, []);

    const onSelectItem2 = useCallback((e : any) => {
        setInterest( e.target.innerHTML);
        setOpen2(false);
    }, []);

    const onSelectStack = useCallback((e: any)=>{
        const stack = window.prompt('스택작성');
        Stack.push(stack);
        console.log(Stack);
    },[]);

    const dispatch = useDispatch<any>();

    const Complete = () =>{
        dispatch(UserInfo(formInput.nickName, formInput.portFolio, formInput.link, formInput.email, formInput.kakao, Position, Interest,Stack));
    }

    return(
        <UserInfoWrap>
            <UserImg bgImg = {fill ? "filed" : ""}>
                <Plus onClick={()=>setFill(true)} />
            </UserImg>
            <NickName>
                <p>닉네임</p>
                <input type={'text'} value={formInput.nickName} onChange={handleFormInput} name="nickName"/>
            </NickName>
            
            <Profile>
                <p>프로필</p>
                <Flex>
                <Filter onClick={() => setOpen(!open)}><p>{Position}</p><img src="https://team-bevelop.github.io/BeVelop_Frontend/img/down.png"/>
                </Filter>
                
                <Filter onClick={() => setOpen2(!open2)}><p>{Interest}</p><img src="https://team-bevelop.github.io/BeVelop_Frontend/img/down.png"/></Filter>
                </Flex>
                <Flex>
                        <ul className={open ? "" : "none"}>
                            <li  onClick={onSelectItem}>FE 개발자</li>
                            <li   onClick={onSelectItem}>BE 개발자</li>
                            <li  onClick={onSelectItem}>서버 개발자</li>
                            <li   onClick={onSelectItem}>AOS 개발자</li>
                        </ul>
                </Flex>
                <Flex>
                        <ul className={open2 ? "" : "none"}>
                            <li  onClick={onSelectItem2}>관심분야1</li>
                            <li   onClick={onSelectItem2}>관심분야2</li>
                            <li  onClick={onSelectItem2}>관심분야3</li>
                            <li   onClick={onSelectItem2}>관심분야4</li>
                        </ul>
                </Flex>
            </Profile>
            <Portfolio>
                <p>포트폴리오</p>
                <Box type={'text'} placeholder="포트폴리오 첨부(PDF 권장)" value={formInput.portFolio} onChange={handleFormInput} name="portFolio"></Box>
                <Box type={'text'} placeholder="링크/URL" value={formInput.link} onChange={handleFormInput} name="link"></Box>
            </Portfolio>
            <Skill>
            <p>기술스택</p>
            <SkillBoxWrap>
                <Flex>
                <SkillBox onClick={onSelectStack}>
                </SkillBox>
                <SkillList>
                    {Stack.map((index : any) =>
                        <p>{index}</p>
                    )}
                </SkillList>
                </Flex>
            </SkillBoxWrap>
            </Skill>
            <Contact>
                <p>연락방식</p>
                <p>제안자, 지원자 모두 수락할 시에만 연락처가 노출됩니다.</p>
                <Box type={'text'} placeholder="이메일" value={formInput.email} onChange={handleFormInput} name="email"></Box>
                <Box type={'text'} placeholder="오픈카카오톡링크" value={formInput.kakao} onChange={handleFormInput} name="kakao"></Box>
            </Contact>
            <Button onClick={Complete}>입력완료</Button>
        </UserInfoWrap>
    )
}

export default User_first;