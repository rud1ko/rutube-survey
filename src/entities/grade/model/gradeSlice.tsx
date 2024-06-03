import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GradeTypes} from "shared/types";

const initialState: GradeTypes = {
    rate: null
}

export const gradeSlice = createSlice({
    name: "grade",
    initialState,
    reducers: {
        addGrade: (state, action: PayloadAction<GradeTypes>) => {
            state.rate = action.payload.rate
            return state
        }
    }
})

export const {addGrade} = gradeSlice.actions
export default gradeSlice.reducer