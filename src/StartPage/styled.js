import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
`;

export const Header = styled.h1`
    font-size: 88px;
    margin-bottom: 12px;
    letter-spacing: 1px;
`;

export const Image = styled.img`
    width: 280px;
    height: 166px;
`;

export const Paragraph = styled.p`
    text-align: center;
    margin-bottom: 34px;
`;

export const ButtonsWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #fdde38;
    background-image: linear-gradient(160deg, #fdde38 0%, #fd9334 74%);
    color: white;
    width: 250px;
    padding: 10px 20px;
    transition: linear 0.5s;

    &&:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const HelpButton = styled(Button)`
    background-color: white;
    color: #05afee;
    background-image: none;
`;