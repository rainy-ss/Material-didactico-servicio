import React from 'react';
import { BarNav } from '../../componentes/BarNav';
import { TituloConImagen } from '../../componentes/TituloConImagen';

export function ListaDeTemas () {
    return (
        <div>
            <BarNav />
            <p>Soy una lista de temas disponibles</p>
            <TituloConImagen />
        </div>
    );
}
