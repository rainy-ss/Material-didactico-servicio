# Componentes principales

## App.jsx

Componente principal de la aplicación.

- `HashRouter`: Envuelve las rutas de la aplicación y las declara como un hashroute(#), esto hara que las direcciones se traduzcan a los componentes del proyecto, en lugar de tener que hacer una carpeta en el servidor por cada ruta. 

- `Routes`: Dentro se declaran las rutas de la aplicación.  

- `Route`: Indica una ruta de la aplicación.

- `:parametro`: Indica un parametro que es pasado por medio de la ruta. 

- `*`: Indica cualquier ruta que no este definida. 

```js
function App () {
    return (
        <div className='App'>
            <HashRouter>

                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/temas' Component={Temas}/>
                    <Route path='/quiz/:tema/:id' Component={ConstruirQuiz}/>
                    <Route path='*' Component={NotFound} />
                </Routes>

            </HashRouter>

        </div>
    );
}
```