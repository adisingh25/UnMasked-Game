

import { useSelector } from "react-redux";

import './Gameover.css';

const Gameover = () => {

    const yourTotalScore = useSelector((store) => store.currentScore.totalScore);
    

    return (
        <div className="container">
            <div className="emoji">😊</div>
            <h1>Thanks for taking the test!</h1>
            <p className="score">Your score is {yourTotalScore}</p>
            <p>We appreciate your time and effort.</p>
        </div>
    )
}

export default Gameover;