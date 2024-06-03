import {PtagTypes} from "../../types";
import cn from 'classnames'

export const Ptag = ({children, size, color, centered, className, ...props}: PtagTypes) => {
    return (
        <p className={cn("ptag", className, {
            ["ptag__centered"]: centered,
            ["ptag__gray"]: color === "gray",
            ["ptag__white"]: color === "white",
            ["ptag__midSize"]: size === "middle",
            ["ptag__smallSize"]: size === "small",
            ["ptag__largeSize"]: size === "large"
        })} {...props}>
            {children}
        </p>
    );
};

