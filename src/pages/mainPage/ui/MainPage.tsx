import {Grade} from "../../../shared/ui/grade";
import MainImage from '../../../shared/assets/imageMain.svg?react'
import {Htag} from "../../../shared/ui/Htag";
import {Ptag} from "../../../shared/ui/Ptag";


export const MainPage = () => {
    return (
        <div className="main-page">
            <div className="main-page__image-container">
                <MainImage/>
            </div>
            <div className="main-page__form">
                <Htag className="main-page__title">
                    Уважаемый клиент!
                </Htag>
                <Ptag>
                    Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».
                </Ptag>
            </div>
            <h1>
                Hello World
            </h1>
            <Grade rate={1}/>
        </div>
    );
};
