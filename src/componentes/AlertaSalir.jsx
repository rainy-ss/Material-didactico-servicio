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
                <StyledBoton onClick={mostrarAlerta}>Regresar al Quiz</StyledBoton>
                <StyledBoton as={Link} to = {'/temas'}>Salir</StyledBoton>
            </StyledButtonDiv>
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
    transition: 0.2s ease-in-out;

    cursor: pointer;
    &:hover {
        background-color: ${theme.palette.temas.buttonHover};
    }

    @media screen and (orientation:landscape) and (max-height: 500px),
    (min-width: 600px) and (max-width: 800px){
        /* height: 70%; */
        line-height: 100%;
    }
`;

const StyledAlerta = styled.div`
    background-color: #bacfe2;
    color: #790a0a;
    z-index: 10;
    max-width: 35vw;
    max-height: 35vh;
    position: fixed;
    opacity: 0.9;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 20px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;

    @media screen and (orientation:landscape) and (max-height: 500px){
        max-height: 60vh;
        min-height: 40vh;
        max-width: 50vw;
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
    

    & p{
        margin: 0;
        min-height: 100%;
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
    justify-content: space-evenly;
    
`;
