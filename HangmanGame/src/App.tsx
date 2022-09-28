import { useState } from 'react';
import './App.css';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';

function App() {
  
  const [word] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [ attempts, setAttempts ] = useState(0);

  const checkLetter = ( letter:string ) => {
    if(!word.includes(letter)){
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');

    for(let i = 0; i < word.length; i++){
      if(word[i] === letter){
        hiddenWordArray[i] = letter;
      }
    } 
    
    setHiddenWord(hiddenWordArray.join(' '));
  }

  return (
    <div className="App">
      {/*Hangman img*/}
      <HangImage imageNumber={ attempts }/>
      
      {/*Hidden word*/}
      <h3>{hiddenWord}</h3>
      
      {/*Intentos*/}
      <h3>Intentos: {attempts}</h3>

      {/*Buttons for letters and control failed attempts*/}
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
