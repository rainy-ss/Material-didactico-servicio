import React, { useState } from 'react';
import { Tema } from '../componentes/Tema.jsx';
import { bancoTemas } from '../scripts/bancoTemas.js';
import styled from 'styled-components';
import { theme } from '../theme';

export function ListaTemas () {
    const [busqueda, setBusqueda] = useState(bancoTemas);

    function filtrar () {
        const bancoFiltrado = [];
        const entrada = document.getElementById('entrada-texto').value;

        bancoTemas.forEach((elemento) => {
            if (elemento.nombre.toLowerCase().includes(entrada.toLowerCase())) {
                bancoFiltrado.push(elemento);
            }
        });
        setBusqueda(bancoFiltrado);
    }

    return (
        <StyledDiv>
            <input id='entrada-texto' type='text' placeholder='🔍 Buscar tema...' onChange={filtrar}/>
            {
                busqueda.map((elemento) => (
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

    & input{
        margin: 10px 0 10px;
        min-width: 50%;
        padding: 10px 10px 10px 20px;
        font-size: 1rem;
        font-family: inherit;
        border: 1px solid ${theme.palette.temas.busquedaBorder};
        border-radius: 15px;
        box-shadow: 0 0 5px 4px ${theme.palette.temas.busquedaShadow};
        color: ${theme.palette.temas.busquedaText};
    }

    & input:focus{
        outline:none !important;
        border: 1px solid ${theme.palette.temas.busquedaBorderFocused};
        box-shadow: 0 0 10px 4px ${theme.palette.temas.busquedaShadowFocused};
    }
`;
