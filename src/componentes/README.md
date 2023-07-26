# Componentes de la aplicacion

1. [AlertaSalir](./README.md#alertasalir)
2. [BarNav](./README.md#barnav)
3. [BarraInferior](./README.md#barrainferior)
4. [BarraSuperior](./README.md#barrasuperior)
5. [BotonQuiz](./README.md#botonquiz)
6. [ContenedorRespuestas](./README.md#contenedorrespuestas)
7. [Informacion](./README.md#informacion)
8. [Panel](./README.md#panel)
9. [PanelRespuestas](./README.md#panelrespuestas)
10. [Pregunta](./README.md#pregunta)
11. [Respuesta](./README.md#respuesta)
12. [Resultados](./README.md#resultados)
13. [Tema](./README.md#tema)
14. [Temporizador](./README.md#temporizador)
15. [TituloConImagen](./README.md#tituloconimagen)
---
---

## `AlertaSalir`

Componente que renderiza una alerta cuando el usuario intenta salir del quiz.

### Parametros

- `mostrarAlerta`: Una función que intercala el estado de la alerta (activar/desactivar).

### Variables  y Constantes

Este componente no tiene variables y constantes generales. 

--- 

Despliega una alerta que avisa al usuario que esta a punto de salir del quiz en progreso y pide la confirmación de la salida.

```js
export function AlertaSalir ({ mostrarAlerta }) {
    return (
        <StyledAlerta>
            <StyledContent>
                <h2>¿Seguro que deseas salir?</h2>
                <p>Si sales, perderás todo tu progreso.</p>
            </StyledContent>
            <StyledButtonDiv>
                <StyledBoton variant={variantButtonContinue} onClick={mostrarAlerta}>Regresar al Quiz</StyledBoton>
                <StyledBoton variant={variantButtonExit} as={Link} to = {'/temas'}>Salir</StyledBoton>
            </StyledButtonDiv>
        </StyledAlerta>
    );
}
```
---
---

## `BarNav`

Componente que renderiza la barra de navegación de las páginas principales.

### Parametros

Este componente no recibe parametros.

### Variables  y Constantes

- `showMenu`: Cuando la aplicación se visualiza en pantallas pequeñas, controla el menu disponible.

```js
const [showMenu, setShowMenu] = useState(false);
```
---

Retorna la barra de navegación, incluye una imagen y la lista de paginas disponibles en el dominio.

```js

    return (

        <StyledNavBar className='barra-navegacion'>

            <img className='logo-uam' src={UAM} alt={'logo uam'} role='img'/>

            <ul className={`${showMenu ? ' barra-lista-enlaces active' : 'barra-lista-enlaces '}`}>
                <li className='barra-enlace'>
                    <StyledLinkBar to={'/'}>Home</StyledLinkBar>
                </li>
                <li className='barra-enlace'>
                    <StyledLinkBar to={'/temas'}>Lista de Temas</StyledLinkBar>
                </li>

            </ul>
            <div className='icono-barra'>
                <button onClick={() => handleMenu()}>{showMenu ? <FaRegWindowClose /> : <FaBars />}</button>
            </div>

        </StyledNavBar>
    );
```


---
---

## `BarraInferior`

Componente que renderiza la barra inferior del quiz.

### Parametros

- `showInfo`: Controla cuando se muestra la informacion.  
- `informacion`: Contiene la información del quiz actual, controles, reglas, etc.  
- `mostrar`: Función que intercala el renderizado de la información.  
- `numeroPregunta`: Lleva en conteo de la pregunta actual del quiz.  
- `maxPreguntas`: Muestra la cantidad de preguntas que contiene el quiz actual.


### Variables  y Constantes

-`showExit`: Controla cuando se muestra la alerta de salida. 

```js
const [showExit, setShowExit] = useState();
```

---

Retorna la barra inferior del quiz, contiene un boton para consultar la información, un contador para las preguntas y un boton para salir del quiz.

```js
    return (
        <StyledDiv variant = {theme.palette.Quiz.BottomBar.background}>
            <StyledButton variant = {variantButtonInfo} onClick={mostrar}>Informacion</StyledButton>
            { showInfo && informacion }
            {showExit && <AlertaSalir mostrarAlerta = {mostrarAlerta}/>}

            <StyledContador variant={variantOptions}>
                <p>{numeroPregunta} { maxPreguntas !== 0 && ('/' + maxPreguntas)}</p>

            </StyledContador>
            <StyledButton variant = {variantButtonExit} onClick={mostrarAlerta}>Salir</StyledButton>
        </StyledDiv>
    );
```


---
---

## `BarraSuperior`

Componente que renderiza la barra superior del quiz.

### Parametros

- `temporizador`: Recibe un componente [temporizador](./README.md#temporizador)    
- `nombre`: Recibe el nombre del tema.

### Variables  y Constantes

Este componente no tiene variables y constantes generales. 

---  

Retorna la barra superior del quiz, manda a construir un componente [TituloConImagen](./README.md#tituloconimagen) y añade el temporizador que recibe como parametro.

```js
    return (
        <StyledDiv variant = {theme.palette.Quiz.UpperBar.background}>
            <TituloConImagen
                titulo={nombre}
                colorTitulo={theme.palette.Quiz.UpperBar.titleText}
            />

            {temporizador}

        </StyledDiv>
    );
```

---
---

## `BotonQuiz`

Componente que renderiza el boton de cada quiz dentro de los temas.

### Parametros

- `nombreRuta`: Nombre del tema.  
- `caracteristicas`: Contiene el objeto del quiz.

### Variables  y Constantes

Este componente no tiene variables y constantes generales. 

---

Retorna un boton que contiene un link, este redirecciona al usuario al quiz que solicitó. 

```js
    return (
        <StyledDiv>
            <StyledBoton as={Link} to = {`/quiz/${nombreRuta}/${caracteristicas.id}`}>{caracteristicas.nombre}</StyledBoton>
        </StyledDiv>
    );
```

---
---

## `ContenedorRespuestas`

Componente que renderiza el contenedor de las respuestas al final del quiz.

### Parametros

- `id`: 
- `esPregunta`: Identifica si debe mostrar una pregunta o una respuesta. 
- `tema`: Tema general del que se basa el quiz.
- `link`: Nombre de la pregunta.
- `estilo`: Almacena el estilo(color) de si la respuesta es correcta o incorrecta.


### Variables  y Constantes

-`imagen`: Almacena el svg de la pregunta.

```js
    const [imagen, setImagen] = useState();
```

---

Busca el svg en el banco de preguntas del tema dado y carga el svg en el estado **imagen**. 

```js
useEffect(() => {
    import(`../scripts/${tema}/${link}.svg`)
        .then(module => {
            setImagen(module.default);
    });
}, [link]);
```

---

Determina el estilo(CSS) que se asignara a la respuesta.

```js
function determinarEstilo () {
    if (estilo === 'correct') {
        return variantOptionsCorrect;
    } else if (estilo === 'incorrect') {
        return variantOptionsIncorrect;
    } else {
        return variantOptionsNone;
    }
}
```

---

Retorna un componente que contiene un svg de una pregunta o un svg de una respuesta con su respectivo fondo de correcto/incorrecto.

```js
return (
    <>
        {
            esPregunta
                ? <StyledPregunta className={`${id} contenedorPregunta`} variant = {variantPregunta}>
                    <img
                        className="img"
                        src={imagen}
                        alt="soy una pregunta"
                    />

                </StyledPregunta>
                : <StyledRespuesta className={`contenedor-${id} contenedorRespuesta`} variant={determinarEstilo()}>
                    <img
                        className="img"
                        src={imagen}
                        alt="soy una respuesta"
                    />

            </StyledRespuesta>

            }
        </>

    );
```


---
---

## `Informacion`

Componente que renderiza la información relacionada con el quiz.

### Parametros

- `iniciar`: Función que inicia el quiz. 
- `isStarted`: Indica si el quiz ha iniciado.  
- `mostrar`: Intercala la aparición de la ventana de información.

### Variables  y Constantes

Este componente no tiene variables y constantes generales. 

---

Retorna una ventana emergente con: 
 - Información del quiz
 - Descripción del tema 
 - Controles

```js

    return (
        <StyledInfo variant={variantOptionsMain}>
            {
                isStarted &&
                    <StyledIcon>
                        <HiXMark onClick={mostrar} />
                    </StyledIcon>
            }
            <StyledContent variant={variantContentOptions}>
                <StyledDescription>
                    <h2>Información</h2>
                    <p>Descripcion....</p>
                </StyledDescription>
                <StyledControls variant = {variantOptionsControls}>
                    <h2>Controles</h2>
                    <ul className='lista-controles'>
                        <li>
                            <img className="icons" src={Click} />
                            <p>Click</p>
                        </li>
                        <li>
                            <img className="icons" src={Touch} />
                            <p>Apretar</p>
                        </li>
                        <li>
                            <img className="icons" src={Flechas} />
                            <p>Teclado</p>
                        </li>
                    </ul>
                </StyledControls>
            </StyledContent>
            {
                !isStarted &&
                <StyledBtnDiv>
                    <StyledBoton variant = {variantButtonStart} onClick={iniciar}>Comenzar el quiz</StyledBoton>
                    <StyledBoton variant = {variantButtonExit} as={Link} to = {'/temas'} >Salir el quiz</StyledBoton>
                </StyledBtnDiv>
            }
        </StyledInfo>
    );
```

---
---

## `Panel`

Componente que renderiza el contenedor de las preguntas con sus respectivas respuestas.

### Parametros

- `preguntas`: Arreglo de SVG que incluyen las preguntas con sus respuestas. 
- `respuestasUsuario`: Arreglo que almacena las respuestas del usuario. 
- `numeroPregunta`: Indica el número de la pregunta actual.
- `actualizarPregunta`: Función que actualiza la pregunta cuando el usuario selecciona una respuesta. 
- `terminar`: Función que finaliza el quiz.
- `tema`: Indica el tema del quiz.

### Variables  y Constantes

- `imagen`: Guarda la imagen de si la respuesta fue correcta o incorrecta. 
- `iconos`: Arreglo de los iconos de flecha para las respuestas.
- `aviso`: Señal que manda el aviso para la alerta de correcto/incorrecto.

```js
let imagen = null;
const iconos = [FaLongArrowAltUp, FaLongArrowAltRight, FaLongArrowAltDown, FaLongArrowAltLeft];
const [aviso, SetAviso] = useState(false);
```
---

Función recibe el id de la respuesta y hace lo siguiente: 
  1. Revisa si la respuesta seleccionada fue correcta o no. Lanza un aviso para mostrar si fue correcta o no al usuario.   

  2. Almacena la respuesta del usuario en **respuestasUsuario**.  
  
  3. Comprueba si fue la ultima pregunta del quiz, de ser asi termina el quiz, en otro caso actualiza la pregunta.


```js
function manejaRespuesta (id, esCorrecta) {
        if (esCorrecta) {
            imagen = correcta;
        } else {
            imagen = incorrecta;
        }
        SetAviso(true);
        setTimeout(() => {
            respuestasUsuario.push({ id, esCorrecta });
            if (numeroPregunta === (preguntas.length - 1)) {
                terminar();
            } else {
                SetAviso(false);
                actualizarPregunta();
            }
        }, 500);
    }
```

---

Función que captura los eventos del teclado(flechas) para determinar la respuesta seleccionada.

```js
function handleKeyUp (event) {
        if (event.key === 'ArrowUp') {
            manejaRespuesta(preguntas[numeroPregunta].respuestas[0].id, preguntas[numeroPregunta].respuestas[0].respuestaCorrecta);
        } else if (event.key === 'ArrowRight') {
            manejaRespuesta(preguntas[numeroPregunta].respuestas[1].id, preguntas[numeroPregunta].respuestas[1].respuestaCorrecta);
        } else if (event.key === 'ArrowDown') {
            manejaRespuesta(preguntas[numeroPregunta].respuestas[2].id, preguntas[numeroPregunta].respuestas[2].respuestaCorrecta);
        } else if (event.key === 'ArrowLeft') {
            manejaRespuesta(preguntas[numeroPregunta].respuestas[3].id, preguntas[numeroPregunta].respuestas[3].respuestaCorrecta);
        }
    }
```

---

Retorna el contenedor de las preguntas durante el quiz.

```js
    return (

        <StyledDiv onKeyUp={handleKeyUp} tabIndex={0} >

            <Pregunta
                link={preguntas[numeroPregunta].pregunta}
                tema = {tema}
            />

            {
                aviso
                    ? null
                    : preguntas[numeroPregunta].respuestas.map((respuestaActual, index) => (

                        <Respuesta
                            key={respuestaActual.id}
                            id = {index + 1}
                            tema = {tema}
                            objRespuesta = {respuestaActual}
                            manejaRespuesta = {manejaRespuesta}
                            icon={iconos[index]}
                        />

                    ))

            }
            {
                aviso ? <div className='esCorrecta'><img src={imagen}/></div> : null
            }

        </StyledDiv>
    );
```

---
---

## `PanelRespuestas`

Componente que renderiza el contenedor de las respuestas cuando el usuario ha terminado el quiz.

### Parametros

- `preguntas`: Arreglo de preguntas original.
- `respuestas`: Arreglo con las respuestas de usuario.
- `numeroPregunta`: Contador que marca la posición del arreglo.
- `tema`: Tema del quiz.


### Variables  y Constantes

Este componente no tiene variables y constantes generales. 


---

Función que define el estilo(CSS) de las respuestas, indicando si son correctas o incorrectas.
 
```js
function determinarEstilo (index, correcta) {
    if (correcta || (correcta && index === respuestas[numeroPregunta].id)) {
        return 'correct';
    } else if (respuestas[numeroPregunta].id === index && !correcta) {
        return 'incorrect';
    } else {
        return 'none';
    }
}
```

---

Retorna el panel que contiene las respuestas.

```js
return (
    <>
        <StyledDiv>
            <ContenedorRespuestas
                id={'pregunta' + numeroPregunta}
                esPregunta={true}
                tema={tema}
                link={preguntas[numeroPregunta].pregunta}
                estilo = {'none'}
            />

            {
                preguntas[numeroPregunta].respuestas.map((respuestaActual, index) => (

                    <ContenedorRespuestas
                        key={respuestaActual.id}
                        id={(index + 1)}
                        esPregunta={false}
                        tema={tema}
                        link={respuestaActual.respuesta}
                        estilo={determinarEstilo(index + 1, respuestaActual.respuestaCorrecta)}
                    />

                ))

            }

        </StyledDiv>
    </>

);
```

---
---

## `Pregunta`

Componente que renderiza la pregunta actual del quiz.

### Parametros

- `id`: Identificador del elemento.
- `tema`: Tema del quiz.
- `link`: Nombre del SVG.


### Variables  y Constantes

- `imagen`: Almacena el SVG. 

```js
const [imagen, setImagen] = useState();
```

---

Función que busca el SVG en el **tema** dado, con el nombre que recibe de **link** y lo almacena en el estado **imagen**.

```js
useEffect(() => {
    import(`../scripts/${tema}/${link}.svg`)
        .then(module => {
            setImagen(module.default);
        });
}, [link]);
```

---

Retorna un componente que contiene el SVG solicitado.

```js


return (
    <StyledDiv className = {`contenedor-${id} contenedorPregunta`} variant={variantOptions}>
        <img
        className="imagen"
            src={imagen}
            alt = "soy una pregunta"
        />
    </StyledDiv>
);
```

---
---

## `Respuesta`

### Parametros

- `id`: Identificador del elemento.
- `icon`:
- `tema`: Tema del quiz
- `objRespuesta`: Objeto que contiene el id, el nombre del SVG y si es correcta.
- `manejaRespuesta`: Función que recibe la respuesta seleccionada.


### Variables  y Constantes

- `imagen`: Almacena el SVG correspondiente. 
- `Icono`: Almacena el icono de flecha correspondiente.


```js
const [imagen, setImagen] = useState();
const Icono = icon;
```

---

Función que busca el SVG en el **tema** dado, con el nombre que recibe de **link** y lo almacena en el estado **imagen**.

```js
useEffect(() => {
    import(`../scripts/${tema}/${objRespuesta.respuesta}.svg`)
        .then(module => {
            setImagen(module.default);
        });
}, [objRespuesta.respuesta]);
```

---

Retorna un componente que contiene el SVG solicitado y su icono.

```js

return (
    <StyledDiv className = {`contenedor-${id} contenedorRespuesta`} >

        <StyledButtonRespuesta variant={variantOptions}>
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
```

---
---

## `Resultados`

### Parametros

### Variables  y Constantes

---
---

## `Tema`

Componente que renderiza el tema.

### Parametros

- `informacion`: Objeto que contiene toda la información del tema.
- `mostrar`: Indica si el tema se despliega por defecto.

### Variables  y Constantes

- `clicked`: Indica si se despliega el tema.

```js
const [clicked, setClicked] = useState(mostrar);
```

---

Función que intercala el despliegue del tema. 

```js
function toggle () {
    setClicked(prev => !prev);
};

```

---

Retorna un contenedor con el tema solicitado.

```js
return (
    <StyledContenedor>
        <div className='headerTema' onClick={toggle}>
            <TituloConImagen
                titulo={informacion.nombre}
                colorTitulo = {theme.palette.temas.title}
            />
            <p>{clicked ? <HiOutlineMinus/> : <HiPlus/>}</p>
        </div>
        <div className={clicked ? 'contenidoTema mostrar' : 'contenidoTema'}>
            <p>{informacion.descripcion}</p>

            <ListaQuizzes
                nombreRuta = {informacion.nombreRuta}
                quizzesDisponibles = {informacion.quizDisponible}
            />
        </div>
    </StyledContenedor>
);
```

---
---

## `Temporizador`

### Parametros

### Variables  y Constantes

---
---

## `TituloConImagen`

Componente que renderiza el formato de los titulos, incluyen imagen y texto.

### Parametros

- `imagen`: Imagen o icono que representa el tema.
- `titulo`: Titulo del tema.
- `colorTitulo`: Indica el color de la fuente.


### Variables  y Constantes

Este componente no tiene variables y constantes generales. 

--- 

Retorna el titulo solicitado acompañado de una imagen o icono.

```js
return (
    <StyledDiv >
        <StyledDivIMG>
            <img src={imagen} />
        </StyledDivIMG>
        <StyledDivH4 variant = {colorTitulo}>
            <h4>{titulo}</h4>
        </StyledDivH4>

    </StyledDiv>
);
```

