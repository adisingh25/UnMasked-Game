
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import questionReducer from "./questionSlice";
import scoreReducer from "./scoreSlice";
import finalScoreReducer from "./finalScoreSlice";


const appStore = configureStore({

    reducer : {
        login : loginReducer,
        question : questionReducer,
        scorecard : scoreReducer,
        currentScore : finalScoreReducer
    }

})


export default appStore;