import {FC} from "react";

interface IGrade{
    rate: number
}

export const Grade: FC<IGrade> = ({rate}) => {
    return (
        <span className="grade">
            {rate}
        </span>
    );
};
