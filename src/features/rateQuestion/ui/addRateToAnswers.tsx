import {FC} from "react";
import {useAppDispatch, useAppSelector} from "shared/lib/store/redux.ts";
import {addAnswer} from "entities/question";
import {Grade} from "shared/ui/grade";
import {IQuestionsJson} from "entities/question/model/questionSlice.tsx";

interface AddRateToAnswersProps{
    rate: number,
    responseId: number,
    questionId: number
}

export const AddRateAnswers: FC<AddRateToAnswersProps> = ({rate, responseId, questionId}) => {
    const dispatch = useAppDispatch()
    const answers = useAppSelector(state => state.questions)

    const handleAnswer = () => {
        dispatch(addAnswer({
            questionID: questionId,
            responseID: responseId
        }))
    }

    const isActive = answers.some((answer: IQuestionsJson) => answer.responseID === responseId && answer.questionID === questionId);

    return (
        <Grade isActive={isActive} onClick={() => handleAnswer()} rate={rate}/>
    );
};
