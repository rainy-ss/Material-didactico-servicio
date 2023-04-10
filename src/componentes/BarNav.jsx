import React, { useState } from 'react';
import UAM from '../imagenes/UAM.svg';
import styled from 'styled-components';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import { theme } from '../theme';

const StyledNavBar = styled.nav`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
    
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

            <ul className='barra-lista-enlaces'>
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
