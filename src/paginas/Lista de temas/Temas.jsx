import React from 'react';
import { BarNav } from '../../componentes/BarNav';
import { ListaTemas } from '../../servicios/ListaTemas';
import styled from 'styled-components';

export function Temas () {
    return (
        <StyledTemas>
            <BarNav />
            <ListaTemas/>

        </StyledTemas>
    );
}

const StyledTemas = styled.div`
    margin: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
    margin-bottom: 10vh;
    overflow: hidden visible;
    height: 100%;
    
    @media screen and (max-height: 550px){
        margin-top: 25vh;
    }

`;
