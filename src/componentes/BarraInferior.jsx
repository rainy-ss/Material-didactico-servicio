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
            <button onClick={mostrar}>informacion</button>
            { showInfo && informacion }
            {showExit && <AlertaSalir mostrarAlerta = {mostrarAlerta}/>}
            <Temporizador
                temporizador = {temporizador}
                terminar = {terminar}
                isFinished = {isFinished}
                tiempoFinal = {tiempoFinal}
            />
            <button onClick={mostrarAlerta}>rips</button>
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
