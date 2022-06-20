import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
    goals:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new goal
export const createGoal = createAsyncThunk('goals/create', async(goalData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await goalService.setGoal(goalData, token)
      } catch (error) {
        const message = (error.response && error.response.data && 
        error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
      }
})

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