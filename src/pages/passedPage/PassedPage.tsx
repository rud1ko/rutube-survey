import img from "shared/assets/passed.svg";
import {Htag} from "shared/ui/Htag";
import {Ptag} from "shared/ui/Ptag";
import {Button} from "shared/ui/Button";

export const PassedPage = () => {
    return (
        <div className="passed-page">
            <div className="passed-page__img">
                <img src={img} alt={"Passed"}/>
            </div>
            <div className="passed-page__content">
                <Htag size={"large"}>
                    Вы уже прошли этот опрос
                </Htag>
                <Ptag size={"large"} color={"white"} className="passed-page__desc">
                    Спасибо, что делитесь мнением и помогаете нам быть лучше
                </Ptag>
                <Button mode={"route-button"}>
                    Перейти на RUTUBE
                </Button>
            </div>
        </div>
    )
}