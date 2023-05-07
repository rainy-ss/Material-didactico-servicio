import React from 'react';
import styled from 'styled-components';
import { TituloConImagen } from './TituloConImagen.jsx';
import { theme } from '../theme.js';

export function BarraSuperior ({ nombre, maxPreguntas }) {
    const variantOptions = {
        Count: {
            backgroundColor: theme.palette.Quiz.UpperBar.tempoBackground,
            color: theme.palette.Quiz.UpperBar.tempoText
        }
    };

    return (
        <StyledDiv variant = {theme.palette.Quiz.UpperBar.background}>
            <TituloConImagen
                titulo={nombre}
                colorTitulo={theme.palette.Quiz.UpperBar.titleText}
            />
            <StyledContador variant={variantOptions}>
                <p>0/10</p>

            </StyledContador>
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

    @media screen and (max-width: 768px) {
        padding: 5px 10px;
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
        height: 100%;
    }
    
    @media screen and (max-width: 768px) {
        width: 20%;

        & p{
            height: auto;
            font-size: 1.7rem;
        }
    }

    @media screen and (orientation:landscape) and (max-height: 550px) {
        width: 10%;
        height: 90%;
        font-size: 1.7rem;
        
    }
    
`;
