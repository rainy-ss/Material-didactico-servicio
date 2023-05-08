import React from 'react';
import styled from 'styled-components';

export function PanelRespuestas () {
    return (

        <StyledDiv>
            <p>Soy un panel de respuestas</p>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    padding: 10px;
    width: 85vw;
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 10px;
    grid-template-rows: repeat(3, 1fr);
    margin: 0 20vh;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;

    @media screen and (orientation:landscape) and (max-height: 550px) {
        min-height: 70vh;
        width: 100vw;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 20px;
        grid-column-gap: 0;
        grid-template-rows: repeat(4, 1fr);

    }

    @media screen and (max-width: 1000px),
    (min-height: 1000px) and (max-width: 1300px){
        width: 100vw;
        padding: 5px;
        margin: 0;

    }

    @media screen and (max-width: 760px) and (min-height: 550px){
        display: flex;
        flex-direction: column;
        margin: 5px;
    }


    
`;
