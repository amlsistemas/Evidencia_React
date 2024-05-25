import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Formulario from './components/Formulario'
import logo from './assets/img/logo2.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <img src={logo} />
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <p>
          Hola a todos esta es nuestra aplicacion en React Js
        </p>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Formulario />
      </div>
    </>
  )
}

export default App
