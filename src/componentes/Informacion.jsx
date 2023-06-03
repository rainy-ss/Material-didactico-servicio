import React from 'react';
import styled from 'styled-components';
import { HiXMark } from 'react-icons/hi2';
import Flechas from '../imagenes/arrow_keys_fa.svg';
import Touch from '../imagenes/9081044_hand_click_icon.svg';
import Click from '../imagenes/9080515_click_icon.svg';
import { theme } from '../theme.js';
import { Link } from 'react-router-dom';

export function Informacion ({ iniciar, isStarted, mostrar }) {
    /*
        Estado para mostrar la ventana
     */

    return (
        <StyledInfo variant={variantOptionsMain}>
            {
                isStarted &&
                    <StyledIcon>
                        <HiXMark onClick={mostrar} />
                    </StyledIcon>
            }
            <StyledContent variant={variantContentOptions}>
                <StyledDescription>
                    <h2>Información</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quidem nostrum? Accusantium ipsam sed a maiores delectus libero, eaque nihil! Necessitatibus quidem nostrum ad obcaecati accusamus ullam ab! Eveniet ipsam hic error voluptate explicabo, numquam molestiae voluptates repudiandae debitis dolore provident, deserunt, rerum autem ipsum rem animi voluptas ducimus fuga?</p>
                </StyledDescription>
                <StyledControls variant = {variantOptionsControls}>
                    <h2>Controles</h2>
                    <ul className='lista-controles'>
                        <li>
                            <img className="icons" src={Click} />
                            <p>Click</p>
                        </li>
                        <li>
                            <img className="icons" src={Touch} />
                            <p>Apretar</p>
                        </li>
                        <li>
                            <img className="icons" src={Flechas} />
                            <p>Teclado</p>
                        </li>
                    </ul>
                </StyledControls>
            </StyledContent>
            {
                !isStarted &&
                <StyledBtnDiv>
                    <StyledBoton variant = {variantButtonStart} onClick={iniciar}>Comenzar el quiz</StyledBoton>
                    <StyledBoton variant = {variantButtonExit} as={Link} to = {'/temas'} >Salir el quiz</StyledBoton>
                </StyledBtnDiv>
            }
        </StyledInfo>
    );
}

const StyledInfo = styled.div`
    background-color: ${props => props.variant.backgroundColor};
    border: 1px solid ${props => props.variant.borderColor};
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
    
    @media screen and (max-width: 850px) {
        width: 90vw;
        max-height: 100vh;
        height: 95vh;
    }

    @media screen and (orientation:landscape) and (max-height: 500px),
    (min-width: 850px) and (min-height: 1000px){
        max-height: 100vh;
        height: 90vh;
        width: 95vw;
        opacity: 0.9;
    }


`;

const StyledContent = styled.div`
    flex: 1;
    max-height: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    & p{
        color: ${props => props.variant.textColor}
    }

    & h2{
        color: ${props => props.variant.titleColor}
    }

    @media screen and (max-width: 600px) {
        max-height: 100%;
        flex-direction: column;

        & p{
            font-size: 16px;
            margin: 0;
        }
    }

    @media screen and (orientation:landscape) and (max-height: 500px){
        max-height: 100%;
        & h2{
            margin-top: 5px;
            margin-bottom: 10px; 
            font-size: 1.5rem;
        }

        & p{
            margin: 0;
            font-size: 16px;
        }
    }
    
`;

const StyledBtnDiv = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;


`;

const StyledBoton = styled.button`
    border-radius: 8px;
    min-width: 20%;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    
    background-color: ${props => props.variant.background};
    border: 1px solid ${props => props.variant.border};
    color: ${props => props.variant.color};
    transition: ease-in 0.25s;
    cursor: pointer;

    &:hover {
        border: 1px solid ${props => props.variant.hover};
        background-color: ${props => props.variant.hover};
    }

    @media screen and (max-width: 900px) {
        height: 80%; 
        overflow: hidden;
        font-size: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        padding: 0;
    }

    @media screen and (orientation:landscape) and (max-height: 500px){
        height: 80%; 
        font-size: 80%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (min-height: 1000px) and (max-width: 850px){
        height: 50%; 
        font-size: 1.4rem;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const StyledIcon = styled.div`
    height: 5vh;
    width: 5vh;
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5vh;
    padding: 0;
    cursor: pointer;

    @media screen and (orientation:landscape) and (max-height: 500px){
        right: 5px;
        top: 5px;
        height: 5vh;
        width: 5vh;
    }

    @media screen and (min-height: 1000px) and (max-width: 850px){
        height: 5vh;
        width: 5vh;
        height: 5vh;
        width: 5vh;
    }
`;

const StyledDescription = styled.div`
    text-align: justify;
    min-height: 100%;
    width: 60%;
    padding: 10px 10px 5px 20px;

    @media screen and (max-width: 600px), (min-height: 500px){
        width: 100%;
        min-height: 70%;

        & h2{
            text-align: center;
            margin-bottom: 10px;
            font-size: 26px;
        }
    }

    @media screen and (min-height: 1000px) and (max-width: 850px){
        padding-top: 30px;
        max-width: 60%;
    }

    @media screen and (orientation:landscape) and (max-height: 500px),
    (min-width: 760px) and (min-height: 1000px){
        width: 70%;
    }

`;

const StyledControls = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    border-left:1px solid ${props => props.variant.sepadorColor};
    width: 50%;
    min-height: 100%;
    padding: 10px 10px 5px 20px;

    .lista-controles{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }

    .lista-controles li{
        border: 2px dashed ${props => props.variant.bordes};
        border-radius: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        height: 30%;
        background-color: ${props => props.variant.background};
        font-size: 1.6rem;
    }

    .icons{
        max-height: 90px;
        max-width: 90px;
        width: 30%;
    }
    


    @media screen and (max-width: 600px) and (min-height: 500px) {
        width: 100%;
        min-height: 30%;

        
        & h2{
            text-align: center;
            margin: 0;
            margin-bottom: 10px;
            font-size: 26px;

        }

        .lista-controles{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .lista-controles li{
            width: 30%;
            height: 90%;
            flex-direction: column;
            font-size: 20px;
            padding: 5px;
        }

        .icons{
            height: 100%;
            width: 100px;
            
        }

    }

    @media screen and (min-height: 1000px) and (max-width: 850px){
        padding-top: 30px;
        min-width: 40%;
        .icons{
            /* height: 70%; */
            width: 60%;
        }
        & li p{
            margin: 10px;
        }
    }

    @media screen and (orientation:landscape) and (max-height: 500px){
        width: 30%;

        
        .lista-controles li{
            font-size: 20px;
        }
        
        .icons{
            max-height: 100%;
            max-width: 30%;
        }

    }

    @media screen and (min-width: 760px) and (min-height: 1000px){
        width: 30%;
        

        .lista-controles li{
            flex-direction: column;
        }

        .lista-controles p{
            font-size: 2rem;
        }
        
        .icons{
            max-height: 100%;
            max-width: 70%;
        }

    }


`;

const variantOptionsMain = {
    backgroundColor: theme.palette.VentanasEmergentes.Informacion.background,
    borderColor: theme.palette.VentanasEmergentes.Informacion.border
};

const variantContentOptions = {
    titleColor: theme.palette.VentanasEmergentes.Informacion.titulos,
    textColor: theme.palette.VentanasEmergentes.Informacion.texto
};

const variantOptionsControls = {
    sepadorColor: theme.palette.VentanasEmergentes.Informacion.Controles.sepador,
    bordes: theme.palette.VentanasEmergentes.Informacion.Controles.bordes,
    background: theme.palette.VentanasEmergentes.Informacion.Controles.background

};

const variantButtonStart = {
    background: theme.palette.VentanasEmergentes.Informacion.Botones.backgroundSalir,
    color: theme.palette.VentanasEmergentes.Informacion.Botones.colorSalir,
    border: theme.palette.VentanasEmergentes.Informacion.Botones.borderSalir,
    hover: theme.palette.VentanasEmergentes.Informacion.Botones.hover
};

const variantButtonExit = {
    background: theme.palette.VentanasEmergentes.Informacion.Botones.backgroundComenzar,
    color: theme.palette.VentanasEmergentes.Informacion.Botones.colorComenzar,
    border: theme.palette.VentanasEmergentes.Informacion.Botones.borderComenzar,
    hover: theme.palette.VentanasEmergentes.Informacion.Botones.hover
};
