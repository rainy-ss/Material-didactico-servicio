import React, { useState } from 'react';
import UAM from '../imagenes/UAM.svg';
import styled from 'styled-components';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import { theme } from '../theme';

const StyledNavBar = styled.nav`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 95vw;
    height: 15vh;
    font-size: 1.2rem;
    padding: 10px 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    position: fixed;
    top : 10px;
    left: 50%;
    transform: translate(-50%);

    .logo-uam{
        height: 100%;
    }

    .barra-lista-enlaces{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 5px;
        height: 70%;
        width: 70%;
    }

    .barra-lista-enlaces li{
        list-style: none;
        
    }

    .icono-barra{
        visibility: hidden;
    }

    @media screen and (max-height: 550px) {

        width: 100vw;
        height: 10vh;
        padding: 5px;
        font-size: 0.8rem;
        
    }

    @media screen and (max-width: 768px) {
        height: 10vh;

        .barra-lista-enlaces{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            position: fixed;
            top: 60px;
            right: -500px;
            width: 300px;
            height: 100vh;
            background-color: blanchedalmond;
            color: black;
            box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
            padding: 40px 0 0 10px;
            transition: 0.3s ease-in-out;
        }

        .barra-lista-enlaces.active{
            right: 0;
        }

        .barra-lista-enlaces li{
            flex: 0;
            margin-bottom: 25px;
            margin-left: 25px;
            list-style: initial;
        }

        .icono-barra{
            display: block;
            visibility: visible;
        }

        .icono-barra button{
            display: block;
            visibility: visible;
        }

    }
    
`;

export function BarNav () {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenu () {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }

    return (

        <StyledNavBar className='barra-navegacion'>

            <img className='logo-uam' src={UAM} />

            <ul className={`${showMenu ? " barra-lista-enlaces active" : "barra-lista-enlaces "}`}>
                <li className='barra-enlace'>
                    <h2>holiii</h2>
                </li>
                <li className='barra-enlace'>
                    <h3>hi 2</h3>
                </li>
                <li className='barra-enlace'>
                    <h3>hi 3</h3>
                </li>
            </ul>
            <div className='icono-barra'>
                <button onClick={() => handleMenu()}>{showMenu ? <FaRegWindowClose /> : <FaBars />}</button>
            </div>

        </StyledNavBar>
    );
}
