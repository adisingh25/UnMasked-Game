
// import './quiz.css';

import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateScore } from "../utils/scoreSlice";
import { useSelector } from "react-redux";
import { increaseTotalScore } from "../utils/finalScoreSlice";


const QuizCard = (props) => {


    const userAnswer = useRef(null);
    const dispatch = useDispatch();

    const [error, setErrorMessage] = useState(false);
    const scoreCard = useSelector((store) => store.scorecard.scoreCard);

    const {head, answer, marks, id } = props

    const checkHandler = () => {
        // console.log(userAnswer.current.value, answer);
        if(userAnswer.current.value === answer) {
            if(scoreCard.hasOwnProperty(id)) {
                // do nothing
            }
            else {
                dispatch(updateScore({id,marks}));
            }
        }
        else {
            setErrorMessage("Wrong Answer!!")
            // console.log(scoreCard);
        }
    }
    // console.log(head,answer,marks);

    useEffect(() => {
        dispatch(increaseTotalScore(scoreCard));
    }, [scoreCard]);

    return (
        <div className="p-2 m-2">
            <div className="bg-slate-400 text-black text-lg p-4 m-2 rounded-xl font-semibold"> 
                <p className="text-green-90 text-2xl text-right">{marks}</p>  
                <h2 id="quiz-question">
                    {head}
                </h2>
                <div className="flex justify-between items-center">
                    <p>Your Answer : </p>
                    <input ref={userAnswer} className="p-3 m-4 w-full rounded-xl"type="text" />
                    <button className="m-2 p-2 bg-white text-black rounded-xl" id="submit" onClick={checkHandler}>Check</button>
                </div>
               
            </div>
        
    </div>
    )
}

export default QuizCard;