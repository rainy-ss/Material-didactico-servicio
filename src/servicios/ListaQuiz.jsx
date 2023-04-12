import React, { useState } from 'react';
import { caracteristicasQuiz } from '../scripts/caracteristicasQuiz.js';

export function ListaQuiz ({ quizzesDisponibles }) {
    const [quizzes] = useState(caracteristicasQuiz);
    return (
        <div>
            <p>Hacer el filtrado de quizzesDisponibles en este tema comparando con el arreglo quizzes</p>

            {
                quizzes.map((elemento) => (
                    <p key={elemento.id}>{elemento.nombre}</p>
                ))
            }
        </div>
    );
}
