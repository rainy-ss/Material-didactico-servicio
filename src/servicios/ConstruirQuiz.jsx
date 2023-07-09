import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router';
import { Quiz } from '../paginas/Quiz/Quiz';
import { bancoTemas } from '../scripts/bancoTemas';
import { caracteristicasQuiz } from '../scripts/caracteristicasQuiz';

export function ConstruirQuiz () {
    const { tema, id } = useParams();
    const [datos, setDatos] = useState([]);

    const objTema = bancoTemas.find(elemento => elemento.nombreRuta === tema);
    let objQuiz;
    let bandera = false;
    localStorage.removeItem('respuestas');

    useEffect(() => {
        import(`../scripts/${tema}/arregloSVG.js`).then(modulo => {
            const banco = modulo.default;
            const numeros = [];
            const arreglo = [];

            function comparacionAleatoria () {
                return Math.random() - 0.5;
            }

            for (let i = 0; i < banco.length; i++) {
                numeros.push(i);
            }

            numeros.sort(comparacionAleatoria);

            if ((typeof objQuiz) !== 'undefined') {
                if (objQuiz.maxPreguntas !== 0) {
                    for (let i = 0; i < objQuiz.maxPreguntas; i++) {
                        banco[numeros[i]].respuestas = banco[numeros[i]].respuestas.sort(comparacionAleatoria);

                        arreglo.push(banco[numeros[i]]);
                    }
                } else {
                    for (let i = 0; i < banco.length; i++) {
                        banco[numeros[i]].respuestas = banco[numeros[i]].respuestas.sort(comparacionAleatoria);

                        arreglo.push(banco[numeros[i]]);
                    }
                }
            }

            setDatos(arreglo);
        });
    }, []);

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
