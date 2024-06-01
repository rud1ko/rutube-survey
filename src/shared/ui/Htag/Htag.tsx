import {HtagTypes} from "../../types";
import cn from 'classnames'

export const Htag = ({children, className, ...props}: HtagTypes) => {
    return (
        <h1 className={cn(className, "htag")} {...props}>
            {children}
        </h1>
    );
};
