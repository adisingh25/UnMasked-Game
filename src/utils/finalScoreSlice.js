import { createSlice } from "@reduxjs/toolkit";



const finalScoreSlice = createSlice({
    name : "login",
    initialState: {
      totalScore : 0,
    },
    reducers: {
      increaseTotalScore: (state, action) => {
        let sum = 0;
        let obj = action.payload
        // console.log(action.payload);
        // console.log("this is from final score ", obj)
        for (const key in obj) {
          if (typeof obj[key] === 'number') {
            sum += obj[key];
          }
        }
        state.totalScore = sum;
      },
    },
})

export const { increaseTotalScore } = finalScoreSlice.actions;

export default finalScoreSlice.reducer;