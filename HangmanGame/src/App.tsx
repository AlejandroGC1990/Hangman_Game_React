import { useState } from 'react';
import './App.css';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';

function App() {
  
  const [ attempts, setAttempts ] = useState(0);

  const checkLetter = ( letter:string ) => {
    setAttempts(Math.min(attempts + 1, 9));

  }

  return (
    <div className="App">
      {/*imagen juego*/}
      <HangImage imageNumber={ attempts }/>
      
      {/*palabra oculta*/}
      <h3>_ _ _ _ _ _ </h3>
      
      {/*Intentos*/}
      <h3>Intentos: {attempts}</h3>

      {
        letters.map( (letter) => (
          <button 
            onClick={ () => checkLetter(letter) }
            key= { letter }
            > 
              {letter} 
          </button>
        ))
      }
    </div>
  
  )
}

export default App;
