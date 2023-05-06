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
    background-color: aquamarine;

  
`;

const StyledButtonRespuesta = styled.button`
    background-color: violet;
    .imagen{
        width: 100%;
    }
`;
