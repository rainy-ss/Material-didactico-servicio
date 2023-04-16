import React, { useState } from 'react';
import { Tema } from '../componentes/Tema.jsx';
import { bancoTemas } from '../scripts/bancoTemas.js';
import styled from 'styled-components';
import { theme } from '../theme';

export function ListaTemas () {
    const [temas] = useState(bancoTemas);

    // Añadir buscador de temas

    return (
        <StyledDiv>
            {
                temas.map((elemento) => (
                    <div key={elemento.id}>
                        <Tema
                            informacion= {elemento}
                            id = {elemento.id}
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
