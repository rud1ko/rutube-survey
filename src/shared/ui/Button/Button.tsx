import {FC, useState} from "react";
import {IButton} from "shared/types";
import cn from 'classnames'

export const Button: FC<IButton> = ({children, href, isActive, mode, className, ...props}) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    return (
        <button type={"button"} className={cn("button", className, {
            ["button__action"]: mode === "route-button",
            ["button__active"]: isActive || isHover
        })} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} {...props}>
            {children}
        </button>
    );
};
