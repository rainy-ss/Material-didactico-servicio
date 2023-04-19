import React from 'react';
import styled from 'styled-components';
import { TituloConImagen } from './TituloConImagen.jsx';
import { theme } from '../theme.js';

export function BarraSuperior ({ nombre, maxPreguntas }) {
    return (
        <StyledDiv variant = {theme.palette.Quiz.UpperBar.background}>
            <TituloConImagen
                titulo={nombre}
                colorTitulo={theme.palette.Quiz.UpperBar.titleText}
            />
            <StyledContador>
                0/10

            </StyledContador>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    width: 100%;
    max-height: 12vh;
    display: flex;
    background-color: ${props => props.variant};
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    
`;

const StyledContador = styled.div`
    max-width: 200px;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: darkslategrey;
    color: antiquewhite;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    font-size: 2.5rem;
    padding: 5px
    
    
`;
