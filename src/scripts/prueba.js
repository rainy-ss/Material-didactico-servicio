import pregunta from '../imagenes/formato1.svg';
import respuesta1 from '../imagenes/formato2.svg';
import respuesta2 from '../imagenes/formato3.svg';
import respuesta3 from '../imagenes/formato4.svg';
import respuesta4 from '../imagenes/formato5.svg';

const arr = [
    {
        svg: pregunta,
        id: 1 // el id será el que indique la carpeta

    },
    {
        svg: respuesta1,
        id: 0

    },
    {
        svg: respuesta2,
        id: 1
    },
    {
        svg: respuesta3,
        id: 2

    },
    {
        svg: respuesta4,
        id: 3

    }

];

export function Pregunta () {
    return arr;
}

export default Pregunta;
