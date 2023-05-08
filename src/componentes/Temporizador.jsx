import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../theme.js';

export function Temporizador ({ temporizador, terminar, isFinished, tiempoFinal }) {
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const addSubst = (temporizador > 0 ? -1 : 1);

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
        initTimer();

        const interval = setInterval(() => {
            if (temporizador > 0 && secondsLeftRef.current === 0) {
                return terminar(true);
            }
            if (temporizador === 0 && isFinished) {
                return tiempoFinal(secondsLeftRef.current);
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;

    const variantOptions = {
        Tempo: {
            backgroundColor: theme.palette.Quiz.BottomBar.textBackground,
            color: theme.palette.Quiz.BottomBar.textColor
        }
    };

    return (
        <StyledTempo variant = {variantOptions}>
            <p>{minutes}:{seconds}</p>
        </StyledTempo>
    );
}

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
