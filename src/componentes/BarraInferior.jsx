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

    return (
        <StyledDiv variant = {theme.palette.Quiz.BottomBar.background}>
            <StyledButton variant = {'info'} onClick={mostrar}>informacion</StyledButton>
            { showInfo && informacion }
            {showExit && <AlertaSalir mostrarAlerta = {mostrarAlerta}/>}
            <Temporizador
                temporizador = {temporizador}
                terminar = {terminar}
                isFinished = {isFinished}
                tiempoFinal = {tiempoFinal}
            />
            <StyledButton variant = {'exit'} onClick={mostrarAlerta}>rips</StyledButton>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    width: 100%;
    max-height: 8vh;
    display: flex;
    background-color: ${props => props.variant};
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    overflow: hidden;
`;

const StyledButton = styled.button`

    min-height: 30px;
    padding: 10px 0px;
    width: 10vw;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10px;
    background-color: transparent;
    border: transparent;
    font-weight: bold;

    color: ${props => props.variant === 'exit' ? '#e74c31' : '#239e5a'};
    border: 1px solid ${props => props.variant === 'exit' ? '#e74c31' : '#239e5a'};

    &:hover{
        background-color:${props => props.variant === 'exit' ? '#e74c31' : '#239e5a'};
        color:rgb(255, 255, 255);
        border: 1px solid transparent;
    }

`;
