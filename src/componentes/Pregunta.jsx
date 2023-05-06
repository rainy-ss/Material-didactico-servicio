import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export function Pregunta ({ id, tema, link }) {
    const [imagen, setImagen] = useState();

    useEffect(() => {
        import(`../scripts/${tema}/${link}.svg`)
            .then(module => {
                setImagen(module.default);
            });
    }, []);

    return (
        <StyledDiv className = {`contenedor-${id} contenedorPregunta`} >
            <img
                className="imagen"
                src={imagen}
                alt = "soy una pregunta"
            />
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    background-color: aquamarine;

    
`;
