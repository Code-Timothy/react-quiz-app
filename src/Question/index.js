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

    const handleButtonClick = (answerId) => {
        const updatedAnswers = answer.map((answer) => {
            if (answer.id === answerId) {
                return { ...answer, isSelected: true };
            }
            return answer;
        });

        const selectedAnswer = updatedAnswers.find((answer) => answer.isSelected === true);
        const correctAnswer = answer.find((answer) => answer.isCorrect === true);
    };

    return (
        <div>
            {question && (
                <>
                    <p>{question.content}</p>
                    {question.answers.map((answer) => (
                        <button key={answer.id} onClick={() => handleButtonClick(answer.id)}>{answer.text}</button>
                    ))}
                </>
            )}
        </div>
    );
};

export default Question;