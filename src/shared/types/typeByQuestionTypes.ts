import {RateContentType, ChooseContentType} from "shared/types";

export type TypeByQuestionType<T> = T extends "choose" ? ChooseContentType : RateContentType;