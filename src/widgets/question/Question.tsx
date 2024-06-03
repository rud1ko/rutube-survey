import {FC} from "react";
import {IQuestions} from "shared/types";
import {Ptag} from "shared/ui/Ptag";
import {AddChooseAnswer} from "features/chooseQuestion";
import {AddRateAnswers} from "features/rateQuestion";

type QuestionType = IQuestions<"choose"> | IQuestions<"rate">;


export const Question: FC<QuestionType> = ({id, text, type, content, isRequired, ...props}) => {
    const renderAnswers = () => {
        switch (type){
            case "choose":
                return (
                    <div className="question__content question__choose">
                        {
                            content.options.map((el, idx) => {
                                return(
                                    <AddChooseAnswer
                                        key={idx}
                                        text={el}
                                        responseId={idx + 1}
                                        questionId={id}
                                    />
                                )
                            })
                        }
                    </div>
                )
            case "rate":
                return (
                    <div className="question__content question__rate">
                        {
                            content.options.map((el, idx) => {
                                return(
                                    <AddRateAnswers
                                        key={idx}
                                        rate={el}
                                        responseId={idx + 1}
                                        questionId={id}
                                    />
                                )
                            })
                        }
                    </div>
                )
            default:
                return <></>
        }
    }

    return (
        <div className="question" {...props}>
            <Ptag size={"small"} color={"white"}>
                {`${id}. ${text} ${isRequired ? "*" : null}`}
            </Ptag>
            { renderAnswers() }
        </div>
    );
};
