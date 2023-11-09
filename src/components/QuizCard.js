
// import './quiz.css';

import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateScore } from "../utils/scoreSlice";
import { useSelector } from "react-redux";
import { increaseTotalScore } from "../utils/finalScoreSlice";


const QuizCard = (props) => {


    const userAnswer = useRef(null);
    const dispatch = useDispatch();

    const [bgcolor, setBgColor] = useState("bg-slate-400");
    const scoreCard = useSelector((store) => store.scorecard.scoreCard);

    const { head, answer, marks, id } = props

    const checkHandler = () => {
        // console.log(userAnswer.current.value, answer);
        if(!userAnswer.current.value) {
            setBgColor("bg-slate-400");
        }
        else if (userAnswer.current.value === answer) {
            if (scoreCard.hasOwnProperty(id)) {
                // do nothing
                setBgColor("bg-green-300")
            }
            else {
                dispatch(updateScore({ id, marks }));
                setBgColor("bg-green-300")
            }
        }
        else {
            setBgColor("bg-red-400")
            // console.log(scoreCard);
        }
    }
    // console.log(head,answer,marks);

    useEffect(() => {
        dispatch(increaseTotalScore(scoreCard));
    }, [scoreCard]);

    return (
        <div className="p-2 m-2">
            <div className={`${bgcolor} p-4 m-2 rounded-xl font-semibold
             text-white text-xl text-justify bg-opacity-20 border-2 border-blue-500 shadow-md shadow-blue-400 hover:bg-opacity-30
            `}>
                <div className="flex justify-evenly p-2">
                    <p className="text-green-90 text-2xl text-right m-2"> Level : Easy</p>
                    <p className="text-green-90 text-2xl text-right m-2 ">Marks : {marks}</p>
                </div>

                <h2 id="quiz-question" className="p-2 m-2">
                    {head}
                </h2>
                <div className="flex justify-between items-center mt-6">
                    <p>Your Answer : </p>
                    <input ref={userAnswer} className="p-3 m-4 w-full rounded-xl bg-slate-900 opacity-90 font-semibold text-yellow" placeholder="Type your answer" type="text" />
                    <button className="m-2 p-2 bg-white text-black rounded-xl hover:bg-slate-600 hover:text-white" id="submit" onClick={checkHandler}>Check</button>
                </div>

            </div>

        </div>
    )
}

export default QuizCard;



{/* <div className="p-2 m-2">
<div className="bg-slate-400 p-4 m-2 rounded-xl font-semibold
 text-white text-xl text-justify bg-opacity-20 border-2 border-blue-500 shadow-md shadow-blue-400 hover:bg-opacity-30
">
    <div className="flex justify-evenly p-2">
        <p className="text-green-90 text-2xl text-right m-2"> Level : Easy</p>
        <p className="text-green-90 text-2xl text-right m-2 ">Marks : {marks}</p>
    </div>

    <h2 id="quiz-question" className="p-2 m-2">
        {head}
    </h2>
    <div className="flex justify-between items-center">
        <p>Your Answer : </p>
        <input ref={userAnswer} className="p-3 m-4 w-full rounded-xl bg-slate-900 opacity-90 font-semibold text-yellow" placeholder="Type your answer" type="text" />
        <button className="m-2 p-2 bg-white text-black rounded-xl hover:bg-slate-600 hover:text-white" id="submit" onClick={checkHandler}>Check</button>
    </div>

</div>

</div> */}