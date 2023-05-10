import React from 'react';
import styled from 'styled-components';
import { TituloConImagen } from './TituloConImagen.jsx';
import { theme } from '../theme.js';

export function BarraSuperior ({ temporizador, nombre }) {
    return (
        <StyledDiv variant = {theme.palette.Quiz.UpperBar.background}>
            <TituloConImagen
                titulo={nombre}
                colorTitulo={theme.palette.Quiz.UpperBar.titleText}
            />

            {temporizador}

        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    width: 100%;
    height: 12vh;
    display: flex;
    background-color: ${props => props.variant};
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    overflow: hidden;

    @media screen and (orientation:landscape) and (max-height: 550px) {
        padding: 0 20px;
        
    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        padding: 5px 10px;
    }
    
`;
