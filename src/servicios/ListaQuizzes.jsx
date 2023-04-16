import React, { useEffect, useState } from 'react';
import { caracteristicasQuiz } from '../scripts/caracteristicasQuiz.js';
import { BotonQuiz } from '../componentes/BotonQuiz.jsx';
import styled from 'styled-components';


export function ListaQuizzes ({ quizzesDisponibles = [] }) {
    const [quizzesTema, setQuizzesTema] = useState([]);

    function filtrarPorID () {
        const arr = [];
        for (let i = 0; i < quizzesDisponibles.length; i++) {
            const obj = caracteristicasQuiz.findIndex(quiz => quiz.id === quizzesDisponibles[i]);

            if (!obj !== -1) {
                arr.push(caracteristicasQuiz[obj]);
            }
        }
        return arr;
    }

    useEffect(() => {
        setQuizzesTema(filtrarPorID());
    }, []);

    return (
        <StyledQuizzes>
            
                {
                    quizzesTema.map((elemento) => (

                        <div key={elemento.id}>
                            <BotonQuiz
                                caracteristicas={elemento}
                            />
                        </div>
                    ))
                }
            
        </StyledQuizzes>
    );
}

const StyledQuizzes = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    gap: 8px;

    
    

`;
