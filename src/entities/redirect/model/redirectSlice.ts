import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: boolean = false

export const redirectSlice = createSlice({
    name: "redirect",
    initialState,
    reducers: {
        addRedirect: (_state, action: PayloadAction<boolean>) => {
            return action.payload
        },
    }
})

export const {addRedirect} = redirectSlice.actions
export default redirectSlice.reducer