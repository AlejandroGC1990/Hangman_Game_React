import { useState } from 'react';
import './App.css';
import {letters} from './helpers/letters';

function App() {
  
  return (
    <div className="App">
      {/*imagen juego*/}
      <h3></h3>
      
      {/*palabra oculta*/}
      <h3>_ _ _ _ _ _ </h3>
      
      {/*Intentos*/}
      <h3>Intentos</h3>

      {
        letters.map( (letter) => (
          <button key= { letter }> 
            {letter} 
          </button>
        ))
      }
    </div>
  
  )
}

export default App;
