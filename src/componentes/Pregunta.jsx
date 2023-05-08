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
    padding: 10px;
    width: 100%;
    height: 100%;
    background-color:  ${props => props.variant.backgroundColor};
    border: 2px solid ${props => props.variant.borderColor};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    

    & .imagen{
        max-width: 100%;
        object-fit: cover;
    }

    @media screen and (orientation:landscape) and (max-height: 550px) {
        grid-column: 2;
        grid-row: 2/span 2;
        width: 90%;

    }

    @media screen and (min-height: 1000px) and (max-width: 1300px){
        height: 70%;
        padding: 0;

        & .imagen{
            min-height: 100%;
            object-fit: cover;
            background-color: #6e6868;
        }

    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        width: 100%;
        padding: 0;

        
    }
    
`;
