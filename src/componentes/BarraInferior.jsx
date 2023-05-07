import React, { useState } from 'react';
import styled from 'styled-components';
import { Temporizador } from './Temporizador.jsx';
import { AlertaSalir } from './AlertaSalir.jsx';
import { theme } from '../theme.js';

export function BarraInferior ({ terminar, temporizador, showInfo, informacion, mostrar, isFinished, tiempoFinal }) {
    const [showExit, setShowExit] = useState();

    function mostrarAlerta () {
        setShowExit(prev => !prev);
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

    return (
        <StyledDiv variant = {theme.palette.Quiz.BottomBar.background}>
            <StyledButton variant = {variantButtonInfo} onClick={mostrar}>informacion</StyledButton>
            { showInfo && informacion }
            {showExit && <AlertaSalir mostrarAlerta = {mostrarAlerta}/>}
            <Temporizador
                temporizador = {temporizador}
                terminar = {terminar}
                isFinished = {isFinished}
                tiempoFinal = {tiempoFinal}
            />
            <StyledButton variant = {variantButtonExit} onClick={mostrarAlerta}>rips</StyledButton>
        </StyledDiv>
    );
}

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
        gap: 10%;
        padding: 0;
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

    color: ${props => props.variant.color};
    border: 1px solid ${props => props.variant.border};

    &:hover{
        background-color: ${props => props.variant.border};
        color: ${props => props.variant.backgroundColor};
        border: 1px solid transparent;
    }

    @media screen and (max-width: 760px) {
        width: 30%;
        overflow: hidden;
    }
`;
