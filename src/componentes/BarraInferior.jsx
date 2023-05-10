import React, { useState } from 'react';
import styled from 'styled-components';
import { AlertaSalir } from './AlertaSalir.jsx';
import { theme } from '../theme.js';

export function BarraInferior ({ showInfo, informacion, mostrar, numeroPregunta, maxPreguntas }) {
    const [showExit, setShowExit] = useState();

    function mostrarAlerta () {
        setShowExit(prev => !prev);
    }

    return (
        <StyledDiv variant = {theme.palette.Quiz.BottomBar.background}>
            <StyledButton variant = {variantButtonInfo} onClick={mostrar}>informacion</StyledButton>
            { showInfo && informacion }
            {showExit && <AlertaSalir mostrarAlerta = {mostrarAlerta}/>}

            <StyledContador variant={variantOptions}>
                <p>{numeroPregunta}/{maxPreguntas}</p>

            </StyledContador>
            <StyledButton variant = {variantButtonExit} onClick={mostrarAlerta}>rips</StyledButton>
        </StyledDiv>
    );
}

const variantButtonInfo = {
    backgroundColor: theme.palette.Quiz.BottomBar.Buttons.infoBackground,
    color: theme.palette.Quiz.BottomBar.Buttons.infoColor,
    border: theme.palette.Quiz.BottomBar.Buttons.infoBorder

};

const variantButtonExit = {
    backgroundColor: theme.palette.Quiz.BottomBar.Buttons.exitBackground,
    color: theme.palette.Quiz.BottomBar.Buttons.exitColor,
    border: theme.palette.Quiz.BottomBar.Buttons.exitBorder

};

const variantOptions = {
    Count: {
        backgroundColor: theme.palette.Quiz.UpperBar.tempoBackground,
        color: theme.palette.Quiz.UpperBar.tempoText
    }
};

const StyledDiv = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    background-color: ${props => props.variant};
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    overflow: hidden;

    @media screen and (orientation:landscape) and (max-height: 550px) {
        justify-content: center;
        gap: 20px;
        padding: 0;
    }

`;

const StyledContador = styled.div`
    max-width: 150px;
    width: 15%;
    height: 80%;
    background-color: ${props => props.variant.Count.backgroundColor};
    color: ${props => props.variant.Count.color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    
    padding: 5px;

    & p{
        line-height: 100%;
        margin: 0;
        font-size: 2.5rem;
        height: auto;
    }
    
    @media screen and (max-width: 760px) and (min-height: 550px){
        width: 20%;

        & p{
            font-size: 1.7rem;
        }
    }

    @media screen and (orientation:landscape) and (max-height: 550px) {
        width: 10%;
        height: 90%;

        & p{
            height: auto;
            font-size: 1.7rem;
        }   
    }

    @media screen and (min-width: 760px) and (min-height: 1000px){
        width: 30%;
        & p{
            height: auto;
            font-size: 3rem;
        }  
    }
    
`;

const StyledButton = styled.button`
    padding: 0 10px;
    min-width: 10vw;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    height: 100%;
    line-height: 100%;

    background-color: ${props => props.variant.backgroundColor};
    color: ${props => props.variant.color};
    border: 1px solid ${props => props.variant.border};

    &:hover{
        background-color: ${props => props.variant.border};
        color: ${props => props.variant.backgroundColor};
        border: 1px solid transparent;
    }


    @media screen and (max-width: 760px) and (min-height: 550px){
        min-width: 30%;
        overflow: hidden;
    }

    @media screen and (orientation:landscape) and (max-height: 500px),
    (min-width: 760px) and (min-height: 1000px){
        width: 20vw;
    }
`;
