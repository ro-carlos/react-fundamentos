import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta'

const App = () =>(
  <div>
    <TarjetaFruta name={'Sandía'} price={2.0001}/>
    <TarjetaFruta name={'Pera'} price={15.6}/>
    <TarjetaFruta name={'Melocotón'} price={8.9}/>
  
  </div> 
)

export default App