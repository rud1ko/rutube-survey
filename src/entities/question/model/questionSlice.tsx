import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IQuestionsJson {
    questionID: number,
    responseID: number
}

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