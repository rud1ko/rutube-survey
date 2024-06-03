import MainImage from 'shared/assets/imageMain.svg?react'
import {Htag} from "shared/ui/Htag";
import {Ptag} from "shared/ui/Ptag";
import {AddToGrade} from "features/grade";
import {MAIN_RATE} from "shared/consts";

export const MainPage = () => {
    return (
        <div className="main-page">
            <div className="main-page__image-container">
                <MainImage/>
            </div>
            <div className="main-page__form">
                <Htag className="main-page__title" size={"large"}>
                    Уважаемый клиент!
                </Htag>
                <Ptag color={"white"} size={"large"} className="main-page__desc">
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
