import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name : "login",
    initialState: {
      startGame: false,
      name : null,
      usn : null,
      timing : null
    },
    reducers: {
      toggleGame: (state) => {
        state.startGame = !state.startGame;
      },
      updateName : (state,action) => {
        state.name = action.payload;
      },
      updateUsn : (state,action) => {
        state.usn = action.payload;
      },
    },
})

export const { toggleGame, updateName, updateUsn } = loginSlice.actions;

export default loginSlice.reducer;