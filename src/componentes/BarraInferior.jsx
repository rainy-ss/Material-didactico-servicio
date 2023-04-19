import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme.js';

export function BarraInferior ({ terminar, temporizador, informacion }) {
    const [showInfo, setShowInfo] = useState();
    const [showExit, setShowExit] = useState();

    function mostrar () {
        setShowInfo(prev => !prev);
    }
    return (
        <StyledDiv variant = {theme.palette.Quiz.BottomBar.background}>
            <button onClick={mostrar}>informacion</button>
            { showInfo && informacion }
            <StyledTempo>0:00</StyledTempo>
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
    background-color: #e0c1cf;
    max-width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    border-radius: 5px;
    overflow: hidden;
    
`;
