

import { useSelector } from "react-redux";



const Gameover = () => {

    const yourTotalScore = useSelector((store) => store.currentScore.totalScore);
    

    return (
        <div>
            GAME OVER!!
            Your Final Score = {yourTotalScore}
        </div>
    )
}

export default Gameover;