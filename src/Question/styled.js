import styled, { css } from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    padding-top: 50px;
    width: 800px;
    max-width: 100%;
`;

export const Wrapper = styled.div`
    margin: 10px;
    padding: 25px;
    display: grid;
    gap: 25px;
    background-color: white;
    border-radius: 10px;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 25px;
    border-bottom: 2px solid #e6f1f7;
`;

export const StyledDiv = styled.div`
    margin: 0;
    display: flex;
    border-radius: 20px;
    box-shadow: 0px 0px 17px 5px rgba(230,241,247,1);
`;

export const QuestionCounter = styled.h2`
    color: #000000;
`;

export const Rank = styled.div`
    width: 80px;
    padding: 20px;
    text-align: right;
    display: flex;
    gap: 8px;
    border-right: 2px solid #e6f1f7;

    ${(props) => props.second && css`
        border-right: none;
    `}
`;

export const Icon = styled.div`
    font-size: 25px;
`;

export const Title = styled.div`
    text-align: left;
    font-size: 10px;
    font-weight: bold;
    color: #fdde38;
`;

export const Text = styled.div`
    font-size: 14px;
    color: #000000;
`;

export const QuestionContent = styled.p`
    text-align: center;
    font-size: 18px;
    color: #000000;
    font-weight: bold;
`;

export const Answer = styled.button`
    color: #000000;
    border: none;
    padding: 10px;
    border-radius: 10px;

    &&:hover{
        cursor: pointer;
        background-color: rgb(248, 217, 76);
    }
`;