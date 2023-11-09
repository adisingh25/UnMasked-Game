import { useEffect, useState } from "react";
import LeaderBoardCard from "./LeaderBoardCard";


const LeaderBoard = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        api_call();
    }, []);

    const customSort = (a, b) => {

        //  compare based on maximum score
        if (a.userScore > b.userScore) return -1;
        if (a.userScore < b.userScore) return 1;


        // If scores are equal,Compare based on minimum time
        if (a.userTime < b.userTime) return -1;
        if (a.userTime > b.userTime) return 1;
    
        // If both time and score are equal, maintain the current order
        return 0;
      };

    const api_call = async () => {
        const respose = await fetch("https://unmasked-game-88f45-default-rtdb.firebaseio.com/result.json");
        const data = await respose.json();
        const obj = []

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
              const entry = data[key];
              const user = entry.user;
          
              const userUsn = user.usn;
              const userName = user.name;
              const userScore = user.score;
              const userTime = user.time;
              obj.push({userUsn, userName, userName, userScore, userTime});
          }
        }
        // console.log(obj);
        const sortedData = [...obj].sort(customSort); 
        setPlayers(sortedData)
    }

    return (
        <div>
            {players?.map((o) => (
              <LeaderBoardCard key={o.userUsn} name={o.userName} score={o.userScore} usn={o.userUsn} />
          ))}
        </div>
    )
}

export default LeaderBoard;

