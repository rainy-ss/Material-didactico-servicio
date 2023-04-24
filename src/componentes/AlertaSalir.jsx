import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme.js';

export function AlertaSalir ({ mostrarAlerta }) {
    return (
        <StyledAlerta>
            <h2>¿Seguro que deseas salir?</h2>
            <button onClick={mostrarAlerta}>Regresar al Quiz</button>
            <StyledBoton as={Link} to = {'/temas'}>Salir</StyledBoton>
        </StyledAlerta>
    );
}

const StyledBoton = styled.button`
border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    
    background-color: ${theme.palette.temas.buttonBackground};
    border: 1px solid ${theme.palette.temas.buttonBorder};
    color: ${theme.palette.temas.buttonText};
    transition: border-color 0.25s;

    cursor: pointer;
    hover {
        background-color: ${theme.palette.temas.buttonHover};
    }
`;

const StyledAlerta = styled.div`
    background-color: aliceblue;
    color: #790a0a;
    z-index: 10;
    width: 30vw;
    min-height: 35vh;
    position: fixed;
    opacity: 0.9;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    
`;
