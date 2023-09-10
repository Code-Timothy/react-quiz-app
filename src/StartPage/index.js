import { Wrapper, Header, Paragraph, ButtonsWrapper, Button, HelpButton, Image } from "./styled";

const StartPage = () => (
    <>
        <Wrapper>
            <Header>Quizzy</Header>
            <Paragraph>
                Check your knowladge about JS and React <br />
                Share your score!
            </Paragraph>
            <Image src="https://i.imgur.com/RGh9d9Y.png" />
            <ButtonsWrapper>
                <Button>Play</Button>
                <HelpButton>How to play</HelpButton>
            </ButtonsWrapper>
        </Wrapper>
    </>
);

export default StartPage;