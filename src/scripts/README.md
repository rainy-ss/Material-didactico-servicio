# Descripción de los Scripts 

## `bancoTemas.js`

Este archivo contiene los temas disponibles en la página, estos temas están almacenados como objetos y sigue el siguiente formato: 

- `id`: Este id debe ser único.  
- `nombre`: Este nombre puede llevar acentos, mayusculas y espacios, se usa para la interfaz que ve el usuario. 
- `descripcion`: La descripción que acompaña al tema y explica de que se trata.
- `nombreRuta`: Este nombre se utiliza en la construcción de las rutas y en las operaciones de busqueda dentro de la aplicación, debe ir todo en minusculas, sin acentos ni espacios.
- `quizDisponible`: Es un arreglo que contiene los id de los quiz disponibles en este tema, estos id los encontrara en el siguiente scrip *caracteristicasQuiz.js*.

```js
        id: 0,
        nombre: 'Nombre del tema',
        descripcion: 'Descripción del tema',
        nombreRuta: 'Nombre del tema sin espacios, mayusculas, ni acentos, etc...',
        quizDisponible: [0, 2, 3]
```

## `caracteristicasQuiz.js`

- `id`: Este id debe ser único.  
- `nombre`: Este nombre puede llevar acentos, mayusculas y espacios, se usa para la interfaz que ve el usuario. 
- `descripcion`: Describe el objetivo del quiz. 
- `temporizador`: Un número entero, representa los minutos que dura el quiz. Si se coloca 0 indica que el quiz no tiene limite de tiempo.
- `maxPreguntas`: Un número entero, representa la cantidad de preguntas que tendrá el quiz. Si se coloca 0 la cantidad de preguntas será el banco completo.
- `reglas`: Es un arreglo de objetos, cada objeto es una regla a seguir para realizar este tipo de quiz.

```js
        id: 0,
        nombre: 'nombre del quiz',
        descripcion: 'Soy una descripcion del quiz solicitado 0',
        temporizador: 10,
        maxPreguntas: 0,
        reglas: [
            { regla: 'Regla 1' },
            { regla: 'Regla 2' }
        ]
```
        
    

