import {Htag} from "shared/ui/Htag";
import {QUESTIONS} from "shared/consts";
import {Question} from "widgets/question";
import background from '../../shared/assets/feedback-background.png'
import {useDisabled} from "shared/lib/disable";
import {RouteButton} from "shared/ui/RouteButton";
import {useAppDispatch} from "shared/lib/store/redux.ts";
import {successfulPassage} from "entities/pass";

export const FeedbackPage = () => {
    // const grade = useAppSelector(state => state.grade)
    // const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isDisable = useDisabled()

    // useEffect(() => {
    //     if (grade.rate === null){
    //         navigate("/")
    //     }
    // }, [grade]);

    const handleSendPassed = (isPassed: boolean) => {
        if (!isDisable){
            dispatch(successfulPassage(isPassed))
        }
    }

    return (
        <div className={"feedback-page"}>
            <img className="feedback-page__img" src={background} alt={"Background"}/>
            <Htag size={"small"} className={"feedback-page__title"}>
                Пожалуйста, ответьте на дополнительные вопросы.
            </Htag>
            <div className={"feedback-page__questions"}>
                {
                    QUESTIONS.map((el, idx) => {
                        if (el.type === "rate"){
                            return (
                                <Question
                                    key={idx}
                                    id={el.id}
                                    text={el.text}
                                    isRequired={el.isRequired}
                                    type={el.type}
                                    content={el.content}
                                />
                            )
                        }
                        else if (el.type == "choose"){
                            return (
                                <Question
                                    key={idx}
                                    id={el.id}
                                    text={el.text}
                                    isRequired={el.isRequired}
                                    type={el.type}
                                    content={el.content}
                                />
                            )
                        }
                    })
                }
            </div>
            <RouteButton
                disabled={isDisable}
                text={"Отправить ответы"}
                href={"/gratitude"}
                className="feedback-page__submit"
                onClick={() => handleSendPassed(true)}
            />
        </div>
    );
};
