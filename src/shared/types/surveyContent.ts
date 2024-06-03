import {IQuestionsJson} from "shared/types/iQuestionsJson.ts";

export interface SurveyContent {
    rate: number | null;
    questions: IQuestionsJson[];
}