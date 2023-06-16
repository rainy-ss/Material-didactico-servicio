import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { theme } from '../theme.js';

export function Respuesta ({ id, icon, tema, objRespuesta, manejaRespuesta }) {
    const [imagen, setImagen] = useState();
    const Icono = icon;

    useEffect(() => {
        import(`../scripts/${tema}/${objRespuesta.respuesta}.svg`)
            .then(module => {
                setImagen(module.default);
            });
    }, [objRespuesta.respuesta]);

    return (
        <StyledDiv className = {`contenedor-${id} contenedorRespuesta`} >

            <StyledButtonRespuesta variant={variantOptions}>
                <img
                    className="imagen"
                    onClick={ () => manejaRespuesta(id, objRespuesta.respuestaCorrecta) }
                    src={imagen}
                    alt="soy una respuesta"
                />
                <IconContext.Provider value={{ className: 'icons' }}>
                    <Icono />
                </IconContext.Provider>
            </StyledButtonRespuesta>

        </StyledDiv>
    );
}

const variantOptions = {
    backgroundColor: theme.palette.Quiz.Answers.background,
    borderColor: theme.palette.Quiz.Answers.border,
    hoverBack: theme.palette.Quiz.Answers.hoverBackground,
    hoverBord: theme.palette.Quiz.Answers.hoverBorder
};

const StyledDiv = styled.div`
    height: 100%;
    width: 80%;
    position:relative;
    min-height: 0;
    &.contenedor-1{
        grid-column: 2;
        grid-row: 1;
        
    }

    &.contenedor-2{
        grid-column: 3;
        grid-row: 2;
    }

    &.contenedor-3{
        grid-column: 2;
        grid-row: 3;
    }

    &.contenedor-4{
        grid-column: 1;
        grid-row: 2;
    }
  
    & .icons{
        font-size: 30px;
        width: 50px;
        position:absolute;
        bottom:5px;
        right:5px;
        z-index: 2;
        margin: 0;
        padding: 0;
        cursor: pointer;
        opacity: 0.3;
    }

    
    @media screen and (orientation:landscape) and (max-height: 550px) {
        height: 100%;
        width: 90%;

        &.contenedor-1{
            grid-column: 1;
            grid-row: 1/span 2; 
        }

        &.contenedor-2{
            grid-column: 1;
            grid-row: 3/span 2;
        }

        &.contenedor-3{
            grid-column: 3;
            grid-row: 1/span 2;
        }

        &.contenedor-4{
            grid-column: 3;
            grid-row: 3/span 2;
        }
    
        & .icons{
            font-size: 20px;
            width: 30px;
            
        }
    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        width: 70%;

        & .icons{
            font-size: 1rem;
            width: 30px;
        }
    }

    @media screen and (min-height: 1000px) {
        height: 70%;
    }

    @media screen and (min-height: 1000px) and (max-width: 1300px){
        width: 90%;

    }


`;

const StyledButtonRespuesta = styled.button`
    background-color:  ${props => props.variant.backgroundColor};
    border: 2px solid ${props => props.variant.borderColor};
    padding: 5px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    transition: 0.2s ease-in-out;

    & .imagen{
        max-width: 100%;
        object-fit: cover;
    }

    &:hover{
        background-color: ${props => props.variant.hoverBack};;
        border: 2px solid ${props => props.variant.hoverBord};;
        cursor: pointer;
    }


    @media screen and (min-height: 1000px) and (max-width: 1300px){
        & .imagen{
            height: 100%;
            object-fit: cover;
        }

    }


`;
