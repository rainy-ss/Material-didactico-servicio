import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme.js';

export function BarraInferior ({ terminar, temporizador, showInfo, informacion, mostrar }) {
    const [showExit, setShowExit] = useState();

    const variantOptions = {
        Tempo: {
            backgroundColor: theme.palette.Quiz.BottomBar.textBackground,
            color: theme.palette.Quiz.BottomBar.textColor
        }
    };

    return (
        <StyledDiv variant = {theme.palette.Quiz.BottomBar.background}>
            <button onClick={mostrar}>informacion</button>
            { showInfo && informacion }
            <StyledTempo variant = {variantOptions}>0:00</StyledTempo>
            <button>rips</button>
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

const StyledTempo = styled.div`
    background-color: ${props => props.variant.Tempo.backgroundColor};
    color: ${props => props.variant.Tempo.color};
    max-width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    border-radius: 5px;
    overflow: hidden;
    
`;
