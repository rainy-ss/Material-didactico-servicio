import React from 'react';
import styled from 'styled-components';
import { BarNav } from '../../componentes/BarNav';

export function Home () {
    return (
        <StyledDiv>
            <BarNav />
            <StyledContent>
                <p>Soy la pagina home</p>
            </StyledContent>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    height: 100vh;
    width: 100vw;
`;

const StyledContent = styled.div`
    height: 100%;
    width: 100%;
    padding: 20vh;
    margin: auto;
`;
