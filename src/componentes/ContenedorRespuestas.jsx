import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme.js';

export function ContenedorRespuestas ({ id, esPregunta, tema, link, estilo }) {
    const [imagen, setImagen] = useState();

    useEffect(() => {
        import(`../scripts/${tema}/${link}.svg`)
            .then(module => {
                setImagen(module.default);
            });
    }, [link]);

    function determinarEstilo () {
        if (estilo === 'correct') {
            return variantOptionsCorrect;
        } else if (estilo === 'incorrect') {
            return variantOptionsIncorrect;
        } else {
            return variantOptionsNone;
        }
    }

    return (
        <>
            {
                esPregunta
                    ? <StyledPregunta className={`${id} contenedorPregunta`} variant = {variantPregunta}>
                        <img
                            className="img"
                            src={imagen}
                            alt="soy una pregunta"
                        />

                    </StyledPregunta>
                    : <StyledRespuesta className={`contenedor-${id} contenedorRespuesta`} variant={determinarEstilo()}>
                        <img
                            className="img"
                            src={imagen}
                            alt="soy una respuesta"
                        />

                    </StyledRespuesta>

            }
        </>

    );
}

const StyledPregunta = styled.div`
    grid-column: 2;
    grid-row: 2;
    background-color:  ${props => props.variant.backgroundColor};
    border: 2px solid ${props => props.variant.borderColor};
    
    padding: 10px;
    width: 100%;
    height: 100%;
    
    
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    

    & img{
        max-width: 100%;
        object-fit: cover;
    }

    @media screen and (orientation:landscape) and (max-height: 550px) {
        grid-column: 2;
        grid-row: 2/span 2;
        width: 90%;
        padding: 0;

    }

    @media screen and (min-height: 1000px) and (max-width: 850px){
        height: 100%;
        padding: 0;

        & img{
            min-height: 100%;
            object-fit: cover;
        }

    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        width: 90%;
        padding: 0;
        & img{
        max-width: 80%;
        object-fit: cover;
    }
        
    }
    
    
`;

const StyledRespuesta = styled.div`
    background-color: ${props => props.variant.backgroundColor};
    border: 3px solid ${props => props.variant.borderColor};
    
    padding: 10px;
    width: 100%;
    height: 100%;

    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    

    & img{
        max-width: 100%;
        object-fit: cover;
    }

    &.contenedor-1{
        grid-column: 2;
        grid-row: 1;
        
    }

    &.contenedor-2{
        grid-column: 3;
        grid-row: 2;
    }

    &.contenedor-3{
        grid-column: 2;
        grid-row: 3;
    }

    &.contenedor-4{
        grid-column: 1;
        grid-row: 2;
    }


    
    @media screen and (orientation:landscape) and (max-height: 550px) {
        height: 100%;
        width: 90%;
        padding: 0;

        &.contenedor-1{
            grid-column: 1;
            grid-row: 1/span 2; 
        }

        &.contenedor-2{
            grid-column: 1;
            grid-row: 3/span 2;
        }

        &.contenedor-3{
            grid-column: 3;
            grid-row: 1/span 2;
        }

        &.contenedor-4{
            grid-column: 3;
            grid-row: 3/span 2;
        }
    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        width: 70%;

        & img{
            max-width: 100%;
            object-fit: cover;
        }
    }

    @media screen and (min-height: 1000px) and (max-width: 850px){
        height: 100%;
        & img{
            height: 60%;
            max-width: 100%;
            object-fit: cover;
        }
    }

    

    
`;

const variantOptionsIncorrect = {
    backgroundColor: theme.palette.Results.PanelRespuestas.RespuestaIncorrecta.background,
    borderColor: theme.palette.Results.PanelRespuestas.RespuestaIncorrecta.border
};

const variantOptionsNone = {
    backgroundColor: theme.palette.Results.PanelRespuestas.OtraRespuesta.background,
    borderColor: theme.palette.Results.PanelRespuestas.OtraRespuesta.border
};

const variantOptionsCorrect = {
    backgroundColor: theme.palette.Results.PanelRespuestas.RespuestaCorrecta.background,
    borderColor: theme.palette.Results.PanelRespuestas.RespuestaCorrecta.border
};

const variantPregunta = {
    backgroundColor: theme.palette.Results.PanelRespuestas.Pregunta.background,
    borderColor: theme.palette.Results.PanelRespuestas.Pregunta.border
};
