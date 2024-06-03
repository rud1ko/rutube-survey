import img from '../../shared/assets/grantitude.svg'
import {Htag} from "shared/ui/Htag";
import {Ptag} from "shared/ui/Ptag";
import {Button} from "shared/ui/Button";
import {useEffect} from "react";
import {useSurveyContent} from "shared/lib/surveyContent";

export const GratitudePage = () => {
    const {logToConsole} = useSurveyContent()

    useEffect(() => {
        console.log(logToConsole)
    }, [logToConsole]);

    return (
        <div className="grantitude-page">
            <div className="grantitude-page__img">
                <img src={img} alt={"Grantitude"}/>
            </div>
            <div className="grantitude-page__content">
                <Htag size={"large"}>
                    Спасибо за обратную связь!
                </Htag>
                <Ptag size={"large"} color={"white"} className={"grantitude-page__desc"}>
                    Это поможет нам улучшить сервис
                </Ptag>
                <Button mode={"route-button"}>
                    Перейти на платформу
                </Button>
            </div>
        </div>
    );
};
