import { useEffect, useState } from "react";
import LeaderBoardCard from "./LeaderBoardCard";
import { RESULT_URl } from "../utils/constants";


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
        const respose = await fetch(RESULT_URl);
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
        <div className="bg-gray-800 p-4 h-screen overflow-auto">
        {/* <table className="table-auto w-full bg-gray-900 text-white shadow-lg overflow-hidden rounded-lg">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">USN</th>
              <th className="px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {players?.map((o, index) => (
              <tr
                key={index}
                className={`transition-colors duration-300 ${
                  index % 2 === 0 ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-900 hover:bg-gray-800"
                }`}
              >
                <td className="border px-4 py-2">{o.userName}</td>
                <td className="border px-4 py-2">{o.userUsn}</td>
                <td className="border px-4 py-2">{o.userScore}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <h2 className="p-4 font-bold  text-white text-2xl text-center mb-4 bg-yellow-300 bg-opacity-30 border-2 border-t-4 rounded-xl border-yellow-500 shadow-md shadow-yellow-400 hover:bg-opacity-50">LEADER BOARD</h2>
            {players?.map((o) => (
              <LeaderBoardCard key={o.userUsn} name={o.userName} score={o.userScore} usn={o.userUsn} />
          ))}
      </div>
    )
}

export default LeaderBoard;

