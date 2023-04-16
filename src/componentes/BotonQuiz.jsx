import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme.js';

export function BotonQuiz ({ caracteristicas }) {
    return (
        <StyledDiv>
            <button>{caracteristicas.nombre}</button>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  button {
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
  }
  button:hover {
    background-color: ${theme.palette.temas.buttonHover};
  }
`;
