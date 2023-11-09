import { useSelector } from "react-redux";
import QuizCard from "./QuizCard";

const QuizContainer = () => {

    const questions = useSelector((store) => store.question.questions);   

    
    return (
        <div>
            {questions?.map((q) => (
                <QuizCard key={q.key} head={q.question} answer={q.answer} marks={q.marks} id={q.key} />
              ))}
        </div>
    )
}


export default QuizContainer;