import React from 'react';
import { ContenedorRespuestas } from './ContenedorRespuestas.jsx';
import styled from 'styled-components';

export function PanelRespuestas ({ preguntas, respuestas, numeroPregunta, tema }) {
    function determinarEstilo (index, correcta) {
        if (correcta || (correcta && index === respuestas[numeroPregunta].id)) {
            return 'correct';
        } else if (respuestas[numeroPregunta].id === index && !correcta) {
            return 'incorrect';
        } else {
            return 'none';
        }
    }

    return (
        <>
            <StyledDiv>
                <ContenedorRespuestas
                    id={'pregunta' + numeroPregunta}
                    esPregunta={true}
                    tema={tema}
                    link={preguntas[numeroPregunta].pregunta}
                    estilo = {'none'}
                />

                {
                    preguntas[numeroPregunta].respuestas.map((respuestaActual, index) => (

                        <ContenedorRespuestas
                            key={respuestaActual.id}
                            id={(index + 1)}
                            esPregunta={false}
                            tema={tema}
                            link={respuestaActual.respuesta}
                            estilo={determinarEstilo(index + 1, respuestaActual.respuestaCorrecta)}
                        />

                    ))

                }

            </StyledDiv>
        </>

    );
}

const StyledDiv = styled.div`
    padding: 10px;
    width: 85vw;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 10px;
    grid-template-rows: repeat(3, 1fr);
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    overflow: hidden;
    position: relative;


    @media screen and (orientation:landscape) and (max-height: 550px) {
        min-height: 70vh;
        width: 100vw;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 20px;
        grid-column-gap: 0;
        grid-template-rows: repeat(4, 1fr);

    }

    @media screen and (min-height: 1000px) and (max-width: 850px){
        width: 90vw;
        padding: 5px;
        margin: 0;
        gap: 20px;

    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        display: flex;
        flex-direction: column;
        margin: 0;
        padding-bottom: 10px;
    }

    
    
`;
