import { questions } from "./questions";
import { useState, useEffect } from "react";

const Question = () => {
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    const [question, setQuestion] = useState(questions[currentQuestionId]);
    const [answer, setAnswer] = useState(question ? questions[currentQuestionId].answers : null);
    const [score, setScore] = useState(0);

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

        isCorrectAnswer(selectedAnswer);
    };

    const isCorrectAnswer = (selectedAnswer) => {
        console.log(selectedAnswer)
        if (selectedAnswer.isSelected === true && selectedAnswer.isCorrect === true) {
            setScore(score => score + 1);
            nextQuestion();
        } else {
            setScore(score => score);
            nextQuestion();
        }
    };

    return (
        <div>
            {question && (
                <>
                    <p>{score}</p>
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