import React from 'react';
import Casa from '../imagenes/casa.png';
import styled from 'styled-components';

export function TituloConImagen ({ imagen = Casa, titulo = 'Soy un titulo' }) {
    return (
        <StyledDiv>
            <StyledDivIMG>
                <img src={imagen} />
            </StyledDivIMG>
            <StyledDivH4>
                <h4>{titulo}</h4>
            </StyledDivH4>

        </StyledDiv>
    );
}

const StyledDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: coral;

`;

const StyledDivH4 = styled.div`
`;

const StyledDivIMG = styled.div`

max-width: 50px;
max-height: 50px;


img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

`;
