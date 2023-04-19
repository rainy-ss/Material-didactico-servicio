import React, { useState } from 'react';
import styled from 'styled-components';
import { BarraSuperior } from '../../componentes/BarraSuperior.jsx';
import { Panel } from '../../componentes/Panel.jsx';
import { BarraInferior } from '../../componentes/BarraInferior.jsx';
import { Informacion } from '../../componentes/Informacion.jsx';

export function Quiz ({ objTema, objQuiz, arreglo = [] }) {
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const informacion = <Informacion mostrar = {mostrar} isStarted = {isStarted} />;
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
    function mostrar () {
        setIsStarted(prev => !prev);
    }

    function terminar () {
        setIsFinished(true);
    }

    return (
        <StyledQuiz>

            <BarraSuperior
                nombre = {objTema.nombre}
                maxPreguntas = {objQuiz.maxPreguntas}

            />

            {
                isFinished
                    ? <p>resultados</p>

                    : isStarted
                        ? <>

                            <Panel
                                arreglo ={arreglo}
                            />
                            <BarraInferior
                                terminar = {terminar}
                                temporizador = {objQuiz.temporizador}
                                informacion = {informacion}

                            />
                        </>

                        : informacion
            }
        </StyledQuiz>

    );
}

const StyledQuiz = styled.div`
    background-color: #95998c;
    width: 100vw;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    height: 100vh;
    
    
`;
