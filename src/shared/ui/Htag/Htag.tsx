import {HtagTypes} from "../../types";
import cn from 'classnames'
import {FC} from "react";

export const Htag: FC<HtagTypes> = ({children, size, className, ...props}) => {
    switch (size) {
        case "large":
            return (
                <h1 className={cn(className, "htag", "htag__large")} {...props}>
                    {children}
                </h1>
            );
        case "small":
            return (
                <h1 className={cn(className, "htag", "htag__small")} {...props}>
                    {children}
                </h1>
            );
        default:
            return <></>

    }
};
