import {PtagTypes} from "../../types";

export const Ptag = ({children}: PtagTypes) => {
    return (
        <p className="ptag">
            {children}
        </p>
    );
};

