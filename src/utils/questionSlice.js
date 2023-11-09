import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name : "login",
    initialState: {
      questions: null,
    },
    reducers: {
      addQuestions: (state, action) => {
        state.questions = action.payload;
      },
    },
})

export const { addQuestions } = questionSlice.actions;

export default questionSlice.reducer;