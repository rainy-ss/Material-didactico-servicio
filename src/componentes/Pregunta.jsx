import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme.js';

export function Pregunta ({ id, tema, link }) {
    const [imagen, setImagen] = useState();

    useEffect(() => {
        import(`../scripts/${tema}/${link}.svg`)
            .then(module => {
                setImagen(module.default);
            });
    }, []);

    const variantOptions = {
        backgroundColor: theme.palette.Quiz.Question.background,
        borderColor: theme.palette.Quiz.Question.border
    };

    return (
        <StyledDiv className = {`contenedor-${id} contenedorPregunta`} variant={variantOptions}>
            <img
                className="imagen"
                src={imagen}
                alt = "soy una pregunta"
            />
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    grid-column: 2;
    grid-row: 2;
    padding: 20px;
    width: 100%;
    background-color:  ${props => props.variant.backgroundColor};
    border: 2px solid ${props => props.variant.borderColor};
    border-radius: 10px;
    


    
`;
