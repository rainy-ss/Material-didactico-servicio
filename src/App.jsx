// import { HashRouter } from 'react-router-dom'
import './App.css'
import { BarNav } from './componentes/BarNav'

function App () {
  function prueba (count) {
    return count
  }

  prueba('hola')

  return (
    <div className='App'>
      <BarNav />
    </div>
  )
}

export default App
