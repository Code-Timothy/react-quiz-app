import { questions } from "./questions";
import { useState, useEffect } from "react";
import { StyledParagraph } from "./styled";

const Question = () => {
    const [currentQuestionId, setCurrentQuestionId] = useState(0);
    const [question, setQuestion] = useState(questions[currentQuestionId]);
    const [answer, setAnswer] = useState(questions[0].answers);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (question && (currentQuestionId < questions.length - 1)) {
            setCurrentQuestionId(currentQuestionId => currentQuestionId + 1);
        } else {

        }
    }, [question]);

    const nextQuestion = () => {
        setQuestion(questions.find((question) => question.id === currentQuestionId));
        setAnswer(questions.find((question) => question.id === currentQuestionId).answers);
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
        if (selectedAnswer.isSelected === true && selectedAnswer.isCorrect === true) {
            setScore(score => score + 1);
            nextQuestion();
        } else {
            nextQuestion();
        }
    };

    return (
        <div>
            {question && (
                <>
                    <StyledParagraph>{score}</StyledParagraph>
                    <StyledParagraph>{question.content}</StyledParagraph>
                    {question.answers.map((answer) => (
                        <button key={answer.id} onClick={() => handleButtonClick(answer.id)}>{answer.text}</button>
                    ))}
                </>
            )}
        </div>
    );
};

export default Question;