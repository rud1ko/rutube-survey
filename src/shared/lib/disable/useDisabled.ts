import {useAppSelector} from "shared/lib/store";

export const useDisabled = () => {
    const questions = useAppSelector(state => state.questions)

    return !(questions.length === 6);
}