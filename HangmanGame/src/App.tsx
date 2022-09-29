import { useEffect, useState } from 'react';
import './App.css';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';

function App() {
  
  const [word] = useState('PATATA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttempts ] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if(attempts >= 9){
      setLose(true);
    }
  },[attempts]);

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');

    if(currentHiddenWord === word){
      setWon(true);
    }
  },[hiddenWord]);

  const checkLetter = ( letter:string ) => {
    if(lose) return;
    
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
      
      {/*Attempts count*/}
      <h3>Intentos: {attempts}</h3>

      {/*Message - Lose*/}
      {
        (lose) ? <h2>Lose {word}</h2>: ''
      }

      {/*Message - Win*/}
      {
        (won) ? <h2>Winner</h2>: ''
      }

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
