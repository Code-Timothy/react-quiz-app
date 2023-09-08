import { questions } from "./questions";
import { useState } from "react";

const Question = () => {
    const [currentQuestionId, setCurrentQuestionId] = useState(1);
    const [question, setQuestion] = useState(questions.find((question) => question.id === currentQuestionId));

    const nextQuestion = () => {
        setCurrentQuestionId(currentQuestionId => currentQuestionId + 1);
        const nextQuestion = questions.find((question) => question.id === currentQuestionId + 1);
        setQuestion(nextQuestion);
    };

    return (
        <div>
            <p>{question.content}</p>
            {question.answers.map((answer) =>
                <button onClick={nextQuestion}>{answer.text}</button>
            )}
        </div>
    )
};

export default Question;