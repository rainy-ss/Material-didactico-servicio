import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme.js';
import { PanelRespuestas } from './PanelRespuestas.jsx';
import { IconContext } from 'react-icons';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

export function Resultados ({ tiempoFinal, preguntas = [], temporizador, tema }) {
    const [showRespuestas, setShowRespuestas] = useState(false);
    const [showVentanaPreguntas, setShowVentanaPreguntas] = useState(0);
    const [respuestas, setRespuestas] = useState([]);

    useEffect(() => {
        setRespuestas(JSON.parse(localStorage.getItem('respuestas')));
    }, []);

    function mostrarRespuestas () {
        setShowRespuestas(prev => !prev);
        setShowVentanaPreguntas(0);
    }

    function incrementarPregunta () {
        setShowVentanaPreguntas(prev => prev + 1);
    }

    function decrementarPregunta () {
        setShowVentanaPreguntas(prev => prev - 1);
    }

    function determinarMaximo () {
        return (preguntas.length - 1 === showVentanaPreguntas);
    }

    function determinarMinimo () {
        return (showVentanaPreguntas === 0);
    }

    function calcularTiempoTotal () {
        if (temporizador > 0) {
            return temporizador + ':00';
        } else {
            return 'NA';
        }
    }

    return (

        <StyledDiv variant={mainOptions}>

            {
                !showRespuestas
                    ? <>
                        <StyledHeader>
                            <h1>Tus resultados</h1>
                            <hr />
                        </StyledHeader>

                        <StyledDatos>
                            <StyledEstadisticas>
                                <ul className="lista-est">
                                    <li><strong>Tu tiempo:</strong> {tiempoFinal}</li>
                                    <li><strong>Preguntas contestadas:</strong> {respuestas.length}</li>
                                    <li><strong>Errores:</strong> 18</li>
                                </ul>

                                <StyledCalificacion variant={califOptions}>
                                    <p>100%</p>
                                    <h3>Calificacion final</h3>
                                </StyledCalificacion>

                            </StyledEstadisticas>

                            <StyledListaDatosQuiz>
                                <li><strong>Total de preguntas:</strong> {preguntas.length}</li>
                                <li><strong>Tiempo total:</strong> {calcularTiempoTotal()}</li>
                            </StyledListaDatosQuiz>

                        </StyledDatos>
                    </>
                    : <>
                        <p className='contador'>{(showVentanaPreguntas + 1) + '/' + preguntas.length }</p>
                        <PanelRespuestas
                            preguntas = {preguntas}
                            respuestas = {respuestas}
                            numeroPregunta = {showVentanaPreguntas}
                            tema = {tema}
                        />
                    </>

            }

            <StyledBtnDiv variant={btnDivOptions}>
                <StyledButton className="btn try" variant={buttonOptions}>
                    Try again?
                </StyledButton>
                <StyledNavDiv>
                    {
                        showRespuestas &&
                        <StyledButton className='icons' onClick = {decrementarPregunta} variant={determinarMinimo() ? buttonOptionsNavigationDisabled : buttonOptionsNavigationActive}>
                            <IconContext.Provider value={{ className: 'icons' }}>
                                <HiArrowLeft />
                            </IconContext.Provider>
                        </StyledButton>
                    }

                    <StyledButton variant={buttonOptionsNavigationActive} onClick={mostrarRespuestas}>
                        {showRespuestas ? 'Mostrar Estadísticas' : 'Mostrar Respuestas'}
                    </StyledButton>
                    {
                        showRespuestas &&
                        <StyledButton onClick = {incrementarPregunta} variant={determinarMaximo() ? buttonOptionsNavigationDisabled : buttonOptionsNavigationActive}>
                            <IconContext.Provider value={{ className: 'icons' }}>
                                <HiArrowRight />
                            </IconContext.Provider>

                        </StyledButton>
                    }

                </StyledNavDiv>
                <StyledButton className="btn exit" as={Link} to = {'/temas'} variant={buttonOptions}>
                    Ciao
                </StyledButton>

            </StyledBtnDiv>

        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    height: 88vh;
    width: 100vw;
    overflow: visible;
    background-color: ${props => props.variant.backgroundColor};
    color: ${props => props.variant.color};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    & .contador{
        position: absolute;
        margin: 0;
        top: 10px;
        right: 20px;
    }

    @media screen and (orientation:landscape) and (max-height: 550px) {
        & .contador{
            top: unset;
            bottom: 10vh;
            right: 50%;
        }

    }

`;

const StyledHeader = styled.div`
    text-align: center;
    font-size: 0.8rem;
    width: 80%;
    
    @media screen and (orientation:landscape) and (max-height: 550px) {
        & h1{
            font-size: 2rem;
            padding: 10px;
            margin: 0;
        }

    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        font-size: 0.7rem;
    }
`;

const StyledDatos = styled.div`
    height: 100%;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    @media screen and (orientation:landscape) and (max-height: 550px) {
        height: 50%;
        overflow: hidden;
        justify-content: space-around;
    }
    
`;

const StyledEstadisticas = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 2;
    align-items: center;

    & ul{
        padding: 0;
    }

    & li{
        list-style: none;
        margin: 10px;
        font-size: 1.4rem;
    }

    @media screen and (orientation:landscape) and (max-height: 550px) {
        flex: 0;
        & li{
            margin: 0;
            font-size: 1.2rem;
        }
    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        flex-direction: column-reverse;
        padding: 10px;
    }
    
`;

const StyledCalificacion = styled.div`
    text-align: center;

    & p{
        font-size: 10vh;
        background-color: ${props => props.variant.backgroundColor};
        color: ${props => props.variant.color};
        padding: 20px;
        margin-bottom: 10px;
    }

    & h3{
        font-size: 2rem;
    }

    @media screen and (orientation:landscape) and (max-height: 550px) {
        & p{
            margin: 0;
            font-size: 10vh;
            padding: 10px;
            margin-bottom: 10px;
        }

        & h3{
            margin: 0;
            font-size: 1.7rem;
        }

    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        & p{
            margin: 0;
            font-size: 5vh;
            padding: 20px;
            margin-bottom: 10px;
        }
        & h3{
            margin: 0;
            font-size: 1.7rem;
        }
    }
    
`;

const StyledListaDatosQuiz = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    flex: 1;

    & li{
        list-style: none;
    }

    @media screen and (orientation:landscape) and (max-height: 550px) {
        flex: 0;
        margin: 5px;
        margin-bottom: 10px;
        padding: 0;
        height: 30%;
    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        flex-direction: column;
        border-top: 1px solid grey;
        margin: 0;
    }
    
`;

const StyledBtnDiv = styled.div`
    min-height: 10vh;
    width: 100%;
    background-color: ${props => props.variant.backgroundColor};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;

    @media screen and (orientation:landscape) and (max-height: 550px) {
        max-height: 10vh;
        padding:5px;
    }
    

    @media screen and (max-width: 760px) and (min-height: 550px){
       
        max-height: 12vh;
        display: grid;
        padding: 5px;
        gap: 5px;
        grid-template-rows: repeat(2, 1fr);
        grid-template-colums: repeat(2, 1fr);
        justify-content: space-evenly;
        justify-items: center;
        align-content: space-evenly;
        align-items: center;
    }
    
`;

const StyledButton = styled.button`
    font-size: 1rem;
    padding: 5px 10px;
    height: 70%;
    font-weight: bold;
    min-width: 100px;
    color: ${props => props.variant.color};
    
    border: 2px solid ${props => props.variant.borderColor};
    background-color: ${props => props.variant.backgroundColor};
    border-radius: ${props => props.variant.borderRadius};
    pointer-events: ${props => props.variant.pointerEvents};

    & .icons{
        height: 100%;
        width: 30px;
    }

    &.exit{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (orientation:landscape) and (max-height: 550px) {
        padding: 0 15px;
        font-size: 14px;
        min-width: 20px;
        height: 100%;

        &.btn{
            min-width: 20%;
            width: 10vw;
        }
        
    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        min-width: 20px;
        max-width: 100px;
        min-height: 100%;
        font-size: 0.8rem;
        overflow: hidden;
        padding: 0 10px;
        
        &.btn{
            height: 70%;
            min-width: 40%;
            width: 30vw;
        }
        &.try{
            grid-row: 2;
            grid-column: 1;
        }
        &.exit{
            grid-row: 2;
            grid-column: 2;
        }
    }

`;

const StyledNavDiv = styled.div`
    background-color: transparent;
    display: flex;
    min-width: 30%;
    height: 100%;
    padding: 0;
    justify-content: space-around;
    align-items: center;

    @media screen and (orientation:landscape) and (max-height: 550px) {
        height: 100%;
        gap: 10px;
        min-width: 40%;
        width: 50%;
        justify-content: center;
    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        grid-row: 1;
        grid-column: 1/span 2;
        width: 90vw;
        
        height: 100%;
    }
`;

const mainOptions = {
    backgroundColor: theme.palette.Results.background,
    color: theme.palette.Results.color
};

const califOptions = {
    backgroundColor: theme.palette.Results.Calificacion.background,
    color: theme.palette.Results.Calificacion.color
};

const btnDivOptions = {
    backgroundColor: theme.palette.Results.btnsDivColor
};

const buttonOptions = {
    backgroundColor: theme.palette.Results.BotonesOpciones.background,
    borderColor: theme.palette.Results.BotonesOpciones.border,
    color: theme.palette.Results.BotonesOpciones.color,
    borderRadius: theme.palette.Results.BotonesOpciones.borderRadius
};

const buttonOptionsNavigationActive = {
    backgroundColor: theme.palette.Results.BotonesNavegacion.background,
    borderColor: theme.palette.Results.BotonesNavegacion.border,
    color: theme.palette.Results.BotonesNavegacion.color,
    borderRadius: theme.palette.Results.BotonesNavegacion.borderRadius,
    pointerEvents: 'initial'
};

const buttonOptionsNavigationDisabled = {
    backgroundColor: theme.palette.Results.BotonesNavegacion.backgroundDisabled,
    borderColor: theme.palette.Results.BotonesNavegacion.borderDisabled,
    color: theme.palette.Results.BotonesNavegacion.colorDisabled,
    borderRadius: theme.palette.Results.BotonesNavegacion.borderRadius,
    pointerEvents: 'none'
};
