import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
    goals:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        reset: (state) => {
            state.goals = []
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        }
    }
})

export const {reset} = goalsSlice.actions
export default goalsSlice.reducer