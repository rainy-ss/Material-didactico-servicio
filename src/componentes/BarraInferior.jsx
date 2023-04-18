import React, { useState } from 'react';

export function BarraInferior ({ terminar, temporizador, informacion }) {
    const [showInfo, setShowInfo] = useState();
    const [showExit, setShowExit] = useState();

    function mostrar () {
        setShowInfo(prev => !prev);
    }
    return (
        <div>
            <button onClick={mostrar}>informacion</button>
            { showInfo && informacion }
            <p>Soy una barra inferior</p>
        </div>
    );
}
