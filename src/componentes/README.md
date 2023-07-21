# Componentes de la aplicacion

1. [AlertaSalir](./README.md#alertasalir)
2. [BarNav](./README.md#barnav)
3. [BarraInferior](./README.md#barrainferior)
4. [BarraSuperior](./README.md#barrasuperior)
5. [BotonQuiz](./README.md#botonquiz)
6. [ContenedorRespuestas](./README.md#contenedorrespuestas)
7. [Informacion](./README.md#informacion)
8. [Panel](./README.md#panel)
9. [PanelRespuesta](./README.md#panelrespuesta)
10. [Pregunta](./README.md#pregunta)
11. [Respuesta](./README.md#respuesta)
11. [Resultados](./README.md#resultados)
11. [Tema](./README.md#tema)
11. [Temporizador](./README.md#temporizador)
11. [TituloConImagen](./README.md#tituloconimagen)
---
---

## `AlertaSalir`

Componente que renderiza una alerta cuando el usuario intenta salir del quiz.

### Parametros

- `mostrarAlerta`: Una función que intercala el estado de la alerta (activar/desactivar).

### Variables  y Constantes

No tiene variables ni constantes.

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

-`showInfo`: Controla cuando se muestra la informacion.  
-`informacion`: Contiene la información del quiz actual, controles, reglas, etc.  
-`mostrar`: Función que intercala el renderizado de la información.  
-`numeroPregunta`: Lleva en conteo de la pregunta actual del quiz.  
-`maxPreguntas`: Muestra la cantidad de preguntas que contiene el quiz actual.


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

-`temporizador`: Recibe un componente [temporizador](./README.md#temporizador)    
-`nombre`: Recibe el nombre del tema.

### Variables  y Constantes

Este componente no tiene variables ni constantes. 

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

### Parametros

### Variables  y Constantes

---
---

## `ContenedorRespuestas`

### Parametros

### Variables  y Constantes

---
---

## `Informacion`

### Parametros

### Variables  y Constantes

---
---

## `Panel`

### Parametros

### Variables  y Constantes

---
---

## `PanelRespuesta`

### Parametros

### Variables  y Constantes

---
---

## `Pregunta`

### Parametros

### Variables  y Constantes

---
---

## `Respuesta`

### Parametros

### Variables  y Constantes

---
---

## `Resultados`

### Parametros

### Variables  y Constantes

---
---

## `Tema`

### Parametros

### Variables  y Constantes

---
---

## `Temporizador`

### Parametros

### Variables  y Constantes

---
---

## `TituloConImagen`

### Parametros

### Variables  y Constantes


