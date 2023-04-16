import React, { useState } from 'react';
import styled from 'styled-components';
import { TituloConImagen } from './TituloConImagen.jsx';
import { ListaQuizzes } from '../servicios/ListaQuizzes.jsx';
import { theme } from '../theme.js';
import { HiPlus, HiOutlineMinus } from "react-icons/hi2";

export function Tema ({ informacion, id }) {

    const [clicked, setClicked] = useState([]);

     const toggle = (i) => {
        if (clicked.includes( i )) {
            let ind = clicked.indexOf(i);
            return setClicked(arr =>{ return [...arr.slice(0, ind),...arr.slice(ind + 1)]});
        } else {
            setClicked(arr => [...arr, i]);
            
        }
    }

    return (
        <StyledContenedor>
            <div className='headerTema' onClick={() => toggle(id)}>
                <TituloConImagen
                    titulo={informacion.nombre}
                    colorTitulo = {theme.palette.temas.title}
                />
                <p>{clicked.includes(id)  ? <HiOutlineMinus/> : <HiPlus/>}</p>
            </div>
            <div  className={clicked.includes(id) ? "contenidoTema mostrar" : "contenidoTema"}>
                <p>{informacion.descripcion}</p>

                <ListaQuizzes
                    quizzesDisponibles = {informacion.quizDisponible}
                />
            </div>
        </StyledContenedor>
    );
}

const StyledContenedor = styled.div`

    background-color: ${theme.palette.temas.secondary};
    width: 60vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
    color: ${theme.palette.temas.textColor};

    .headerTema{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }

    .headerTema p{
        margin-right: 20px;
        
    }

    .contenidoTema{
        max-height: 0;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0,1,0,1);
    }

    .contenidoTema.mostrar{
        height: auto;
        max-height: 999px;
        transition: all 0.5s cubic-bezier(1,0,1,0);
    }

`;
