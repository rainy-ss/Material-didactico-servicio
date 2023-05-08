import React, { useState } from 'react';
import styled from 'styled-components';
import { BarraSuperior } from '../../componentes/BarraSuperior.jsx';
import { Panel } from '../../componentes/Panel.jsx';
import { BarraInferior } from '../../componentes/BarraInferior.jsx';
import { Informacion } from '../../componentes/Informacion.jsx';
import { Resultados } from '../../componentes/Resultados.jsx';
import { theme } from '../../theme.js';

export function Quiz ({ objTema, objQuiz, arreglo = [] }) {
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [showInfo, setShowInfo] = useState();
    const [tiempoFinal, setTiempoFinal] = useState(0);
    const [numeroPregunta, setNumeroPregunta] = useState(0);

    const informacion = <Informacion
        iniciar = {iniciar}
        isStarted = {isStarted}
        mostrar = {mostrar}
    />;

    /*

        BarraSuperior:
            1.Nombre del tema
            2.Tipo de quiz

        Panel:
            1.Arreglo de preguntas

        BarraInferior:
            1.Longitud del arreglo
            2.Tipo de quiz
            3.Informacion
    */

    function iniciar () {
        setIsStarted(prev => !prev);
    }

    function mostrar () {
        setShowInfo(prev => !prev);
    }

    function terminar () {
        setIsFinished(true);
    }

    function determinarTiempo (tiempo) {
        setIsFinished(tiempo);
    }
    function actualizarPregunta () {
        setNumeroPregunta(prev => prev + 1);
    }

    return (
        <StyledQuiz variant = {theme.palette.Quiz.background}>

            <BarraSuperior
                nombre = {objTema.nombre}
                numeroPregunta = {numeroPregunta + 1}
                maxPreguntas = {objQuiz.maxPreguntas}

            />

            {
                isFinished
                    ? <>
                        <Resultados
                            tiempofinal = {tiempoFinal}
                            preguntas ={arreglo}
                            temporizador = {objQuiz.temporizador}
                        />
                    </>
                    : isStarted
                        ? <>

                            <Panel
                                preguntas ={arreglo}
                                numeroPregunta = {numeroPregunta}
                                actualizarPregunta = {actualizarPregunta}
                                terminar = {terminar}
                                tema = {objTema.nombreRuta}
                            />
                            <BarraInferior
                                terminar = {terminar}
                                temporizador = {objQuiz.temporizador}
                                informacion = {informacion}
                                showInfo = {showInfo}
                                mostrar = {mostrar}
                                isFinished = {isFinished}
                                tiempoFinal = {determinarTiempo}
                            />
                        </>

                        : informacion
            }
        </StyledQuiz>

    );
}

const StyledQuiz = styled.div`
    background-color: ${props => props.variant};
    width: 100vw;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    height: 100vh;
    
    
`;
