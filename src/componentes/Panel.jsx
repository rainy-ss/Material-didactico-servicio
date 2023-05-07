import React from 'react';
import styled from 'styled-components';
import { Pregunta } from './Pregunta.jsx';
import { Respuesta } from './Respuesta.jsx';
import { FaLongArrowAltDown, FaLongArrowAltLeft, FaLongArrowAltRight, FaLongArrowAltUp } from 'react-icons/fa';

const respuestasUsuario = [];

export function Panel ({ preguntas = [], numeroPregunta, actualizarPregunta, terminar, tema }) {
    const iconos = [FaLongArrowAltUp, FaLongArrowAltRight, FaLongArrowAltDown, FaLongArrowAltLeft];
    /*
        Recibe:
            1. Un arreglo de preguntas.
            2. Funcion para actualizar el numero de pregunta.
            3. Funcion para finalizar el quiz.
        Contiene:
            1. Arreglo de respuestas
            2. Comprobacion de si es la ultima pregunta.
            3. Funcionalidad de teclas y revisar lo de focus

    */

    function manejaRespuesta (id, esCorrecta) {
        respuestasUsuario.push({ id, esCorrecta });
        console.log(id, esCorrecta);
        if (numeroPregunta === (preguntas.length - 1)) {
            localStorage.setItem('respuestas', JSON.stringify(respuestasUsuario));
            terminar();
        } else {
            actualizarPregunta();
        }
    }

    function handleKeyUp (event) {
        if (event.key === 'ArrowUp') {
            manejaRespuesta(preguntas[numeroPregunta].respuestas[0].id, preguntas[numeroPregunta].respuestas[0].respuestaCorrecta);
        } else if (event.key === 'ArrowRight') {
            manejaRespuesta(preguntas[numeroPregunta].respuestas[1].id, preguntas[numeroPregunta].respuestas[1].respuestaCorrecta);
        } else if (event.key === 'ArrowDown') {
            manejaRespuesta(preguntas[numeroPregunta].respuestas[2].id, preguntas[numeroPregunta].respuestas[2].respuestaCorrecta);
        } else if (event.key === 'ArrowLeft') {
            manejaRespuesta(preguntas[numeroPregunta].respuestas[3].id, preguntas[numeroPregunta].respuestas[3].respuestaCorrecta);
        }
    }

    return (

        <StyledDiv onKeyUp={handleKeyUp} tabIndex={0} >

            <>
                <Pregunta
                    link={preguntas[numeroPregunta].pregunta}
                    tema = {tema}
                />

                {
                    preguntas[numeroPregunta].respuestas.map((respuestaActual, index) => (

                        <Respuesta
                            key={respuestaActual.id}
                            id = {index + 1}
                            tema = {tema}
                            objRespuesta = {respuestaActual}
                            manejaRespuesta = {manejaRespuesta}
                            icon={iconos[index]}
                        />

                    ))

                }
            </>

        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    padding: 10px;
    width: 85vw;
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 10px;
    grid-template-rows: repeat(3, 1fr);
    margin: 0 20vh;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;

    @media screen and (orientation:landscape) and (max-height: 550px) {
        min-height: 70vh;
        width: 100vw;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        grid-template-rows: repeat(4, 1fr);

    }

    @media screen and (max-width: 1000px),
    (min-height: 1000px) and (max-width: 1300px){
        width: 100vw;
        padding: 5px;
        margin: 0;

    }

    @media screen and (max-width: 760px) {
        display: flex;
        flex-direction: column;
        margin: 5px;
    }


    
`;
