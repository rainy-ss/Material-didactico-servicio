import React from 'react';
import styled from 'styled-components';
import { TituloConImagen } from './TituloConImagen.jsx';
import { ListaQuizzes } from '../servicios/ListaQuizzes.jsx';

export function Tema ({ informacion }) {
    return (
        <StyledContenedor>
            <TituloConImagen
                titulo={informacion.nombre}
            />

            <p>{informacion.descripcion}</p>

            <ListaQuizzes
                quizzesDisponibles = {informacion.quizDisponible}
            />

        </StyledContenedor>
    );
}

const StyledContenedor = styled.div`

background-color: blueviolet;
width: 400px;
padding: 10px;
display: flex;
flex-direction: column;

`;
