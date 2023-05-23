import React, { useState } from 'react';
import styled from 'styled-components';
import { BarraSuperior } from '../../componentes/BarraSuperior.jsx';
import { Panel } from '../../componentes/Panel.jsx';
import { BarraInferior } from '../../componentes/BarraInferior.jsx';
import { Informacion } from '../../componentes/Informacion.jsx';
import { Resultados } from '../../componentes/Resultados.jsx';
import { theme } from '../../theme.js';
import { Temporizador } from '../../componentes/Temporizador.jsx';

export function Quiz ({ objTema, objQuiz, arreglo = [] }) {
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [tiempoFinal, setTiempoFinal] = useState(0);
    const [numeroPregunta, setNumeroPregunta] = useState(0);

    const informacion = <Informacion
        iniciar = {iniciar}
        isStarted = {isStarted}
        mostrar = {mostrar}
    />;

    const temporizador = <Temporizador
        temporizador = {objQuiz.temporizador}
        isStarted = {isStarted}
        isFinished = {isFinished}
        tiempoFinal = {determinarTiempo}
    />;

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
        setTiempoFinal(tiempo);
    }
    function actualizarPregunta () {
        setNumeroPregunta(prev => prev + 1);
    }

    return (
        <StyledQuiz variant = {theme.palette.Quiz.background}>

            <BarraSuperior
                nombre = {objTema.nombre}
                temporizador = {temporizador}

            />

            {
                isFinished
                    ? <>
                        <Resultados
                            tiempoFinal = {tiempoFinal}
                            preguntas ={arreglo}
                            temporizador = {objQuiz.temporizador}
                            tema = {objTema.nombreRuta}
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
                                informacion = {informacion}
                                showInfo = {showInfo}
                                mostrar = {mostrar}
                                numeroPregunta = {numeroPregunta + 1}
                                maxPreguntas = {objQuiz.maxPreguntas}
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
