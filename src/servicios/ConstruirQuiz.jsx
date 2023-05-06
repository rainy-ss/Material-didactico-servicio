import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router';
import { Quiz } from '../paginas/Quiz/Quiz';
import { bancoTemas } from '../scripts/bancoTemas';
import { caracteristicasQuiz } from '../scripts/caracteristicasQuiz';

export function ConstruirQuiz () {
    const { tema, id } = useParams();
    const [datos, setDatos] = useState([]);

    /*
        Tenemos de parametros el tema y el id del quiz
        Cosas a considerar:
        1. Se puede llegar a este servicio sin haber pasado por la página de temas, por lo que es necesario validar que ambos parametros sean validos.
        2. Tomando el tema y el id del quiz, se debe llamar al servicio que construye el arreglo de preguntas de forma aleatoria y sus respuesta
           tambien seran de forma aleatoria (se simulara por el momento).

    */

    useEffect(() => {
        import(`../scripts/${tema}/arregloSVG.js`).then(modulo => {
            setDatos(modulo.default);
        });
    }, []);

    const objTema = bancoTemas.find(elemento => elemento.nombreRuta === tema);
    let objQuiz;
    let bandera = false;

    if (typeof objTema !== 'undefined') {
        const quiz = objTema.quizDisponible.find(elemento => elemento === parseInt(id));

        if ((typeof quiz) !== 'undefined') {
            objQuiz = caracteristicasQuiz.find(elemento => elemento.id === quiz);
            bandera = true;
            if (datos.length === 0) {
                return <p>cargando...</p>;
            }
        }
    }

    return (
        <div>
            {
                bandera
                    ? <Quiz objTema={objTema} objQuiz ={objQuiz} arreglo = {datos}/>
                    : <Navigate to={'*'} />
            }

        </div>

    );
}
