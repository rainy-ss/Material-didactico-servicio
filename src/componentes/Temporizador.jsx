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

    useEffect(() => {
        let interval;
        initTimer();
        if (isStarted) {
            interval = setInterval(() => {
                if (temporizador > 0 && secondsLeftRef.current === 0) {
                    clearInterval(interval);
                    tiempoFinal(secondsLeft);
                }
                if (isFinished) {
                    clearInterval(interval);
                    tiempoFinal(secondsLeft);
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
        backgroundColor: theme.palette.Quiz.BottomBar.textBackground,
        color: theme.palette.Quiz.BottomBar.textColor
    }
};

const StyledTempo = styled.div`
    background-color: ${props => props.variant.Tempo.backgroundColor};
    color: ${props => props.variant.Tempo.color};
    max-width: 150px;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    border-radius: 5px;
    overflow: hidden;
    

    
    & p{
        margin: 0;
        font-size: 1.5em;
    }
    
`;
