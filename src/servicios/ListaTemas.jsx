import React, { useState } from 'react';
import { Tema } from '../componentes/Tema.jsx';
import { bancoTemas } from '../scripts/bancoTemas.js';

export function ListaTemas () {
    const [temas] = useState(bancoTemas);

    // Añadir buscador de temas

    return (
        <div>
            {

                temas.map((elemento) => (
                    <div key={elemento.id}>
                        <Tema
                            informacion= {elemento}
                        />
                    </div>

                ))
            }
        </div>
    );
}
