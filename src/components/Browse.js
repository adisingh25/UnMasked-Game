import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleGame } from "../utils/loginSlice";
import { addQuestions } from "../utils/questionSlice";
import QuizContainer from "./QuizContainer";
import { updateName,updateUsn } from "../utils/loginSlice";



const Browse = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showBrowse = useSelector((store) => store.login.startGame);
    const yourTotalScore = useSelector((store) => store.currentScore.totalScore);


    const playerName = useSelector((store) => store.login.name);
    const playerUsn  = useSelector((store) => store.login.usn);
    const playerScore = useSelector((store) => store.currentScore.totalScore); 

    
    
    useEffect(() => {
        if(!showBrowse) {
            navigate("/")
        }
        else {
            getData();
        }
    }, [])

    const getData = async() => {
        const respose = await fetch("https://unmasked-game-88f45-default-rtdb.firebaseio.com/quiz.json");
        const data = await respose.json();
        // console.log(data);
        dispatch(addQuestions(data));

    }
    
    const logoutHandler = async() => {
        
        const currentDate = new Date();
        const absoluteNumericValue = currentDate.getTime();
        uploadData(playerName, playerUsn, playerScore, absoluteNumericValue);
        dispatch(toggleGame())
        dispatch(updateName(''));
        dispatch(updateUsn(''));
        navigate("/gameover")
    }

    const uploadData = async (playerName, playerUsn, playerScore, time) => {
        await fetch("https://unmasked-game-88f45-default-rtdb.firebaseio.com/result.json", {
            method : 'POST',
            body: JSON.stringify({
                user : {
                    name :playerName,
                    usn : playerUsn,
                    score : playerScore,
                    time : time
                }
            })
        });
    }

    return (
        <div className="bg-black top-0 bottom-0 h-auto w-full">
            <p className="p-4 font-bold  text-white text-2xl text-center mb-4 bg-yellow-300 bg-opacity-30 border-2 border-t-4 rounded-lg border-yellow-500 shadow-md shadow-yellow-400 hover:bg-opacity-50"
            >Current Score :  {yourTotalScore}
            </p>
            <QuizContainer />
            <div className="flex justify-center">
                <button onClick={logoutHandler} className="rounded-xl p-4 font-bold mb-4  text-white text-xl text-center bg-blue-700 bg-opacity-30 border-2 border-blue-500 shadow-md shadow-blue-900 hover:bg-opacity-50">SUBMIT</button>
            </div>
        </div>
    )
}

export default Browse;