import { useEffect, useState } from "react";
import * as r from "./style/SkillList";

const SkillLi = ({ index, click, isCheck, setIsCheck }: any) => {
    function Click(e: any) {
        click();
        setIsCheck(
            isCheck.map((item: any, i: any) => (i === index ? !item : item))
        );
    }

    return (
        <r.LI onClick={Click} className={isCheck ? "checked" : ""}>
            {index}
        </r.LI>
    );
};

export default SkillLi;
