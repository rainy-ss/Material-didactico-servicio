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
            <input id='entrada-texto' type='text' placeholder='Buscar tema...' onChange={filtrar}/>
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


`;
