
import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
    name : "score",
    initialState: {
      scoreCard: {},
    },
    reducers: {
      updateScore: (state, action) => {
        // console.log("this is action.payload", action.payload);
        let qid = +action.payload.id;
        let marks = +action.payload.marks;
        const newCard = state.scoreCard;
        newCard[qid] = marks;
        state.scoreCard = newCard;
        // console.log(state.scoreCard);
      },
    },
})

export const { updateScore } = scoreSlice.actions;

export default scoreSlice.reducer;