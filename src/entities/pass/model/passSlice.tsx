import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: boolean = false

export const passSlice = createSlice({
    name: "pass",
    initialState,
    reducers: {
        successfulPassage: (_state, action: PayloadAction<boolean>) => {
            return action.payload
        },
    }
})

export const {successfulPassage} = passSlice.actions
export default passSlice.reducer