import Img from 'shared/assets/grantitude.svg?react'
import {Htag} from "shared/ui/Htag";
import {Ptag} from "shared/ui/Ptag";
import {Button} from "shared/ui/Button";
import {useEffect} from "react";
import {useSurveyContent} from "shared/lib/surveyContent";


export const GratitudePage = () => {
    const {logToConsole} = useSurveyContent()

    useEffect(() => {
        console.log(logToConsole)
    }, []);

    return (
        <div className="gratitude-page">
            <div className="gratitude-page__img">
                <Img/>
            </div>
            <div className="gratitude-page__content">
                <Htag size={"large"}>
                    Спасибо за обратную связь!
                </Htag>
                <Ptag size={"large"} color={"white"} className={"gratitude-page__desc"}>
                    Это поможет нам улучшить сервис
                </Ptag>
                <Button mode={"route-button"}>
                    Перейти на платформу
                </Button>
            </div>
        </div>
    );
};
