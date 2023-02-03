import React, { useCallback, useMemo, useState } from "react";
import * as u from "./style/UserInfoInput";
import { useDispatch } from "react-redux";
import { UserInfo } from "../../modules/user";
import SelectBox from "../../common/SelectBox";
import { ENROLLMENT_SLEEPTIME, SKILL } from "../../Data/Filter";

type User = {
    nickName: string;
    portFolio: string;
    link: string;
    kakao: string;
    email: string;
};

const User_first = () => {
    const [fill, setFill] = useState<boolean>(false);
    const [Position, setPosition] = useState<string>("직무");
    const [Interest, setInterest] = useState<string>("관심분야");
    const [Stack, setStack] = useState<any>([]);
    const [formInput, setFormInput] = useState<User>({
        nickName: "",
        portFolio: "",
        link: "",
        kakao: "",
        email: ""
    });
    const [userIntro, setUserIntro] = useState<string>("");
    const [checked, setChecked] = useState<boolean[]>([]);
    useMemo(() => {
        setChecked(SKILL.map(() => false));
    }, []);
    const handleFormInput = (e: any) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    };
    const handleUserIntro = (e: any) => {
        setUserIntro(e.target.value);
    };
    const dispatch = useDispatch<any>();

    const Complete = () => {
        dispatch(
            UserInfo(
                formInput.nickName,
                formInput.portFolio,
                formInput.link,
                formInput.email,
                formInput.kakao,
                Position,
                Interest,
                Stack,
                userIntro
            )
        );
    };

    return (
        <u.UserInfoWrap>
            <u.UserImg bgImg={fill ? "filed" : ""}>
                <u.Plus onClick={() => setFill(true)} />
            </u.UserImg>
            <u.NickName>
                <p>닉네임</p>
                <input
                    type={"text"}
                    value={formInput.nickName}
                    onChange={handleFormInput}
                    name="nickName"
                />
            </u.NickName>
            <u.Intro>
                <p>한줄 소개</p>
                <textarea
                    onChange={handleUserIntro}
                    value={userIntro}
                ></textarea>
            </u.Intro>
            <u.Profile>
                <p>프로필</p>
                {/* <u.Flex>
                    <u.Filter onClick={() => setOpen(!open)}>
                        <p>{Position}</p>
                        <img src="https://team-bevelop.github.io/BeVelop_Frontend/img/down.png" />
                    </u.Filter>

                    <u.Filter onClick={() => setOpen2(!open2)}>
                        <p>{Interest}</p>
                        <img src="https://team-bevelop.github.io/BeVelop_Frontend/img/down.png" />
                    </u.Filter>
                </u.Flex> */}
                <u.FilterArea>
                    <SelectBox
                        setState={setPosition}
                        placeholder="직무"
                        data={ENROLLMENT_SLEEPTIME}
                    />
                    <SelectBox
                        setState={setInterest}
                        placeholder="관심분야"
                        data={ENROLLMENT_SLEEPTIME}
                    />
                </u.FilterArea>
            </u.Profile>
            <u.Portfolio>
                <p>포트폴리오</p>
                <u.Box
                    type={"text"}
                    placeholder="포트폴리오 첨부(PDF 권장)"
                    value={formInput.portFolio}
                    onChange={handleFormInput}
                    name="portFolio"
                ></u.Box>
                <u.Box
                    type={"text"}
                    placeholder="링크/URL"
                    value={formInput.link}
                    onChange={handleFormInput}
                    name="link"
                ></u.Box>
            </u.Portfolio>
            <u.Skill>
                <p>기술스택</p>
                <u.SkillBoxWrap>
                    <u.SkillPlus></u.SkillPlus>
                    <u.SkillBox>
                        {SKILL.map((item, index) => {
                            return (
                                <u.SkillList bgColor={item.color}>
                                    {item.name}
                                </u.SkillList>
                            );
                        })}
                    </u.SkillBox>
                </u.SkillBoxWrap>
            </u.Skill>
            {/* <u.Contact>
                <p>연락방식</p>
                <p>제안자, 지원자 모두 수락할 시에만 연락처가 노출됩니다.</p>
                <u.Box
                    type={"text"}
                    placeholder="이메일"
                    value={formInput.email}
                    onChange={handleFormInput}
                    name="email"
                ></u.Box>
                <u.Box
                    type={"text"}
                    placeholder="오픈카카오톡링크"
                    value={formInput.kakao}
                    onChange={handleFormInput}
                    name="kakao"
                ></u.Box>
            </u.Contact> */}
            <u.Button onClick={Complete}>입력완료</u.Button>
        </u.UserInfoWrap>
    );
};

export default User_first;
