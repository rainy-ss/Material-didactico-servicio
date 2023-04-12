import React from 'react';
import styled from 'styled-components';
import { TituloConImagen } from './TituloConImagen.jsx';
import { ListaQuiz } from '../servicios/ListaQuiz.jsx';

export function Tema ({ informacion }) {
    return (
        <StyledContenedor>
            <TituloConImagen />

            <p>{informacion.descripcion}</p>

            <ListaQuiz
                quizzesDisponibles = {informacion.quizDisponible}
            />

        </StyledContenedor>
    );
}

const StyledContenedor = styled.div`

background-color: aquamarine;
width: 400px;
padding: 10px;
display: flex;
flex-direction: column;

`;
