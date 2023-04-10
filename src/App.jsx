import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './paginas/Home/Home';
import { ListaDeTemas } from './paginas/Lista de temas/ListaDeTemas';
// import { NotFound } from './paginas/Not found/NotFound.jsx';
import './App.css';

function App () {
    return (
        <div className='App'>
            <HashRouter>

                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/lista-temas-disponibles' Component={ListaDeTemas}/>
                </Routes>
            </HashRouter>

        </div>
    );
}

export default App;
