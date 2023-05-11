import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../theme.js';

export function Temporizador ({ temporizador, isStarted, isFinished = false, tiempoFinal }) {
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const addSubst = (temporizador > 0 ? -1 : 1);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;

    function initTimer () {
        const tiempoInicial = temporizador;
        secondsLeftRef.current = tiempoInicial * 60;
        setSecondsLeft(secondsLeftRef.current);
    }

    function tick () {
        secondsLeftRef.current += 1 * addSubst;
        setSecondsLeft(secondsLeftRef.current);
    }

    function calcularTiempoFinal (segundos) {
        let minutes = Math.floor(segundos / 60);
        if (minutes < 10) minutes = '0' + minutes;
        let seconds = segundos % 60;
        if (seconds < 10) seconds = '0' + seconds;
        return minutes + ':' + seconds;
    }

    useEffect(() => {
        let interval;
        initTimer();
        if (isStarted) {
            interval = setInterval(() => {
                if (temporizador > 0 && secondsLeftRef.current === 0) {
                    clearInterval(interval);
                    tiempoFinal(calcularTiempoFinal((temporizador * 60) - secondsLeft));
                }
                if (isFinished) {
                    clearInterval(interval);
                    const tiempo = (temporizador > 0) ? calcularTiempoFinal((temporizador * 60) - secondsLeft) : calcularTiempoFinal(secondsLeft);
                    tiempoFinal(tiempo);
                }

                tick();
            }, 1000);
        }
    }, [isStarted, isFinished]);

    return (
        <>
            {
                isFinished
                    ? null
                    : <StyledTempo variant = {variantOptions}>
                        <p>{minutes}:{seconds}</p>
                    </StyledTempo>

            }
        </>

    );
}

const variantOptions = {
    Tempo: {
        backgroundColor: theme.palette.Quiz.UpperBar.tempoBackground,
        color: theme.palette.Quiz.UpperBar.tempoColor
    }
};

const StyledTempo = styled.div`
    background-color: ${props => props.variant.Tempo.backgroundColor};
    color: ${props => props.variant.Tempo.color};
    
    max-width: 150px;
    width: 15%;
    height: 80%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    padding: 5px;

    & p{
        line-height: 100%;
        margin: 0;
        font-size: 2.5rem;
        height: auto;
    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        width: 20%;

        & p{
            font-size: 1.7rem;
        }
    }

    @media screen and (orientation:landscape) and (max-height: 550px) {
        width: 15%;
        height: 90%;
        padding: 0 10px;

        & p{
            height: auto;
            font-size: 1.7rem;
        }   
    }

    @media screen and (min-width: 760px) and (min-height: 1000px){
        width: 30%;
        & p{
            height: auto;
            font-size: 3rem;
        }  
    }
    

    
    
    
`;
