import React from 'react';
import Casa from '../imagenes/casa.png';
import styled from 'styled-components';

export function TituloConImagen ({ imagen = Casa, titulo, colorTitulo }) {
    return (
        <StyledDiv >
            <StyledDivIMG>
                <img src={imagen} />
            </StyledDivIMG>
            <StyledDivH4 variant = {colorTitulo}>
                <h4>{titulo}</h4>
            </StyledDivH4>

        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 20px;
    max-height: 100%;
    overflow: hidden;

    @media screen and (max-height: 550px) {
        padding: 0;
        
    }

`;

const StyledDivH4 = styled.div`

    & h4{
        color: ${props => props.variant};
    }
    

    @media screen and (max-height: 550px) {
        & h4{
            margin: 0;
        }
        
    }
`;

const StyledDivIMG = styled.div`

    max-width: 50px;
    max-height: 50px;
    display: flex;
    align-items: center;


    img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }

    @media screen and (max-height: 550px) {
        max-height: 90%;
        max-width: 10vh;
        
    }

`;
