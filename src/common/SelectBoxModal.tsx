import React, { useEffect, useMemo, useState } from "react";
import * as s from "./style/SelectBoxModalStyle";
import { SKILL } from "../Data/Filter";
import SkillLi from "./SkillList";

const SkillSelectBox = ({
    OnClick,
    skill,
    setSkill
}: {
    OnClick: any;
    skill: any;
    setSkill: any;
}) => {
    function click() {
        OnClick();
    }
    const [checked, setChecked] = useState<boolean[]>([]);
    useMemo(() => {
        setChecked(SKILL.map(() => false));
    }, []);

    useMemo(() => {
        setSkill(
            checked
                .map((item, index) =>
                    item
                        ? {
                              name: SKILL[index].name,
                              color: SKILL[index].color
                          }
                        : null
                )
                .filter(item => item)
        );
    }, [checked]);

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
        <s.SelectBoxWrap>
            <s.SelectUl>
                <s.SelectBoxArea>
                    <ul>
                        {SKILL.map((index: any, key: any) => (
                            <SkillLi
                                click={() => {
                                    setChecked(
                                        checked.map((item, i) =>
                                            i === key ? !item : item
                                        )
                                    );
                                }}
                                index={index.name}
                            />
                        ))}
                    </ul>
                </s.SelectBoxArea>
                <s.Button onClick={click}>선택완료</s.Button>
            </s.SelectUl>
        </s.SelectBoxWrap>
    );
};

export default SkillSelectBox;
