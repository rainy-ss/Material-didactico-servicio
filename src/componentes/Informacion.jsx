import React from 'react';
import styled from 'styled-components';
import { HiXMark } from 'react-icons/hi2';
import Flechas from '../imagenes/arrow_keys_fa.svg';
import Touch from '../imagenes/9081044_hand_click_icon.svg';
import Click from '../imagenes/9080515_click_icon.svg';
import { theme } from '../theme.js';

export function Informacion ({ iniciar, isStarted, mostrar }) {
    /*
        Estado para mostrar la ventana
     */

    return (
        <StyledInfo>
            {
                isStarted &&
                    <StyledIcon>
                        <HiXMark onClick={mostrar} />
                    </StyledIcon>
            }
            <StyledContent>
                <StyledDescription>
                    <h2>Información</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quidem nostrum? Accusantium ipsam sed a maiores delectus libero, eaque nihil! Necessitatibus quidem nostrum ad obcaecati accusamus ullam ab! Eveniet ipsam hic error voluptate explicabo, numquam molestiae voluptates repudiandae debitis dolore provident, deserunt, rerum autem ipsum rem animi voluptas ducimus fuga?</p>
                </StyledDescription>
                <StyledControls>
                    <h2>Controles</h2>
                    <ul className='lista-controles'>
                        <li>
                            <img className="icons" src={Click} />
                            <p>Click</p>
                        </li>
                        <li>
                            <img className="icons" src={Touch} />
                            <p>Tocar</p>
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
                    <StyledBoton onClick={iniciar}>Soy un boton para comenzar el quiz</StyledBoton>
                    <StyledBoton onClick={iniciar}>Soy un boton para salir el quiz</StyledBoton>
                </StyledBtnDiv>
            }
        </StyledInfo>
    );
}

const StyledInfo = styled.div`
    background-color: #c95a00;
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
    background-color: #0231cc;
    flex: 1;
    max-height: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    @media screen and (max-width: 600px) {
        max-height: 100%;
        flex-direction: column;

        & p{
            font-size: 16px;
            margin: 0;
        }
    }

    @media screen and (orientation:landscape) and (max-height: 500px),
    (min-width: 760px) and (min-height: 1000px){
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
    background-color: #d61f6b;
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
    
    background-color: ${theme.palette.temas.buttonBackground};
    border: 1px solid ${theme.palette.temas.buttonBorder};
    color: ${theme.palette.temas.buttonText};
    transition: border-color 0.25s;

    cursor: pointer;
        hover {
        background-color: ${theme.palette.temas.buttonHover};
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

    @media screen and (orientation:landscape) and (max-height: 500px),
    (min-width: 850px) and (min-height: 1000px){
        height: 80%; 
        font-size: 80%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
`;

const StyledIcon = styled.div`
    background-color: #d61f6b;
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

    @media screen and (orientation:landscape) and (max-height: 500px),
    (min-width: 760px) and (min-height: 1000px){
        right: 5px;
        top: 5px;
        height: 5vh;
        width: 5vh;
    }
`;

const StyledDescription = styled.div`
    background-color: coral;
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

    @media screen and (orientation:landscape) and (max-height: 500px),
    (min-width: 760px) and (min-height: 1000px){
        width: 70%;

    }

`;

const StyledControls = styled.div`
    text-align: center;
    background-color: tomato;
    display: flex;
    flex-direction: column;
    border-left:1px solid #65a14d;
    width: 50%;
    padding-left: 10px;
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
        border: 2px solid #83ce65;
        border-radius: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        height: 30%;
        background-color: #eeffe7;
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
