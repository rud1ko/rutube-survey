import {FC, useState} from "react";
import {GradeTypes} from "shared/types";
import {Grade} from "shared/ui/grade";
import {useAppDispatch} from "shared/lib/store/redux.ts";
import {addGrade} from "entities/grade";
import {useNavigate} from "react-router-dom";


export const AddToGrade: FC<GradeTypes> = ({rate}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isActive, setActive] = useState(false);
    const addGradeToStore = () => {
        setActive(true)
        setTimeout(() => {
            dispatch(addGrade({rate: rate}))
            navigate('/feedback')
        }, 2000)
    }

    return (
        <Grade
            isActive={isActive}
            rate={rate}
            onClick={addGradeToStore}
        />
    );
};