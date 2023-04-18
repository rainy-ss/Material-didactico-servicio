import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme.js';

export function Informacion ({ mostrar, isStarted }) {
    /*
        Estado para mostrar la ventana
     */
    return (
        <div>
            <p>Soy una descripción sobre el quiz a realizar y sus reglas</p>
            {
                !isStarted &&
                    <div>
                        <StyledBoton onClick={mostrar}>Soy un boton para comenzar el quiz</StyledBoton>
                        <StyledBoton onClick={mostrar}>Soy un boton para salir el quiz</StyledBoton>
                    </div>
            }
        </div>
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
