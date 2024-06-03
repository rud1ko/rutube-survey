import {FC, useState} from "react";
import {GradeTypes} from "shared/types";

export const Grade: FC<GradeTypes> = ({rate, isActive, ...props}) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <span onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={isActive || isHover  ? "grade__active grade" : "grade"} {...props}>
            {rate}
        </span>
    );
};
