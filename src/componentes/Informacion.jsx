import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme.js';

export function Informacion ({ mostrar, isStarted }) {
    /*
        Estado para mostrar la ventana
     */
    return (
        <StyledInfo>
            <StyledContent>
                <p>Soy una descripción sobre el quiz a realizar y sus reglas</p>
                <p>Soy controles jeje</p>
            </StyledContent>
            {
                !isStarted &&
                    <div>
                        <StyledBoton onClick={mostrar}>Soy un boton para comenzar el quiz</StyledBoton>
                        <StyledBoton onClick={mostrar}>Soy un boton para salir el quiz</StyledBoton>
                    </div>
            }
        </StyledInfo>
    );
}

const StyledInfo = styled.div`
    background-color: #c7824a;
    border-radius: 25px;
    z-index: 10;
    width: 70vw;
    height: 75vh;
    position: fixed;
    opacity: 0.9;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 10px;
    overflow: hidden;
    
`;

const StyledContent = styled.div`
    background-color: #b3b143;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    
`;

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
