# Servicios que utiliza la aplicación

1. [ConstruirQuiz](./README.md#construirquiz)
2. [ListaQuizzes](./README.md#listaquizzes)
3. [ListaTemas](./README.md#listatemas)  



## `ConstruirQuiz`

> Servicio encargado de validar los datos que selecciono el usuario y llamar todos los elementos necesarios para construir el quiz.

### Parametros

Este servicio recibe parametros por medio de la url.

- `tema`: Indica al componente que tema eligio el usuario.
- `id`: Indica el id del quiz que selecciono para el tema.

```js
const { tema, id } = useParams();
```

### Variables  y Constantes

- `datos`: Contiene el arreglo de preguntas junto a sus respectivas respuestas.
- `objTema`: Contiene el resultado de la busqueda, busca dentro del banco temas el **tema** que llego como parametro.  
- `objQuiz`: Guarda el objeto del quiz seleccionado.
- `bandera`: Indica al programa si encontro el quiz seleccionado dentro del tema.
 
```js

const [datos, setDatos] = useState([]);
const objTema = bancoTemas.find(elemento => elemento.nombreRuta === tema);
let objQuiz;
let bandera = false;
```

---
Si el tema fue encontrado en el banco de temas se ejecuta lo siguiente:

1. Se comprueba si el quiz seleccionado también es valido en el tema.
2. Si es valido se guarda el objeto quiz correspondiente en **objQuiz**.
3. Si todo fue validado correctamente el sistema levanta una **bandera** para avisar que los datos son correctos y puede empezar a construir el quiz.
4. En caso de que los datos aún no estén cargados dentro de **datos** se retorna un aviso de *cargando*.

```js
if (typeof objTema !== 'undefined') {
    const quiz = objTema.quizDisponible.find(elemento => elemento === parseInt(id));

    if ((typeof quiz) !== 'undefined') {
        objQuiz = caracteristicasQuiz.find(elemento => elemento.id === quiz);
        bandera = true;
        if (datos.length === 0) {
            return <p>cargando...</p>;
        }
    }
}

```

---

1. Se manda a llamar al banco de preguntas del *tema* seleccionado y lo guarda en *banco*.
2. Se añaden una cantidad de id al arreglo *numeros* de acuerdo a la longitud del banco de preguntas.
3. Si el *objQuiz* no esta definido simplemente retorna un arreglo vacio. 
4. En caso de que contenga información *objQuiz* se pregunta cual es el maximo de preguntas que desea el usuario.
5. Se realiza un ordenamiento aleatorio a las respuestas y luego se añaden al arreglo final.

> Es necesario hacer la aclaración de la función *comparacionAleatoria()*, esta función es una forma simple de añadir aleatoriedad a los arreglos, sin embargo no es la forma más adecuada y puede mejorarse en un furuto.

```js 
useEffect(() => {
        import(`../scripts/${tema}/arregloSVG.js`).then(modulo => {
            const banco = modulo.default;
            const numeros = [];
            const arreglo = [];

            function comparacionAleatoria () {
                return Math.random() - 0.5;
            }

            for (let i = 0; i < banco.length; i++) {
                numeros.push(i);
            }

            numeros.sort(comparacionAleatoria);

            if ((typeof objQuiz) !== 'undefined') {
                if (objQuiz.maxPreguntas !== 0) {
                    for (let i = 0; i < objQuiz.maxPreguntas; i++) {
                        banco[numeros[i]].respuestas = banco[numeros[i]].respuestas.sort(comparacionAleatoria);

                        arreglo.push(banco[numeros[i]]);
                    }
                } else {
                    for (let i = 0; i < banco.length; i++) {
                        banco[numeros[i]].respuestas = banco[numeros[i]].respuestas.sort(comparacionAleatoria);

                        arreglo.push(banco[numeros[i]]);
                    }
                }
            }

            setDatos(arreglo);
        });
    }, []);

```

---

Se revisa el estado de la bandera:  
- Si es *true* se renderiza el componente **Quiz** con el objeto tema, objeto quiz y el arreglo construido. 
- En caso contrario renderiza la página 404.

```js

return ( 
    <div>
    {
        bandera
            ? <Quiz objTema={objTema} objQuiz ={objQuiz} arreglo = {datos}/>
            : <Navigate to={'*'} />
    }
    </div>

);
```

--- 
---

## `ListaQuizzes`

> Servicio encargado de construir los quizzes disponibles dentro de los temas.

### Parametros

- `nombreRuta`: El nombre del tema seleccionado.
- `quizzesDisponibles`: Los quizzes que tiene disponibles el tema. 

### Variables  y Constantes

```js
const [quizzesTema, setQuizzesTema] = useState([]);
```

--- 

Busca y guarda en **arr** los objetos de los quizzes disponibles en el tema. 

```js
function filtrarPorID () {
    const arr = [];
    for (let i = 0; i < quizzesDisponibles.length; i++) {
        const obj = caracteristicasQuiz.findIndex(quiz => quiz.id === quizzesDisponibles[i]);

        if (!obj !== -1) {
            arr.push(caracteristicasQuiz[obj]);
        }
    }
    return arr;
}
```

---

Llama a la función *filtrarPorID()* y carga la información en **quizzesTema**

```js
useEffect(() => {
    setQuizzesTema(filtrarPorID());
}, []);
```

---

Retorna todos los quiz disponibles en el tema en forma de boton.

```js
return (
    <StyledQuizzes>
        {
            quizzesTema.map((elemento) => (
                <div key={elemento.id}>
                    <BotonQuiz
                        nombreRuta = {nombreRuta}
                        caracteristicas={elemento}
                    />
                </div>
            ))
        }

    </StyledQuizzes>
);
```

---  
---

## `ListaTemas`

> Servicio encargado de construir la lista de temas para la página.

### Parametros

Este componente no recibe parametros.

### Variables  y Constantes

- `busqueda`: Su valor inicial es el banco de temas, si el usuario realiza una busqueda se actualiza con el nuevo valor.

```js
const [busqueda, setBusqueda] = useState(bancoTemas);
```
---

Se recupera lo que el usuario ingreso en el campo de busqueda *entrada-texto* y se busca en cada uno de los elementos del **bancoTemas**  

```js
function filtrar () {
        const bancoFiltrado = [];
        const entrada = document.getElementById('entrada-texto').value;

        bancoTemas.forEach((elemento) => {
            if (elemento.nombre.toLowerCase().includes(entrada.toLowerCase())) {
                bancoFiltrado.push(elemento);
            }
        });
        setBusqueda(bancoFiltrado);
    }
```

---

Retorna un campo de texto para realizar una busqueda y los temas disponibles en forma de botones.

```js
return(
    <StyledDiv>
        <input id='entrada-texto' type='text' placeholder='🔍 Buscar tema...' onChange={filtrar}/>
        {
            busqueda.map((elemento) => (
                <div key={elemento.id}>
                    <Tema
                        informacion= {elemento}
                    />
                </div>

            ))
        }
    </StyledDiv>
);
```