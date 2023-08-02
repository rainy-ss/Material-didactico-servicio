# Paginas

## Quiz

Página que renderiza todo lo relacionado al quiz seleccionado por el usuario.

### Parametros

- `objTema`: Objeto que incluye toda la información del tema seleccionado.
- `objQuiz`: Objeto que incluye toda la información del quiz seleccionado.
- `arreglo`: Arreglo de preguntas del quiz.

### Variables y Constantes

- `respuestasUsuario`: Almacena las respuestas del usuario.
- `isStarted`: Indica si ya inicio el quiz.
- `isFinished`: Indica si finalizo el quiz.
- `showInfo`: Indica si muestra la información del quiz.
- `tiempoFinal`: Guarda el tiempo final del usuario.
- `numeroPregunta`: Indica la pregunta actual del quiz.
- `informacion`: Componente que muestra la información del quiz seleccionado.
- `temporizador`: [Temporizador](../componentes/README.md#temporizador) que muestra el tiempo del quiz.



```js
const respuestasUsuario = [];
const [isStarted, setIsStarted] = useState(false);
const [isFinished, setIsFinished] = useState(false);
const [showInfo, setShowInfo] = useState(false);
const [tiempoFinal, setTiempoFinal] = useState(0);
const [numeroPregunta, setNumeroPregunta] = useState(0);

const informacion = <Informacion
    iniciar = {iniciar}
    isStarted = {isStarted}
    mostrar = {mostrar}
/>;

const temporizador = <Temporizador
    temporizador = {objQuiz.temporizador}
    isStarted = {isStarted}
    isFinished = {isFinished}
    terminar = {terminar}
    tiempoFinal = {determinarTiempo}
/>;
```

---
---

Actualiza el estado del quiz a iniciado cuando el usuario lo indica.

```js
function iniciar () {
    setIsStarted(prev => !prev);
}
```

---

Intercala el estado de showInfo.

```js
function mostrar () {
    setShowInfo(prev => !prev);
}
```

---

Almacena en el local storage las respuestas del usuario y finaliza el quiz.

```js
function terminar () {
    localStorage.setItem('respuestas', JSON.stringify(respuestasUsuario));
    setIsFinished(true);
}
```

---

Almacena en el estado **tiempoFinal** el tiempo del usuario.

```js
function determinarTiempo (tiempo) {
    setTiempoFinal(tiempo);
}
```

---

Aumenta el contador de las preguntas en 1 y actualiza la pregunta.

```js
function actualizarPregunta () {
    setNumeroPregunta(prev => prev + 1);
}
```

---

Retorna un conjunto de componentes:

- [BarraSuperior](../componentes/README.md#barrasuperior).
- [Panel](../componentes/README.md#panel).
- [BarraInferior](../componentes/README.md#barrainferior).
- [Resultados](../componentes/README.md#resultados).
- [Informacion](../componentes/README.md#informacion).

```js
return (
    <StyledQuiz variant = {theme.palette.Quiz.background}>

        <BarraSuperior
            nombre = {objTema.nombre}
            temporizador = {temporizador}

        />

        {
            isFinished
                ? <>
                    <Resultados
                        tiempoFinal = {tiempoFinal}
                        preguntas ={arreglo}
                        temporizador = {objQuiz.temporizador}
                        tema = {objTema.nombreRuta}
                        id = {objQuiz.id}
                    />
                </>
                : isStarted
                    ? <>

                        <Panel
                            preguntas ={arreglo}
                            respuestasUsuario = {respuestasUsuario}
                            numeroPregunta = {numeroPregunta}
                            actualizarPregunta = {actualizarPregunta}
                            terminar = {terminar}
                            tema = {objTema.nombreRuta}
                        />
                        <BarraInferior
                            informacion = {informacion}
                            showInfo = {showInfo}
                            mostrar = {mostrar}
                            numeroPregunta = {numeroPregunta + 1}
                            maxPreguntas = {objQuiz.maxPreguntas}
                        />
                    </>

                    : informacion
        }
    </StyledQuiz>

);
```