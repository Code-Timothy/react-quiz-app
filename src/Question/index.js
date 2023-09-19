import { questions } from "./questions";
import { useState, useEffect } from "react";
import { Container, Wrapper, StyledDiv, HeaderWrapper, Rank, Icon, Title, Text, QuestionCounter, QuestionContent, Answer } from "./styled";

const Question = () => {
    const initialQuestionId = JSON.parse(localStorage.getItem("currentQuestionId")) || 0;
    const initialQuestion = questions[initialQuestionId];

    const [currentQuestionId, setCurrentQuestionId] = useState(initialQuestionId);
    const [question, setQuestion] = useState(initialQuestion);
    const [answer, setAnswer] = useState(questions[currentQuestionId].answers);
    const [score, setScore] = useState(JSON.parse(localStorage.getItem("score")) || 0);

    useEffect(() => {
        localStorage.setItem("currentQuestionId", JSON.stringify(currentQuestionId));
    }, [currentQuestionId]);

    useEffect(() => {
        localStorage.setItem("score", JSON.stringify(score));
    }, [score]);

    const nextQuestion = () => {
        if (question && (currentQuestionId < questions.length - 1)) {
            setQuestion(questions.find((question) => question.id === currentQuestionId));
            setAnswer(questions.find((question) => question.id === currentQuestionId).answers);
            setCurrentQuestionId(currentQuestionId => currentQuestionId + 1);
        } else {
            console.log("Koniec quizu");
        }
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
        <Container>
            {question && (
                <>
                    <Wrapper>
                        <HeaderWrapper>
                            <QuestionCounter>Pytanie #{currentQuestionId}</QuestionCounter>
                            <StyledDiv>
                                <Rank>
                                    <Icon>👑</Icon>
                                    <Title>
                                        Rank
                                        <Text>1/100</Text>
                                    </Title>
                                </Rank>
                                <Rank second="true">
                                    <Icon>💎</Icon>
                                    <Title>
                                        Score
                                        <Text>{score}/{questions.length}</Text>
                                    </Title>
                                </Rank>
                            </StyledDiv>
                        </HeaderWrapper>
                        <QuestionContent>
                            {question.content}
                        </QuestionContent>
                        {question.answers.map((answer) => (
                            <Answer key={answer.id} onClick={() => handleButtonClick(answer.id)}>{answer.text}</Answer>
                        ))}
                    </Wrapper>
                </>
            )}
        </Container>
    );
};

export default Question;