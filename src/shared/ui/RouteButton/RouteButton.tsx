import {Link} from "react-router-dom";
import {FC} from "react";
import {Button} from "shared/ui/Button";
import {RouteButtonProps} from "shared/types";

export const RouteButton: FC<RouteButtonProps> = ({text, disabled, href, className, ...props}) => {
    const handle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (disabled || e.button !== 0) {
            e.preventDefault();
            return
        }
    }

    return (
        <Link to={href} onClick={handle}>
            <Button disabled={disabled} mode={"route-button"} className={className} {...props}>
                {text}
            </Button>
        </Link>
    );
};