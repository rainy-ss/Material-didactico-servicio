import React from 'react';
import { Navigate, useParams } from 'react-router';
import { Quiz } from '../paginas/Quiz/Quiz';
import { bancoTemas } from '../scripts/bancoTemas';
import { caracteristicasQuiz } from '../scripts/caracteristicasQuiz';
import { arregloSVG } from '../scripts/arregloSVG.js';

export function ConstruirQuiz () {
    const { tema, id } = useParams();

    /*
        Tenemos de parametros el tema y el id del quiz
        Cosas a considerar:
        1. Se puede llegar a este servicio sin haber pasado por la página de temas, por lo que es necesario validar que ambos parametros sean validos.
        2. Tomando el tema y el id del quiz, se debe llamar al servicio que construye el arreglo de preguntas de forma aleatoria y sus respuesta
           tambien seran de forma aleatoria (se simulara por el momento).

    */

    const objTema = bancoTemas.find(elemento => elemento.nombreRuta === tema);
    let objQuiz;
    let bandera = false;

    if (typeof objTema !== 'undefined') {
        const quiz = objTema.quizDisponible.find(elemento => elemento === parseInt(id));

        if ((typeof quiz) !== 'undefined') {
            objQuiz = caracteristicasQuiz.find(elemento => elemento.id === quiz);
            bandera = true;
        }
    }

    return (
        <div>
            {
                bandera ? <Quiz objTema={objTema} objQuiz ={objQuiz} arreglo = {arregloSVG} /> : <Navigate to={'*'} />
            }

        </div>

    );
}
