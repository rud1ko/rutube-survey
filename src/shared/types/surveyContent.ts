import {IQuestionsJson} from "entities/question/model/questionSlice.tsx";

export interface SurveyContent {
    rate: number | null;
    questions: IQuestionsJson[];
}