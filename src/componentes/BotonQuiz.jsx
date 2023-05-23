import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme.js';
import { Link } from 'react-router-dom';

export function BotonQuiz ({ nombreRuta, caracteristicas }) {
    return (
        <StyledDiv>
            <StyledBoton as={Link} to = {`/quiz/${nombreRuta}/${caracteristicas.id}`}>{caracteristicas.nombre}</StyledBoton>
        </StyledDiv>
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

    @media screen and (max-width: 768px) {
      padding: 10px 15px;
      font-size: 1rem;
    }
`;

const StyledDiv = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

`;
