import React from 'react';
import { BarNav } from '../../componentes/BarNav';
import { ListaTemas } from '../../servicios/ListaTemas';

export function Temas () {
    return (
        <div>
            <BarNav />
            <ListaTemas/>

        </div>
    );
}
