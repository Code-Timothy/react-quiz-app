import { questions } from "./questions";
import { useState, useEffect } from "react";

const Question = () => {
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    const [question, setQuestion] = useState(questions[currentQuestionId]);
    const [answer, setAnswer] = useState(question ? questions[currentQuestionId].answers : null);

    useEffect(() => {
        setCurrentQuestionId(currentQuestionId => currentQuestionId + 1);
    }, [question]);

    const nextQuestion = () => {
        setQuestion(questions[currentQuestionId]);
        setAnswer(questions[currentQuestionId].answers);
    };

    return (
        <div>
            {question && (
                <>
                    <p>{question.content}</p>
                    {question.answers.map((answer) => (
                        <button key={answer.id} onClick={() => nextQuestion()}>{answer.text}</button>
                    ))}
                </>
            )}
        </div>
    );
};

export default Question;