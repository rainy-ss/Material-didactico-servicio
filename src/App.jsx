import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './paginas/Home/Home';
import { Temas } from './paginas/Lista de temas/Temas.jsx';
import './App.css';

function App () {
    return (
        <div className='App'>
            <HashRouter>

                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/temas' Component={Temas}/>
                </Routes>
            </HashRouter>

        </div>
    );
}

export default App;
