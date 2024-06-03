import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IQuestionsJson} from "shared/types";

const initialState: IQuestionsJson[] = []

export const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        addAnswer: (state, action: PayloadAction<IQuestionsJson>) => {
            const { questionID, responseID } = action.payload;
            const index = state.findIndex(item => item.questionID === questionID);
            if (index !== -1) {
                state[index] = { questionID, responseID };
            } else {
                state.push({ questionID, responseID })
            }
        },
    }
})

export const {addAnswer}  = questionSlice.actions
export default questionSlice.reducer