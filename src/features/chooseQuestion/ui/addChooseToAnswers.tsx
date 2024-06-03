import {Button} from "shared/ui/Button";
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "shared/lib/store/redux.ts";
import {addAnswer} from "entities/question";
import {IQuestionsJson} from "entities/question/model/questionSlice.tsx";

interface AddChooseToAnswersProps{
    text: string,
    responseId: number,
    questionId: number
}

export const AddChooseAnswer: FC<AddChooseToAnswersProps> = ({text, responseId, questionId}) => {
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
        <Button isActive={isActive} onClick={() => handleAnswer()} mode={"rating-button"}>
            {text}
        </Button>
    );
};
