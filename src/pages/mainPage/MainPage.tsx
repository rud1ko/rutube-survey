import MainImage from 'shared/assets/imageMain.svg?react'
import {Htag} from "shared/ui/Htag";
import {Ptag} from "shared/ui/Ptag";
import {AddToGrade} from "features/grade/ui/addToGrade.tsx";
import {MAIN_RATE} from "shared/consts";
// import {useAppSelector} from "shared/lib/store/redux.ts";
// import {useEffect} from "react";
// import {useNavigate} from "react-router-dom";


export const MainPage = () => {
    return (
        <div className="main-page">
            <div className="main-page__image-container">
                <MainImage/>
            </div>
            <div className="main-page__form">
                <Htag className="main-page__title" centered size={"large"}>
                    Уважаемый клиент!
                </Htag>
                <Ptag centered color={"white"} size={"large"}>
                    Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» <br className="main-page__br"/>и 9 — «Отлично».
                </Ptag>
                <div className="main-page__rate">
                    {
                        MAIN_RATE.map((el, idx) => {
                            return (
                                <AddToGrade key={idx} rate={el}/>
                            )
                        })
                    }
                </div>
                <div className="main-page__rate-orally">
                    <Ptag size={"middle"} color={"gray"}>
                        Хуже некуда
                    </Ptag>
                    <Ptag size={"middle"} color={"gray"}>
                        Отлично
                    </Ptag>
                </div>
            </div>
        </div>
    );
};