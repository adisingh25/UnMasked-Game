import { useSelector } from "react-redux";
import QuizCard from "./QuizCard";

const QuizContainer = () => {

    const questions = useSelector((store) => store.question.questions);   

    
    return (
        <div>
            {questions?.map((q) => (
                <QuizCard key={q.key} head={q.question} qid={q.qid} uid={q.uid} marks={q.marks} id={q.key} tag={q.tag}/>
              ))}
        </div>
    )
}


export default QuizContainer;