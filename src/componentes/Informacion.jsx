import React from 'react';
import styled from 'styled-components';
import { HiXMark } from 'react-icons/hi2';
import { theme } from '../theme.js';

export function Informacion ({ mostrar, isStarted }) {
    /*
        Estado para mostrar la ventana
     */
    return (
        <StyledInfo>
            <StyledIcon>
                <HiXMark />
            </StyledIcon>
            <StyledContent>
                <p>Soy una descripción sobre el quiz a realizar y sus reglas</p>
                <p>Soy controles jeje</p>
            </StyledContent>
            {
                !isStarted &&
                <StyledBtnDiv>
                    <StyledBoton onClick={mostrar}>Soy un boton para comenzar el quiz</StyledBoton>
                    <StyledBoton onClick={mostrar}>Soy un boton para salir el quiz</StyledBoton>
                </StyledBtnDiv>
            }
        </StyledInfo>
    );
}

const StyledInfo = styled.div`
    background-color: #c7824a;
    border-radius: 25px;
    z-index: 10;
    width: 70vw;
    min-height: 75vh;
    position: fixed;
    opacity: 0.9;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding: 10px; */
    /* overflow: hidden; */
    


`;

const StyledContent = styled.div`
    background-color: #b3b143;
    flex: 1;
    max-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    
`;

const StyledBtnDiv = styled.div`
    background-color: #d61f6b;
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledBoton = styled.button`

border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    
    background-color: ${theme.palette.temas.buttonBackground};
    border: 1px solid ${theme.palette.temas.buttonBorder};
    color: ${theme.palette.temas.buttonText};
    transition: border-color 0.25s;

    cursor: pointer;
        hover {
        background-color: ${theme.palette.temas.buttonHover};
    }

    @media screen and (max-width: 768px) {
        height: 80%; 
        overflow: hidden;
        font-size: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
    }
`;

const StyledIcon = styled.div`
    background-color: #d61f6b;
    height: 7vh;
    width: 7vh;
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5vh;
    padding: 0;
    cursor: pointer;
`;
