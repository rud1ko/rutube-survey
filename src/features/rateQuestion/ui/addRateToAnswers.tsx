import {FC} from "react";
import {useAppDispatch, useAppSelector} from "shared/lib/store/redux.ts";
import {addAnswer} from "entities/question";
import {Grade} from "shared/ui/grade";
import {AddRateToAnswersProps, IQuestionsJson} from "shared/types";


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
