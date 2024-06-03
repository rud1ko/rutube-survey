import {TypeByQuestionType} from "shared/types";

export interface IQuestions<T>{
    id: number,
    text: string,
    isRequired: boolean,
    type: T,
    content: TypeByQuestionType<T>;
}
