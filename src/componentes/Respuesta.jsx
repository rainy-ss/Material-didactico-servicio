import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

export function Respuesta ({ id, icon, tema, objRespuesta, manejaRespuesta }) {
    const [imagen, setImagen] = useState();
    const Icono = icon;

    useEffect(() => {
        import(`../scripts/${tema}/${objRespuesta.respuesta}.svg`)
            .then(module => {
                setImagen(module.default);
            });
    }, []);

    return (
        <StyledDiv className = {`contenedor-${id} contenedorRespuesta`} >
            <StyledButtonRespuesta >
                <img
                    className="imagen"
                    onClick={ () => manejaRespuesta(id, objRespuesta.respuestaCorrecta) }
                    src={imagen}
                    alt="soy una respuesta"
                />
                <IconContext.Provider value={{ className: 'icons' }}>
                    <Icono />
                </IconContext.Provider>
            </StyledButtonRespuesta>

        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    /* background-color: aquamarine; */

    &.contenedor-1{
        grid-column: 2;
        grid-row: 1;
        background-color: #7c000a;
    }

    &.contenedor-2{
        grid-column: 3;
        grid-row: 2;
    }

    &.contenedor-3{
        grid-column: 2;
        grid-row: 3;
    }

    &.contenedor-4{
        grid-column: 1;
        grid-row: 2;
    }
  
`;

const StyledButtonRespuesta = styled.button`
    background-color: transparent;
    
    .imagen{
        width: 100%;
        max-height: 10px;
    }
`;
