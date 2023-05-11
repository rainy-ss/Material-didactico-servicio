import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme.js';

export function AlertaSalir ({ mostrarAlerta }) {
    return (
        <StyledAlerta>
            <StyledContent>
                <h2>¿Seguro que deseas salir?</h2>
                <p>Si sales, perderás todo tu progreso.</p>
            </StyledContent>
            <StyledButtonDiv>
                <StyledBoton variant={variantButtonContinue} onClick={mostrarAlerta}>Regresar al Quiz</StyledBoton>
                <StyledBoton variant={variantButtonExit} as={Link} to = {'/temas'}>Salir</StyledBoton>
            </StyledButtonDiv>
        </StyledAlerta>
    );
}

const StyledAlerta = styled.div`
    background-color: ${theme.palette.VentanasEmergentes.Alerta.background};
    z-index: 10;
    max-width: 35vw;
    width: 80%;
    max-height: 35vh;
    position: fixed;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;

    


    @media screen and (orientation:landscape) and (max-height: 500px){
        max-height: 50vh;
        height: 80%;
        max-width: 70vw;
        width: 60%;
        padding: 10px;
    }

    @media screen and (min-width: 760px) and (min-height: 1000px){
        min-height: 25vh;
        max-height: 40vh;
        max-height: 60vh;
        padding: 20px;
        max-width: 60vw;
    }

    @media screen and (max-width: 760px) and (min-height: 500px){
        min-height: 25vh;
        max-height: 40vh;
        padding: 20px 10px;
        max-width: unset;
        width: 90vw;
    }


`;

const StyledContent = styled.div`
    
    height: 100%;
    flex: 1;
    & h2{
        color: ${theme.palette.VentanasEmergentes.Alerta.titulos};
        border-bottom: 1px solid ${theme.palette.VentanasEmergentes.Alerta.separador};
        padding-bottom: 5px;
    }

    & p{
        color: ${theme.palette.VentanasEmergentes.Alerta.texto};
        margin: 0;
        margin: 15px;
        
    }

    @media screen and (orientation:landscape) and (max-height: 500px),
    (max-width: 760px){
        & h2{
            margin: 5px;
            font-size: 1.5rem;
        }
    }
`;

const StyledButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    height: 25%;
    overflow: hidden;
    
`;

const StyledBoton = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 700;
    font-family: inherit;
    
    background-color: ${props => props.variant.background};
    border: 1px solid ${props => props.variant.border};
    color: ${props => props.variant.color};
    transition: 0.2s ease-in-out;
    min-width: 30%;

    cursor: pointer;
    &:hover {
        border: 1px solid ${props => props.variant.hover};
        background-color: ${props => props.variant.hover};
    }

    @media screen and (orientation:landscape) and (max-height: 500px),
    (min-width: 600px) and (max-width: 800px){
        /* height: 70%; */
        line-height: 100%;
    }
`;

const variantButtonContinue = {
    background: theme.palette.VentanasEmergentes.Alerta.Botones.backgroundContinuar,
    color: theme.palette.VentanasEmergentes.Alerta.Botones.colorContinuar,
    border: theme.palette.VentanasEmergentes.Alerta.Botones.borderContinuar,
    hover: theme.palette.VentanasEmergentes.Alerta.Botones.hover
};

const variantButtonExit = {
    background: theme.palette.VentanasEmergentes.Alerta.Botones.backgroundSalir,
    color: theme.palette.VentanasEmergentes.Alerta.Botones.colorSalir,
    border: theme.palette.VentanasEmergentes.Alerta.Botones.borderSalir,
    hover: theme.palette.VentanasEmergentes.Alerta.Botones.hover
};
