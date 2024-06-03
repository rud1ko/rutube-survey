import {useAppSelector} from "shared/lib/store/redux.ts";
import {IQuestionsJson} from "entities/question/model/questionSlice.tsx";

interface SurveyContent {
    rate: number | null;
    questions: IQuestionsJson[];
}

export const useSurveyContent = () => {
    const grade = useAppSelector(state => state.grade)
    const questions = useAppSelector(state => state.questions)

    let object: SurveyContent = {
        rate: grade.rate,
        questions: questions.map((el: IQuestionsJson) => el)
    };

    const logToConsole = JSON.stringify(object, null, 2)

    return {logToConsole}
}