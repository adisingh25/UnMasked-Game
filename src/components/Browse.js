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
        <div>
            Current Score : - {yourTotalScore}
            <QuizContainer />
            <button onClick={logoutHandler} className="rounded-xl bg-yellow-400">SUBMIT</button>
        </div>
    )
}

export default Browse;