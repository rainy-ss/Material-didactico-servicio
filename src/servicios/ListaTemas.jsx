import React from 'react';
import { Tema } from '../componentes/Tema.jsx';
import { bancoTemas } from '../scripts/bancoTemas.js';
import styled from 'styled-components';
import { theme } from '../theme';

export function ListaTemas () {
    // Añadir buscador de temas

    return (
        <StyledDiv>
            {
                bancoTemas.map((elemento) => (
                    <div key={elemento.id}>
                        <Tema
                            informacion= {elemento}
                        />
                    </div>

                ))
            }
        </StyledDiv>
    );
}

const StyledDiv = styled.div`

    background-color: ${theme.palette.temas.main};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px;

`;
