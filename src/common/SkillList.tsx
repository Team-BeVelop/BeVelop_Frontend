import { useEffect, useState } from "react";
import * as r from "./style/SkillList";

const SkillLi = ({ index, click }: any) => {
    const [isCheck, setIsCheck] = useState<boolean>(false);
    function Click(e: any) {
        click();
        setIsCheck(!isCheck);
    }

    return (
        <r.LI onClick={Click} className={isCheck ? "checked" : ""}>
            {index}
        </r.LI>
    );
};

export default SkillLi;
