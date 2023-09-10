import { questions } from "./questions";
import { useState, useEffect } from "react";
import { Container, Wrapper, StyledDiv, HeaderWrapper, Rank, Icon, Title, Text, QuestionCounter, QuestionContent, Answer } from "./styled";

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