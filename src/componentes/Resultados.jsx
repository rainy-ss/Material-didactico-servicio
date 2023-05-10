import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme.js';
import { PanelRespuestas } from './PanelRespuestas.jsx';

export function Resultados ({ tiempoFinal, preguntas = [], temporizador }) {
    const [showRespuestas, setShowRespuestas] = useState(false);
    const [showVentanaPreguntas, setShowVentanaPreguntas] = useState(0);
    const [respuestas, setRespuestas] = useState([]);

    useEffect(() => {
        setRespuestas(JSON.parse(localStorage.getItem('respuestas')));
    }, []);

    function mostrarRespuestas () {
        setShowRespuestas(prev => !prev);
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
                                    <li>Tu tiempo: {tiempoFinal}</li>
                                    <li>Preguntas contestadas: {respuestas.length}</li>
                                    <li>Errores: 18</li>
                                    <li>Amor: 0%</li>
                                </ul>

                                <StyledCalificacion variant={califOptions}>
                                    <p>100%</p>
                                    <h3>Calificacion final</h3>
                                </StyledCalificacion>

                            </StyledEstadisticas>

                            <StyledListaDatosQuiz>
                                <li>Total de preguntas: {preguntas.length}</li>
                                <li>Tiempo total: {temporizador}:00</li>
                            </StyledListaDatosQuiz>

                        </StyledDatos>
                    </>
                    : <>
                        <PanelRespuestas />
                    </>

            }

            <StyledBtnDiv variant={btnDivOptions}>
                <StyledButton className="b try" variant={buttonOptions}>
                    Try again?
                </StyledButton>
                <StyledNavDiv>
                    <StyledButton className="btn-izq" variant={buttonOptionsNavigation}>
                        izq
                    </StyledButton>
                    <StyledButton variant={buttonOptionsNavigation} onClick={mostrarRespuestas}>
                        {showRespuestas ? 'Mostrar Estadísticas' : 'Mostrar Respuestas'}
                    </StyledButton>
                    <StyledButton className="btn-der" variant={buttonOptionsNavigation}>
                        der
                    </StyledButton>
                </StyledNavDiv>
                <StyledButton as={Link} to = {'/temas'} variant={buttonOptions}>
                    Ciao
                </StyledButton>

            </StyledBtnDiv>

        </StyledDiv>
    );
}

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

const buttonOptionsNavigation = {
    backgroundColor: theme.palette.Results.BotonesNavegacion.background,
    borderColor: theme.palette.Results.BotonesNavegacion.border,
    color: theme.palette.Results.BotonesNavegacion.color,
    borderRadius: theme.palette.Results.BotonesNavegacion.borderRadius
};

const StyledDiv = styled.div`
    height: 100%;
    width: 100vw;
    overflow: visible;
    background-color: ${props => props.variant.backgroundColor};
    color: ${props => props.variant.color};
    display: flex;
    flex-direction: column;

    
`;

const StyledHeader = styled.div`
    text-align: center;
    font-size: 0.8rem;
    
`;

const StyledDatos = styled.div`
    height: 100%;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
`;

const StyledEstadisticas = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 2;
    align-items: center;

    & li{
        list-style: none;
        margin: 10px;
        font-size: 1.4rem;
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
    
`;

const StyledListaDatosQuiz = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    flex: 1;

    &  li{
        list-style: none;
    }
    
`;

const StyledBtnDiv = styled.div`
    height: 10vh;
    width: 100%;
    background-color: ${props => props.variant.backgroundColor};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`;

const StyledButton = styled.button`
    font-size: 1rem;
    padding: 10px;
    font-weight: bold;
    min-width: 100px;
    color: ${props => props.variant.color};
    
    border: 2px solid ${props => props.variant.borderColor};
    background-color: ${props => props.variant.backgroundColor};
    border-radius: ${props => props.variant.borderRadius};
    
`;

const StyledNavDiv = styled.div`
    background-color: transparent;
    display: flex;
    width: 30%;
    padding: 0;
    justify-content: space-around;
`;
