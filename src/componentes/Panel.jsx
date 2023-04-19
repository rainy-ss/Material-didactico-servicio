import React from 'react';
import styled from 'styled-components';

export function Panel ({ arreglo }) {
    /*
        Arreglo de respuestas
        Funcionalidad de teclas y revisar lo de focus

    */
    return (
        <StyledDiv>
            <p>Soy un panel</p>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    width: 80%;
    /* No tendrá un display flex ni nada de eso lol */
    display: flex;
    background-color: #557ea7;
    align-items: center;
    justify-content: center;
    height: 100%;
    
`;
