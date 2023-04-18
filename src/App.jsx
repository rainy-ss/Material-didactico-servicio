import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './paginas/Home/Home';
import { Temas } from './paginas/Lista de temas/Temas.jsx';
import { ConstruirQuiz } from './servicios/ConstruirQuiz.jsx';
import { NotFound } from './paginas/Not found/NotFound';
import './App.css';

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

export default App;
